import type { Moto } from '../data/motos';

interface MotoModalProps {
    moto: Moto;
    onClose: () => void;
}

export function MotoModal({ moto, onClose }: MotoModalProps) {
    const precoFormatado = moto.preco === null
        ? 'Consulte'
        : new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(moto.preco);

    const mensagemWhatsApp = encodeURIComponent(
        `Olá! Gostaria de saber mais sobre a ${moto.nome}. Pode me enviar mais informações, condições e disponibilidade?`
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="bg-[#101812] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl shadow-black/60 border border-emerald-900 flex flex-col md:flex-row relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-slate-950/80 hover:bg-emerald-400 text-white hover:text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm transition-colors"
                    aria-label="Fechar modal"
                >
                    X
                </button>

                <div className="md:w-1/2">
                    <img
                        src={moto.imagemUrl}
                        alt={moto.nome}
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>

                <div className="p-6 md:w-1/2 flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">Modelo em destaque</span>
                    <h2 className="mt-2 text-2xl font-extrabold text-white">{moto.nome}</h2>
                    <p className="text-slate-400 mt-2 text-sm">{moto.descricao}</p>

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
                        <div>
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Condição</span>
                            <p className="font-bold text-slate-200">Sem consulta</p>
                        </div>
                    </div>

                    <div className="mt-auto pt-6">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">A partir de</p>
                        <p className="text-2xl font-extrabold text-emerald-300 mb-4">{precoFormatado}</p>
                        <a
                            href={`https://wa.me/557588604093?text=${mensagemWhatsApp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                        >
                            Falar com consultor
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}