import z3Image from '../assets/Z3.jpg';
import ttxImage from '../assets/TTX.jpg';
import z1Image from '../assets/Z1.jpg';
import m5ProImage from '../assets/M5.jpg';
import agT1Image from '../assets/AGti.jpg';
import znE111Image from '../assets/ZN-11.jpg';
import x13Image from '../assets/X13.jpg';
import s3Image from '../assets/S3.jpg';
import u2Image from '../assets/u2.jpg';
import m4C8Image from '../assets/M4.jpg';
import zn28Image from '../assets/zn-28.jpg';
import zn18Image from '../assets/ZN-18.jpg';
import quadricicloImage from '../assets/Quadriciclo.jpg';
import tankImage from '../assets/Tank.jpg';

export interface Moto {
    id: string;
    nome: string;
    descricao: string;
    preco: number | null;
    autonomiaKm: number | null;
    autonomiaMinKm?: number;
    velocidadeMaxKmH: number;
    tempoRecargaHoras: number | null;
    imagemUrl: string;
    potenciaMotor?: string;
    bateria?: string;
    pesoSuportado?: number;
    freios?: string;
    pneus?: string;
    dimensoes?: string;
    recursos?: string[];
}

export const catalogoMotos: Moto[] = [
    {
        id: 'ag-t1',
        nome: 'Voltyx AG T1',
        descricao: 'Scooter robusta com bateria de 64 V 30 Ah e autonomia de até 80 km.',
        preco: null,
        autonomiaKm: 80,
        autonomiaMinKm: 70,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: 6,
        pesoSuportado: 180,
        potenciaMotor: '1000W',
        bateria: 'Lítio 64V 30Ah',
        pneus: 'Dianteiro: 90-90-11 / Traseiro: 90/90-10',
        imagemUrl: agT1Image
    },
    {
        id: 'tank',
        nome: 'Voltyx Tank',
        descricao: 'Scooter elétrica robusta com bateria de 60 V 32 Ah e carga suportada de até 180 kg.',
        preco: null,
        autonomiaKm: 55,
        autonomiaMinKm: 50,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: 7,
        pesoSuportado: 180,
        potenciaMotor: '1000W',
        bateria: '60V 32Ah Lítio',
        imagemUrl: tankImage
    },
    {
        id: 'ttx',
        nome: 'Voltyx TTX',
        descricao: 'Scooter moderna com bateria removível, entrada USB e suporte para celular.',
        preco: null,
        autonomiaKm: 55,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        pesoSuportado: 200,
        potenciaMotor: '1000W',
        bateria: 'Removível Lítio 60V 20Ah',
        freios: 'Disco dianteiro e traseiro',
        pneus: 'Sem câmara (tubeless)',
        recursos: ['Painel digital', 'Entrada USB', 'Suporte para celular', 'Botão de ré', '4 funções de velocidade'],
        imagemUrl: ttxImage
    },
    {
        id: 'u2-chumbo',
        nome: 'Voltyx U2 (Chumbo-ácido)',
        descricao: 'Scooter compacta com bateria de chumbo-ácido, ideal para uso diário.',
        preco: null,
        autonomiaKm: 55,
        autonomiaMinKm: 45,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        pesoSuportado: 150,
        potenciaMotor: '500W',
        bateria: '60V 20Ah (Chumbo-ácido)',
        imagemUrl: u2Image
    },
    {
        id: 'u2-litio',
        nome: 'Voltyx U2 (Lítio)',
        descricao: 'Scooter compacta e inteligente com bateria de lítio de 60 V 20 Ah.',
        preco: null,
        autonomiaKm: 55,
        autonomiaMinKm: 45,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        pesoSuportado: 150,
        potenciaMotor: '500W',
        bateria: '60V 20Ah (Lítio)',
        imagemUrl: u2Image
    },
    {
        id: 'quadriciclo-infantil',
        nome: 'Voltyx Quadriciclo Infantil',
        descricao: 'Quadriciclo elétrico infantil com três modos de velocidade e estrutura resistente.',
        preco: null,
        autonomiaKm: 18,
        autonomiaMinKm: 15,
        velocidadeMaxKmH: 22,
        tempoRecargaHoras: null,
        pesoSuportado: 100,
        potenciaMotor: '500W (com escovas)',
        bateria: '36V 12Ah (Chumbo-ácido)',
        dimensoes: '103 x 66 x 75 cm',
        pneus: '4.10-6 (com câmara)',
        freios: 'A disco (~3m)',
        recursos: ['3 modos de velocidade (4/14/22 km/h)', 'Suspensão dianteira e traseira', 'Dois faróis dianteiros', 'Altura do assento: 51 cm', 'Quadro: Aço + PP'],
        imagemUrl: quadricicloImage
    },
    {
        id: 'x13',
        nome: 'Voltyx X13',
        descricao: 'Scooter elétrica com visual marcante, bateria de lítio e carga de até 200 kg.',
        preco: null,
        autonomiaKm: 60,
        autonomiaMinKm: 45,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        pesoSuportado: 200,
        potenciaMotor: '1000W',
        bateria: '60V 20A (Lítio)',
        pneus: 'Aro 10',
        imagemUrl: x13Image
    },
    {
        id: 'z3',
        nome: 'Voltyx Z3',
        descricao: 'Scooter elétrica prática para o dia a dia, com motor de 1000 W e bateria de lítio.',
        preco: null,
        autonomiaKm: null,
        velocidadeMaxKmH: 60,
        tempoRecargaHoras: 5,
        pesoSuportado: null,
        potenciaMotor: '1000W',
        bateria: 'Lítio 60V 24Ah',
        dimensoes: '115 x 68 x 60 cm',
        pneus: '14 polegadas',
        freios: 'Elétrico',
        recursos: ['Controlador 12 tubos', 'Quadro de ferro', 'Cores: Vermelho, Preto, Branco e Carbono', 'Peso: 66 kg'],
        imagemUrl: z3Image
    },
    {
        id: 'zn-18-kuzhan',
        nome: 'Voltyx ZN-18 Kuzhan',
        descricao: 'Scooter elétrica com cesta dianteira, autonomia de até 60 km e três opções de cor.',
        preco: null,
        autonomiaKm: 60,
        autonomiaMinKm: 50,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        pesoSuportado: 150,
        potenciaMotor: '800W',
        bateria: '64V 23Ah (Lítio)',
        imagemUrl: zn18Image
    },
    {
        id: 'zn-28-a60',
        nome: 'Voltyx ZN-28 A60',
        descricao: 'Scooter funcional com cesta dianteira, banco confortável e bateria de 64 V 23 Ah.',
        preco: null,
        autonomiaKm: 55,
        autonomiaMinKm: 45,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        pesoSuportado: 150,
        potenciaMotor: '800W',
        bateria: '64V 23Ah (Lítio)',
        imagemUrl: zn28Image
    },
    {
        id: 'z1',
        nome: 'Voltyx Z1',
        descricao: 'Scooter elétrica confortável, segura e ideal para a rotina urbana.',
        preco: null,
        autonomiaKm: null,
        velocidadeMaxKmH: 60,
        tempoRecargaHoras: 5,
        imagemUrl: z1Image
    },
    {
        id: 'm5-pro',
        nome: 'Voltyx M5 Pro',
        descricao: 'Modelo off-road com pneus de 11 polegadas, suspensão dupla e freio a disco.',
        preco: null,
        autonomiaKm: 35,
        velocidadeMaxKmH: 63,
        tempoRecargaHoras: 8,
        imagemUrl: m5ProImage
    },
    {
        id: 'zn-e-111',
        nome: 'Voltyx ZN-E-111',
        descricao: 'Design moderno, bateria de lítio e autonomia de até 60 km.',
        preco: null,
        autonomiaKm: 60,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        imagemUrl: znE111Image
    },
    {
        id: 's3',
        nome: 'Voltyx S3',
        descricao: 'Triciclo elétrico confortável, estável e ideal para o uso diário.',
        preco: null,
        autonomiaKm: null,
        velocidadeMaxKmH: 30,
        tempoRecargaHoras: null,
        imagemUrl: s3Image
    },
    {
        id: 'm4-c8',
        nome: 'Voltyx M4-C8',
        descricao: 'Scooter dobrável e prática, com pneus de 10 polegadas e freio a disco duplo.',
        preco: null,
        autonomiaKm: 40,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: 7,
        imagemUrl: m4C8Image
    }
];