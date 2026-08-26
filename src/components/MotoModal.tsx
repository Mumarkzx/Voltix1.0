import type { Moto } from '../data/motos';

interface MotoModalProps {
    moto: Moto;
    onClose: () => void; // Uma função para fechar a janela
}

export function MotoModal({ moto, onClose }: MotoModalProps) {
    // Formatador do preço (podemos remover no futuro, como você sugeriu)
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(moto.preco);

    return (
        // Fundo escuro transparente que cobre a tela toda (fixed inset-0 z-50 bg-black/60)
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

            {/* A caixa branca central do Modal */}
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative">

                {/* Botão de Fechar no canto superior */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white text-slate-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm transition-colors"
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
                    <h2 className="text-2xl font-extrabold text-slate-900">{moto.nome}</h2>
                    <p className="text-slate-500 mt-2 text-sm">{moto.descricao}</p>

                    {/* Métricas expandidas */}
                    <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-slate-50 rounded-xl">
                        <div>
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Autonomia</span>
                            <p className="font-bold text-slate-800">{moto.autonomiaKm} km</p>
                        </div>
                        <div>
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Vel. Máxima</span>
                            <p className="font-bold text-slate-800">{moto.velocidadeMaxKmH} km/h</p>
                        </div>
                        <div>
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Recarga</span>
                            <p className="font-bold text-slate-800">{moto.tempoRecargaHoras} horas</p>
                        </div>
                    </div>

                    <div className="mt-auto pt-6">
                        <p className="text-2xl font-extrabold text-slate-900 mb-4">{precoFormatado}</p>
                        {/* Botão do WhatsApp para o futuro */}
                        <button className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/30">
                            Cotar pelo WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}