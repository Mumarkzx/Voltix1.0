import logoVoltix from '../assets/logo Voltix2.jpeg';

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <a href="#top" className="flex-shrink-0 flex items-center cursor-pointer" aria-label="Voltyx home">
                    <img
                        src={logoVoltix}
                        alt="Voltyx Logo"
                        className="h-12 w-auto object-contain"
                    />
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#catalogo" className="text-sm font-medium text-slate-600 transition hover:text-emerald-600">
                        Catálogo
                    </a>
                    <a href="#sobre" className="text-sm font-medium text-slate-600 transition hover:text-emerald-600">
                        Sobre nós
                    </a>
                    <a href="#contato" className="text-sm font-medium text-slate-600 transition hover:text-emerald-600">
                        Contato
                    </a>
                </nav>

                <div className="hidden md:flex items-center">
                    <a
                        href="#contato"
                        className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-400"
                    >
                        Falar com consultor
                    </a>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="text-slate-600 hover:text-slate-900 focus:outline-none" aria-label="Abrir menu">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}