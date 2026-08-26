export function LocationSection() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Título da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900">Visite Nossa Loja</h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
                        Venha conhecer os modelos de perto e fazer um test ride na melhor concessionária de motos elétricas da Bahia.
                    </p>
                </div>

                {/* Container Principal Dividido */}
                <div className="flex flex-col lg:flex-row bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-200">

                    {/* Lado Esquerdo: Informações */}
                    <div className="p-8 lg:p-16 flex flex-col justify-center lg:w-1/2">
                        <div className="space-y-10">

                            <div>
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-3">
                                    <span className="text-green-500 text-2xl">📍</span> Endereço
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Av. Antônio Carlos Magalhães, 251<br />
                                    Salvador - BA
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-3">
                                    <span className="text-green-500 text-2xl">🕒</span> Horário de Funcionamento
                                </h3>
                                <ul className="text-slate-600 space-y-2">
                                    <li className="flex justify-between border-b border-slate-200 pb-2">
                                        <span>Segunda a Sexta</span>
                                        <span className="font-medium text-slate-900">09:00 às 18:00</span>
                                    </li>
                                    <li className="flex justify-between border-b border-slate-200 pb-2">
                                        <span>Sábado</span>
                                        <span className="font-medium text-slate-900">09:00 às 13:00</span>
                                    </li>
                                    <li className="flex justify-between pb-2">
                                        <span>Domingo</span>
                                        <span className="font-medium text-slate-400">Fechado</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-3">
                                    <span className="text-green-500 text-2xl">📱</span> Contato
                                </h3>
                                <p className="text-slate-600 font-medium">(71) 99999-9999</p>
                                <p className="text-slate-600">contato@voltyx.com.br</p>
                            </div>

                        </div>
                    </div>

                    {/* Lado Direito: Google Maps apontando para a Av. ACM */}
                    <div className="h-96 lg:h-auto lg:w-1/2 w-full min-h-[400px]">
                        <iframe
                            src="https://maps.google.com/maps?q=Av.%20Ant%C3%B4nio%20Carlos%20Magalh%C3%A3es,%20251,%20Salvador%20-%20BA&t=&z=15&ie=UTF8&iwloc=&output=embed"
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