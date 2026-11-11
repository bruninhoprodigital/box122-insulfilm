'use client';

import { useState } from 'react';
import { nav } from '../lib/business';
import { WhatsApp } from './Actions';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header backdrop-blur-md" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        event.currentTarget.querySelector('button').focus();
      }
    }}>
      <div className="shell nav-inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>BOX <b>122</b><small>INSULFILM</small></a>
        <button type="button" className="menu-button" aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'}</button>
        <nav id="main-nav" className={open ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <WhatsApp className="button top-cta" label="Pedir orçamento no WhatsApp"><span>Orçamento</span></WhatsApp>
      </div>
    </header>
  );
}
