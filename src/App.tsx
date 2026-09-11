import { useEffect, useState } from 'react';
import type { Moto } from './data/motos';
import { catalogoMotos } from './data/motos';
import { MotoCard } from './components/MotoCard';
import { MotoModal } from './components/MotoModal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LocationSection } from './components/LocationSection';

const motosDestaque = catalogoMotos.filter((moto) =>
    ['tank', 'z3', 'm5-pro'].includes(moto.id)
);

function App() {
    const [motoSelecionada, setMotoSelecionada] = useState<Moto | null>(null);
    const [destaqueAtual, setDestaqueAtual] = useState(0);
    const motoDestaque = motosDestaque[destaqueAtual];

    useEffect(() => {
        const temporizador = window.setInterval(() => {
            setDestaqueAtual((indiceAtual) => (indiceAtual + 1) % motosDestaque.length);
        }, 5000);

        return () => window.clearInterval(temporizador);
    }, []);

    return (
        <div className="min-h-screen bg-[#050807] text-slate-100 flex flex-col">
            <Header />

            <main className="flex-grow">
                <section className="relative isolate overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.88)_45%,rgba(2,6,23,0.35)_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.2),transparent_28%)]" />
                    <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Voltyx mobilidade elétrica</p>
                            <h1 className="mt-5 max-w-xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">
                                Mais liberdade para todos os caminhos.
                            </h1>
                            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                                Encontre a scooter elétrica ideal para sua rotina, com economia, conforto e tecnologia para chegar mais longe.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a href="#catalogo" className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300">
                                    Explorar catálogo
                                </a>
                                <a href="#contato" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:border-emerald-300 hover:text-emerald-200">
                                    Falar com consultor
                                </a>
                            </div>

                            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6">
                                <div>
                                    <p className="text-3xl font-black">14</p>
                                    <p className="mt-1 text-sm text-slate-400">modelos disponíveis</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black">80 km</p>
                                    <p className="mt-1 text-sm text-slate-400">autonomia máxima</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-emerald-300">0</p>
                                    <p className="mt-1 text-sm text-slate-400">emissões diretas</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:-mr-16">
                            <div className="absolute -inset-5 rounded-[2rem] bg-emerald-400/10 blur-3xl" />
                            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl shadow-black/40">
                                <img
                                    key={motoDestaque.id}
                                    src={motoDestaque.imagemUrl}
                                    alt={`Scooter elétrica ${motoDestaque.nome}`}
                                    className="h-[420px] w-full object-cover object-[38%_center] transition-opacity duration-500 sm:h-[500px]"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-6 pb-6 pt-20">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Modelo em destaque</p>
                                    <p className="mt-1 text-2xl font-black">{motoDestaque.nome}</p>
                                    <p className="mt-1 text-sm text-slate-300">{motoDestaque.descricao}</p>
                                    <div className="mt-5 flex items-center gap-2" aria-label="Selecionar modelo em destaque">
                                        {motosDestaque.map((moto, indice) => (
                                            <button
                                                key={moto.id}
                                                type="button"
                                                onClick={() => setDestaqueAtual(indice)}
                                                aria-label={`Mostrar ${moto.nome}`}
                                                aria-current={indice === destaqueAtual}
                                                className={`h-2 rounded-full transition-all ${indice === destaqueAtual ? 'w-8 bg-emerald-300' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sobre" className="bg-[#0a0f0c] py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-2xl border border-emerald-900/60 bg-[#101812] p-6 shadow-lg shadow-black/20">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/15 text-2xl">⚡</div>
                                <h3 className="text-xl font-bold text-white">Potência instantânea</h3>
                                <p className="mt-2 text-slate-400">Torque imediato com resposta ágil em qualquer trajeto urbano ou de longa distância.</p>
                            </div>
                            <div className="rounded-2xl border border-emerald-900/60 bg-[#101812] p-6 shadow-lg shadow-black/20">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/15 text-2xl">🔋</div>
                                <h3 className="text-xl font-bold text-white">Baterias inteligentes</h3>
                                <p className="mt-2 text-slate-400">Tecnologia pensada para máxima autonomia, eficiência e vida útil da bateria.</p>
                            </div>
                            <div className="rounded-2xl border border-emerald-900/60 bg-[#101812] p-6 shadow-lg shadow-black/20">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/15 text-2xl">🌱</div>
                                <h3 className="text-xl font-bold text-white">Mobilidade sustentável</h3>
                                <p className="mt-2 text-slate-400">Menos emissões, menos ruído e mais liberdade para circular com consciência.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#050807]">
                    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Catálogo</p>
                            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Encontre a Voltyx ideal para o seu estilo.</h2>
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