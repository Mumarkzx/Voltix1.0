import { useState } from 'react';
import logoVoltix from '../assets/logo Voltix2.jpeg';

const navLinks = [
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Contato', href: '#contato' }
];

const whatsappLink = 'https://wa.me/557588604093?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20as%20motos%20el%C3%A9tricas%20da%20Voltyx.';
const instagramLink = 'https://www.instagram.com/voltyx.tucano/';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-emerald-950/80 bg-[#050807]/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
                <a href="#top" className="flex-shrink-0 flex items-center cursor-pointer" aria-label="Voltyx home">
                    <img
                        src={logoVoltix}
                        alt="Voltyx Logo"
                        className="h-12 w-auto object-contain"
                    />
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-emerald-300">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={instagramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-slate-300 transition hover:text-emerald-300"
                    >
                        Instagram
                    </a>
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <a
                        href={instagramLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram da Voltyx"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/50 bg-emerald-500/10 transition hover:border-emerald-300 hover:bg-emerald-400"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current text-emerald-300 transition group-hover:text-slate-950">
                            <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" />
                            <circle cx="12" cy="12" r="4.2" strokeWidth="1.8" />
                            <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
                        </svg>
                    </a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-400"
                    >
                        WhatsApp
                    </a>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((state) => !state)}
                        className="text-slate-300 hover:text-emerald-300 focus:outline-none"
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="border-t border-emerald-950/80 bg-[#050807] md:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="py-3 text-base font-medium text-slate-200 transition hover:text-emerald-300"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={instagramLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="py-3 text-base font-medium text-slate-200 transition hover:text-emerald-300"
                        >
                            Instagram
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-500/20"
                        >
                            Enviar mensagem no WhatsApp
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}