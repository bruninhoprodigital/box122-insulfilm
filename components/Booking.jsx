'use client';

import { useEffect, useState } from 'react';
import { bookingOptions, whatsapp } from '../lib/business';
import { WhatsAppIcon } from './Actions';

function localNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts();
  const get = (type) => parts.find((part) => part.type === type).value;
  return { date: get('year') + '-' + get('month') + '-' + get('day'), time: get('hour') + ':' + get('minute') };
}

export default function Booking() {
  const [service, setService] = useState('');
  const [today, setToday] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    setToday(localNow().date);
    function preselect(event) {
      const option = event.target.closest('[data-book-service]')?.dataset.bookService;
      if (bookingOptions.includes(option)) {
        setService(option);
        setError('');
      }
    }
    document.addEventListener('click', preselect);
    return () => document.removeEventListener('click', preselect);
  }, []);

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = data.get('date');
    const time = data.get('time');
    const now = localNow();
    if (date < now.date || (date === now.date && time <= now.time) || time < '08:30') {
      setError('Escolha uma data e um horário futuros, a partir das 08:30.');
      return;
    }
    const details = data.get('details').trim();
    const message = [
      'Olá, Box 122! Vim pelo site e gostaria de solicitar um agendamento.',
      'Serviço: ' + service,
      'Data preferida: ' + date.split('-').reverse().join('/'),
      'Horário preferido: ' + time,
      details && 'Detalhes: ' + details,
      'Podem confirmar a disponibilidade, por favor?',
    ].filter(Boolean).join('\n');
    window.location.assign(whatsapp(message));
  }

  return (
    <section className="shell section" id="agendamento">
      <div className="booking-panel">
        <div>
          <h2>Agende seu serviço</h2>
          <p className="muted" id="booking-help">Escolha uma data e um horário de sua preferência, a partir das 08:30. A equipe confirma a disponibilidade pelo WhatsApp.</p>
        </div>
        <form className="booking-form" onSubmit={submit} onChange={() => setError('')} aria-describedby="booking-help">
          <label className="booking-wide">Serviço<select name="service" required value={service} onChange={(event) => setService(event.target.value)}>
            <option value="" disabled>Selecione o serviço</option>
            {bookingOptions.map((option) => <option key={option}>{option}</option>)}
          </select></label>
          <label>Data preferida<input name="date" type="date" min={today || undefined} required /></label>
          <label>Horário preferido<input name="time" type="time" min="08:30" required /></label>
          <label className="booking-wide">Detalhes (opcional)<textarea name="details" rows="2" maxLength={240} placeholder="Modelo do carro, tipo de vidro ou outra informação" /></label>
          {error && <p className="booking-wide booking-error" role="alert">{error}</p>}
          <button type="submit" className="button booking-wide"><WhatsAppIcon /> Solicitar pelo WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
