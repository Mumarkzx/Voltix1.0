import logoIcon from '../assets/logo Voltix.jpeg';

export function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer id="contato" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1 flex flex-col items-start">
                        <div className="bg-white p-2 rounded-xl inline-block mb-4">
                            <img
                                src={logoIcon}
                                alt="Voltyx Icon"
                                className="h-10 w-10 object-contain"
                            />
                        </div>
                        <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                            O futuro da mobilidade elétrica. Performance, economia e sustentabilidade em cada quilômetro.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Modelos</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#catalogo" className="hover:text-emerald-400 transition-colors">Urban S</a></li>
                            <li><a href="#catalogo" className="hover:text-emerald-400 transition-colors">Touring X</a></li>
                            <li><a href="#catalogo" className="hover:text-emerald-400 transition-colors">Pro Max</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Institucional</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#sobre" className="hover:text-emerald-400 transition-colors">Quem Somos</a></li>
                            <li><a href="#contato" className="hover:text-emerald-400 transition-colors">Garantia</a></li>
                            <li><a href="#contato" className="hover:text-emerald-400 transition-colors">Assistência Técnica</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contato</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-500">📍</span> São Paulo, SP
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-500">✉️</span> contato@voltyx.com.br
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-500">📱</span> (11) 99999-9999
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {anoAtual} Voltyx Motos Elétricas. Todos os direitos reservados.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">YouTube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}