import type { Moto } from '../data/motos';

interface MotoModalProps {
    moto: Moto;
    onClose: () => void; // Uma função para fechar a janela
}

export function MotoModal({ moto, onClose }: MotoModalProps) {
    // Formatador do preço (podemos remover no futuro, como você sugeriu)
    const precoFormatado = moto.preco === null
        ? 'Consulte'
        : new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(moto.preco);
    const mensagemWhatsApp = encodeURIComponent(
        `Olá! Gostaria de fazer uma cotação da ${moto.nome}. Pode me enviar mais informações, por favor?`
    );

    return (
        // Fundo escuro transparente que cobre a tela toda (fixed inset-0 z-50 bg-black/60)
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

            {/* A caixa branca central do Modal */}
            <div className="bg-[#101812] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl shadow-black/60 border border-emerald-900 flex flex-col md:flex-row relative">

                {/* Botão de Fechar no canto superior */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-slate-950/80 hover:bg-emerald-400 text-white hover:text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm transition-colors"
                >
                    X
                </button>

                {/* Imagem (Fica na esquerda em telas grandes, e no topo em celulares) */}
                <div className="md:w-1/2">
                    <img
                        src={moto.imagemUrl}
                        alt={moto.nome}
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>

                {/* Informações detalhadas */}
                <div className="p-6 md:w-1/2 flex flex-col">
                    <h2 className="text-2xl font-extrabold text-white">{moto.nome}</h2>
                    <p className="text-slate-400 mt-2 text-sm">{moto.descricao}</p>

                    {/* Métricas expandidas */}
                    <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-[#07100a] rounded-xl border border-emerald-950">
                        <div>
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Autonomia</span>
                            <p className="font-bold text-slate-200">{moto.autonomiaKm ? `${moto.autonomiaKm} km` : 'Consulte'}</p>
                        </div>
                        <div>
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Vel. Máxima</span>
                            <p className="font-bold text-slate-200">{moto.velocidadeMaxKmH} km/h</p>
                        </div>
                        <div>
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Recarga</span>
                            <p className="font-bold text-slate-200">{moto.tempoRecargaHoras ? `${moto.tempoRecargaHoras} horas` : 'Consulte'}</p>
                        </div>
                    </div>

                    <div className="mt-auto pt-6">
                        <p className="text-2xl font-extrabold text-emerald-300 mb-4">{precoFormatado}</p>
                        <a
                            href={`https://wa.me/557588604093?text=${mensagemWhatsApp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                        >
                            Cotar pelo WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}