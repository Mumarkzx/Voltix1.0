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

    const autonomiaTexto = moto.autonomiaMinKm && moto.autonomiaKm
        ? `${moto.autonomiaMinKm} a ${moto.autonomiaKm} km`
        : moto.autonomiaKm ? `${moto.autonomiaKm} km` : 'Consulte';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
            <div className="bg-[#101812] rounded-2xl max-w-4xl w-full shadow-2xl shadow-black/60 border border-emerald-900 my-8">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-slate-950/80 hover:bg-emerald-400 text-white hover:text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm transition-colors z-10"
                    aria-label="Fechar modal"
                >
                    X
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                    <div className="md:col-span-1">
                        <img
                            src={moto.imagemUrl}
                            alt={moto.nome}
                            className="w-full h-96 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                        />
                    </div>

                    <div className="p-6 md:col-span-1 flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">Modelo em destaque</span>
                        <h2 className="mt-2 text-3xl font-extrabold text-white">{moto.nome}</h2>
                        <p className="text-slate-400 mt-2 text-sm">{moto.descricao}</p>

                        {/* Informações principais */}
                        <div className="grid grid-cols-2 gap-3 mt-6 p-4 bg-[#07100a] rounded-xl border border-emerald-950">
                            <div>
                                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Potência</span>
                                <p className="font-bold text-slate-200">{moto.potenciaMotor || 'Consulte'}</p>
                            </div>
                            <div>
                                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Bateria</span>
                                <p className="font-bold text-slate-200 text-xs">{moto.bateria || 'Consulte'}</p>
                            </div>
                            <div>
                                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Autonomia</span>
                                <p className="font-bold text-slate-200">{autonomiaTexto}</p>
                            </div>
                            <div>
                                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Vel. Máxima</span>
                                <p className="font-bold text-slate-200">{moto.velocidadeMaxKmH} km/h</p>
                            </div>
                            {moto.pesoSuportado && (
                                <div>
                                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Peso Sup.</span>
                                    <p className="font-bold text-slate-200">{moto.pesoSuportado} kg</p>
                                </div>
                            )}
                            {moto.tempoRecargaHoras && (
                                <div>
                                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Recarga</span>
                                    <p className="font-bold text-slate-200">{moto.tempoRecargaHoras}h</p>
                                </div>
                            )}
                        </div>

                        {/* Especificações adicionais */}
                        <div className="mt-4 space-y-2">
                            {moto.freios && (
                                <div className="text-xs">
                                    <span className="text-emerald-400 font-bold">Freios:</span>
                                    <span className="text-slate-300 ml-2">{moto.freios}</span>
                                </div>
                            )}
                            {moto.pneus && (
                                <div className="text-xs">
                                    <span className="text-emerald-400 font-bold">Pneus:</span>
                                    <span className="text-slate-300 ml-2">{moto.pneus}</span>
                                </div>
                            )}
                            {moto.dimensoes && (
                                <div className="text-xs">
                                    <span className="text-emerald-400 font-bold">Dimensões:</span>
                                    <span className="text-slate-300 ml-2">{moto.dimensoes}</span>
                                </div>
                            )}
                        </div>

                        {/* Recursos */}
                        {moto.recursos && moto.recursos.length > 0 && (
                            <div className="mt-4 p-3 bg-[#07100a] rounded-lg border border-emerald-950">
                                <p className="text-emerald-400 font-bold text-xs uppercase mb-2">Recursos</p>
                                <ul className="space-y-1">
                                    {moto.recursos.map((recurso, idx) => (
                                        <li key={idx} className="text-slate-300 text-xs flex items-start">
                                            <span className="text-emerald-400 mr-2">•</span>
                                            <span>{recurso}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-6 pt-4 border-t border-emerald-950">
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
        </div>
    );
}
