import { useState } from 'react';
import type { Moto } from './data/motos';
import { catalogoMotos } from './data/motos';
import { MotoCard } from './components/MotoCard';
import { MotoModal } from './components/MotoModal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LocationSection } from './components/LocationSection';

function App() {
    const [motoSelecionada, setMotoSelecionada] = useState<Moto | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            <Header />

            <main className="flex-grow">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.22),transparent_30%)]" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-200">
                                    Mobilidade elétrica premium
                                </span>
                                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                                    Escolha a moto que leva seu dia a outro nível.
                                </h1>
                                <p className="mt-5 max-w-xl text-lg text-slate-300">
                                    Descubra a linha Voltyx com tecnologia, autonomia de verdade e design que faz a diferença no trânsito e na rotina.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#catalogo"
                                        className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                                    >
                                        Ver catálogo
                                    </a>
                                    <a
                                        href="#contato"
                                        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                                    >
                                        Falar com consultor
                                    </a>
                                </div>

                                <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                                    <div>
                                        <p className="text-3xl font-black text-white">80+</p>
                                        <p className="text-sm text-slate-300">km de autonomia</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black text-white">4h</p>
                                        <p className="text-sm text-slate-300">tempo de recarga</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black text-white">0</p>
                                        <p className="text-sm text-slate-300">emissões</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
                                    <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-400 via-green-500 to-slate-900 p-6 text-slate-950">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">Voltyx</span>
                                            <span className="rounded-full bg-slate-950 px-2.5 py-1 text-xs font-semibold text-emerald-300">New</span>
                                        </div>
                                        <div className="mt-10 space-y-4">
                                            <div className="rounded-2xl bg-white/85 p-4 shadow-md">
                                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Modelo destaque</p>
                                                <p className="mt-2 text-2xl font-black text-slate-900">Voltix Pro Max</p>
                                                <p className="mt-1 text-sm text-slate-600">120 km/h · 220 km · 8h recarga</p>
                                            </div>
                                            <div className="flex items-center justify-between rounded-2xl bg-slate-950/90 p-4 text-white">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">A partir de</p>
                                                    <p className="text-3xl font-black">R$ 25.400</p>
                                                </div>
                                                <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl">
                                                    ⚡
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sobre" className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">⚡</div>
                                <h3 className="text-xl font-bold text-slate-900">Potência instantânea</h3>
                                <p className="mt-2 text-slate-600">Torque imediato com resposta ágil em qualquer trajeto urbano ou de longa distância.</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">🔋</div>
                                <h3 className="text-xl font-bold text-slate-900">Baterias inteligentes</h3>
                                <p className="mt-2 text-slate-600">Tecnologia pensada para máxima autonomia, eficiência e vida útil da bateria.</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">🌱</div>
                                <h3 className="text-xl font-bold text-slate-900">Mobilidade sustentável</h3>
                                <p className="mt-2 text-slate-600">Menos emissões, menos ruído e mais liberdade para circular com consciência.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Catálogo</p>
                            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">Encontre a Voltyx ideal para o seu estilo.</h2>
                        </div>
                        <a href="#contato" className="text-sm font-bold text-emerald-600 hover:text-emerald-500">Solicitar orçamento →</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {catalogoMotos.map((moto) => (
                            <MotoCard
                                key={moto.id}
                                moto={moto}
                                onAbrirDetalhes={() => setMotoSelecionada(moto)}
                            />
                        ))}
                    </div>
                </section>

                <LocationSection />
            </main>

            <Footer />

            {motoSelecionada && (
                <MotoModal
                    moto={motoSelecionada}
                    onClose={() => setMotoSelecionada(null)}
                />
            )}
        </div>
    );
}

export default App;