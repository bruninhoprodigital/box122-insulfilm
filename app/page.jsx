import Header from '../components/Header';
import Booking from '../components/Booking';
import Hero from '../components/Hero';
import { Gallery, Location, Reviews, Services } from '../components/Sections';
import Footer from '../components/Footer';
import { WhatsApp } from '../components/Actions';
import { address, maps } from '../lib/business';

const structuredData = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Box 122 Insulfilm', telephone: '+5522992910086', hasMap: maps,
  address: { '@type': 'PostalAddress', streetAddress: address.split(' - ')[0],
    addressLocality: 'Rio das Ostras', addressRegion: 'RJ', addressCountry: 'BR' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo"><Hero /><Services /><Booking /><Gallery /><Reviews /><Location /></main>
      <Footer />
      <WhatsApp className="button float pulse" label="Abrir WhatsApp da Box 122" />
    </>
  );
}
