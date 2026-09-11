export function LocationSection() {
    return (
        <section className="py-24 bg-[#0a0f0c] border-t border-emerald-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Título da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white">Visite Nossa Loja</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                        Venha conhecer os modelos de perto e fazer um test ride na melhor concessionária de motos elétricas da Bahia.
                    </p>
                </div>

                {/* Container Principal Dividido */}
                <div className="flex flex-col lg:flex-row bg-[#101812] rounded-3xl overflow-hidden shadow-lg shadow-black/20 border border-emerald-950">

                    {/* Lado Esquerdo: Informações */}
                    <div className="p-8 lg:p-16 flex flex-col justify-center lg:w-1/2">
                        <div className="space-y-10">

                            <div>
                                <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-3">
                                    <span className="text-green-500 text-2xl">📍</span> Endereço
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Av. Antônio Carlos de Magalhães, 160<br />
                                    Centro, Tucano - BA
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-3">
                                    <span className="text-green-500 text-2xl">🕒</span> Horário de Funcionamento
                                </h3>
                                <ul className="text-slate-300 space-y-2">
                                    <li className="flex justify-between border-b border-emerald-950 pb-2">
                                        <span>Segunda a Sexta</span>
                                        <span className="font-medium text-white">09:00 às 18:00</span>
                                    </li>
                                    <li className="flex justify-between border-b border-emerald-950 pb-2">
                                        <span>Sábado</span>
                                        <span className="font-medium text-white">09:00 às 13:00</span>
                                    </li>
                                    <li className="flex justify-between pb-2">
                                        <span>Domingo</span>
                                        <span className="font-medium text-slate-400">Fechado</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-3">
                                    <span className="text-green-500 text-2xl">📱</span> Contato
                                </h3>
                                <p className="text-slate-300 font-medium">+55 (75) 8860-4093</p>
                                <p className="text-slate-300">contato@voltyx.com.br</p>
                            </div>

                        </div>
                    </div>

                    {/* Lado Direito: Google Maps apontando para a loja */}
                    <div className="h-96 lg:h-auto lg:w-1/2 w-full min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps?q=Avenida%20Ant%C3%B4nio%20Carlos%20de%20Magalh%C3%A3es,%20160,%20Centro,%20Tucano%20-%20BA&z=18&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Voltyx"
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}