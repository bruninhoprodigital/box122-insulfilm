import Photo from './Photo';
import { WhatsApp } from './Actions';
import { address, directions, maps, mapQuery, photos, reviews, services } from '../lib/business';

export function Services() {
  return (
    <section className="shell section" id="servicos">
      <p className="eyebrow">Serviços</p><h2>Películas, som e acessórios</h2>
      <div className="grid cards">
        {services.map(({ title, text, photo }, index) => (
          <article key={title} className="card reveal" style={{ '--entry': index * 12 + '%' }}>
            <Photo photo={photo} />
            <div className="card-body"><h3>{title}</h3><p>{text}</p>
              <div className="service-actions"><a href="#agendamento" data-book-service={title} className="button secondary" aria-label={'Agendar ' + title}>Agendar serviço</a>
              <WhatsApp className="text-link" label={'Orçamento de ' + title} message={'Olá! Gostaria de um orçamento para ' + title.toLowerCase() + '.'}>Consultar orçamento</WhatsApp></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="shell section" id="galeria">
      <p className="eyebrow">Galeria</p><h2>Trabalhos e espaço da Box 122</h2>
      <div className="grid gallery">
        {[{ file: 'fachada-noturna', label: 'Fachada da Box 122 à noite' }, photos.suv, photos.front].map((photo, index) => (
          <figure className="reveal" key={photo.file} style={{ '--entry': index * 12 + '%' }}>
            <Photo photo={photo} /><figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </div>
      <a className="text-link" href={maps}>Abrir ficha no Google Maps ↗</a>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="shell section" id="depoimentos">
      <p className="eyebrow">Depoimentos</p><h2>Avaliações de clientes</h2>
      {reviews.length > 0 && <div className="grid cards">{reviews.map(({ quote, author, url }) => (
        <figure className="card card-body" key={author + quote}>
          <blockquote>{quote}</blockquote><figcaption><a className="text-link" href={url}>{author} · Google ↗</a></figcaption>
        </figure>
      ))}</div>}
      <a className="button secondary" href={maps}>Ver avaliações na ficha do Google ↗</a>
    </section>
  );
}

export function Location() {
  return (
    <section className="shell section" id="localizacao">
      <div className="location">
        <div id="contato">
          <p className="eyebrow">Localização e contato</p><h2>Visite a Box 122</h2>
          <address>{address}</address>
          <p className="muted">Abre às 08:30. Consulte os dias de atendimento pelo WhatsApp.</p>
          <p><a className="text-link" href="tel:+5522992910086">(22) 99291-0086</a></p>
          <div className="actions"><a className="button secondary" href={directions}>Como chegar ↗</a><WhatsApp className="button">WhatsApp</WhatsApp></div>
        </div>
        <iframe title="Mapa da Box 122 Insulfilm em Rio das Ostras" loading="lazy" allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          src={'https://maps.google.com/maps?q=' + mapQuery + '&output=embed'} />
        <figure className="location-sign"><Photo photo={photos.sign} /><figcaption>Placa de serviços na entrada da Box 122</figcaption></figure>
      </div>
    </section>
  );
}
