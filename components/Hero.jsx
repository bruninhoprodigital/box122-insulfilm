import Photo from './Photo';
import { photos } from '../lib/business';
import { WhatsApp } from './Actions';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="titulo">
      <div className={'shell ' + styles.layout}>
        <div className={styles.intro}>
          <p className="eyebrow">Cidade Praiana · Rio das Ostras</p>
          <h1 id="titulo">Mais conforto no seu carro <em>e na sua casa.</em></h1>
          <p className="lead">Películas com proteção UV, redução de calor e mais privacidade. Instalação profissional para valorizar seus vidros e atendimento rápido pelo WhatsApp.</p>
          <div className="actions"><WhatsApp className="button pulse">Pedir orçamento</WhatsApp><a className="button secondary" href="#agendamento">Agendar serviço</a></div>
          <ul className="badges"><li>✓ Instalação especializada</li><li>✓ Atendimento local</li></ul>
        </div>
        <div className={styles.frame}><Photo photo={photos.facade} priority /></div>
      </div>
    </section>
  );
}
