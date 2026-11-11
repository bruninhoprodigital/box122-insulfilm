import { maps, nav, socialLinks, whatsapp } from '../lib/business';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><strong>Box 122 Insulfilm</strong><p>© {new Date().getUTCFullYear()} Box 122 Insulfilm. Todos os direitos reservados.</p></div>
        <nav aria-label="Links do rodapé">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href={maps}>Google Maps</a><a href={whatsapp()}>WhatsApp</a>
          {socialLinks.map(({ label, url }) => <a key={url} href={url}>{label}</a>)}
        </nav>
        <details><summary>Privacidade e avisos legais</summary><p>Esta página não possui formulário próprio. O mapa incorporado é fornecido pelo Google. Ao abrir o WhatsApp ou o Google Maps, aplicam-se as políticas desses serviços.</p></details>
        <a className="credit" href="https://wa.me/5521964345599">Trabalho criado por Bruno Abreu (21964345599)</a>
      </div>
    </footer>
  );
}
