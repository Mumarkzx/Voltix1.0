import type { Moto } from '../data/motos';

interface MotoCardProps {
    moto: Moto;
    onAbrirDetalhes: () => void;
}

export function MotoCard({ moto, onAbrirDetalhes }: MotoCardProps) {
    const precoFormatado = moto.preco === null
        ? 'Consulte'
        : new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(moto.preco);

    return (
        <article className="bg-[#101812] rounded-2xl shadow-lg shadow-black/25 border border-emerald-950 overflow-hidden hover:border-emerald-500/60 hover:shadow-emerald-950/40 transition-all duration-300 flex flex-col">
            <div className="relative">
                <img
                    src={moto.imagemUrl}
                    alt={moto.nome}
                    className="w-full h-56 object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full border border-emerald-300/50 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-200">
                    Popular
                </span>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{moto.nome}</h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2 flex-grow">
                    {moto.descricao}
                </p>

                <div className="flex gap-4 mt-5 pt-5 border-t border-emerald-950 text-sm">
                    <div className="flex flex-col">
                        <span className="text-emerald-400/70 text-xs uppercase font-semibold">Autonomia</span>
                        <span className="font-bold text-slate-200">{moto.autonomiaKm ? `${moto.autonomiaKm} km` : 'Consulte'}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-emerald-400/70 text-xs uppercase font-semibold">Vel. Máx</span>
                        <span className="font-bold text-slate-200">{moto.velocidadeMaxKmH} km/h</span>
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Valor</p>
                        <span className="text-2xl font-extrabold text-emerald-300">{precoFormatado}</span>
                    </div>
                    <button
                        onClick={onAbrirDetalhes}
                        className="bg-emerald-400 text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-emerald-300 transition-colors"
                    >
                        Ver mais
                    </button>
                </div>
            </div>
        </article>
    );
}