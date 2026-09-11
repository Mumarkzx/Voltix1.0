import type { Moto } from '../data/motos';

// Definimos que este componente precisa receber uma "moto" como propriedade
interface MotoCardProps {
    moto: Moto;
    onAbrirDetalhes: () => void;
}

export function MotoCard({ moto, onAbrirDetalhes }: MotoCardProps) {
    // Formatador nativo do JavaScript para deixar o preço em Reais (R$)
    const precoFormatado = moto.preco === null
        ? 'Consulte'
        : new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(moto.preco);

    return (
        // bg-white: fundo branco | rounded-2xl: bordas bem arredondadas | shadow-md: sombra leve
        // hover:shadow-xl transition-shadow: faz a sombra aumentar suavemente ao passar o mouse
        <div className="bg-[#101812] rounded-2xl shadow-lg shadow-black/25 border border-emerald-950 overflow-hidden hover:border-emerald-500/60 hover:shadow-emerald-950/40 transition-all duration-300 flex flex-col">

            {/* Imagem da moto. h-56 define a altura fixa, object-cover garante que a imagem não achate */}
            <img
                src={moto.imagemUrl}
                alt={moto.nome}
                className="w-full h-56 object-cover"
            />

            {/* Container do texto (p-5 dá um espaçamento interno de 20px) */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{moto.nome}</h3>

                {/* line-clamp-2 corta o texto com "..." se passar de 2 linhas */}
                <p className="text-sm text-slate-400 mt-2 line-clamp-2 flex-grow">
                    {moto.descricao}
                </p>

                {/* Caixinha com as métricas principais */}
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

                {/* Rodapé do card com Preço e Botão */}
                <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-emerald-300">{precoFormatado}</span>
                    <button
                        onClick={onAbrirDetalhes}
                        className="bg-emerald-400 text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-emerald-300 transition-colors"
                    >
                        Detalhes
                    </button>
                </div>
            </div>
        </div>
    );
}