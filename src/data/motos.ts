import z3Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.09.jpeg';
import ttxImage from '../assets/WhatsApp Image 2026-09-11 at 16.55.09 (1).jpeg';
import z1Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.09 (2).jpeg';
import m5ProImage from '../assets/WhatsApp Image 2026-09-11 at 16.55.10.jpeg';
import agT1Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.10 (1).jpeg';
import znE111Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.10 (2).jpeg';
import x13Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.10 (3).jpeg';
import s3Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.10 (4).jpeg';
import u2Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.11.jpeg';
import m4C8Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.11 (1).jpeg';
import zn28Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.11 (2).jpeg';
import zn18Image from '../assets/WhatsApp Image 2026-09-11 at 16.55.11 (3).jpeg';
import quadricicloImage from '../assets/WhatsApp Image 2026-09-11 at 16.55.12.jpeg';
import tankImage from '../assets/WhatsApp Image 2026-09-11 at 16.55.12 (1).jpeg';

export interface Moto {
    id: string;
    nome: string;
    descricao: string;
    preco: number | null;
    autonomiaKm: number | null;
    velocidadeMaxKmH: number;
    tempoRecargaHoras: number | null;
    imagemUrl: string;
}

export const catalogoMotos: Moto[] = [
    {
        id: 'z3',
        nome: 'Voltyx Z3',
        descricao: 'Scooter elétrica prática para o dia a dia, com motor de 1000 W e bateria de lítio.',
        preco: null,
        autonomiaKm: null,
        velocidadeMaxKmH: 60,
        tempoRecargaHoras: 5,
        imagemUrl: z3Image
    },
    {
        id: 'ttx',
        nome: 'Voltyx TTX',
        descricao: 'Scooter moderna com bateria removível, entrada USB e suporte para celular.',
        preco: null,
        autonomiaKm: 55,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        imagemUrl: ttxImage
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
        id: 'ag-t1',
        nome: 'Voltyx AG T1',
        descricao: 'Scooter robusta com bateria de 64 V 30 Ah e autonomia de até 80 km.',
        preco: null,
        autonomiaKm: 80,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: 7,
        imagemUrl: agT1Image
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
        id: 'x13',
        nome: 'Voltyx X13',
        descricao: 'Scooter elétrica com visual marcante, bateria de lítio e carga de até 200 kg.',
        preco: null,
        autonomiaKm: 60,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        imagemUrl: x13Image
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
        id: 'u2-litio',
        nome: 'Voltyx U2',
        descricao: 'Scooter compacta e inteligente com bateria de lítio de 60 V 20 Ah.',
        preco: null,
        autonomiaKm: 55,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        imagemUrl: u2Image
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
    },
    {
        id: 'zn-28-a60',
        nome: 'Voltyx ZN-28 A60',
        descricao: 'Scooter funcional com cesta dianteira, banco confortável e bateria de 64 V 23 Ah.',
        preco: null,
        autonomiaKm: 55,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        imagemUrl: zn28Image
    },
    {
        id: 'zn-18-kuzhan',
        nome: 'Voltyx ZN-18 Kuzhan',
        descricao: 'Scooter elétrica com cesta dianteira, autonomia de até 60 km e três opções de cor.',
        preco: null,
        autonomiaKm: 60,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: null,
        imagemUrl: zn18Image
    },
    {
        id: 'quadriciclo-infantil',
        nome: 'Voltyx Quadriciclo Infantil',
        descricao: 'Quadriciclo elétrico infantil com três modos de velocidade e estrutura resistente.',
        preco: null,
        autonomiaKm: 18,
        velocidadeMaxKmH: 22,
        tempoRecargaHoras: null,
        imagemUrl: quadricicloImage
    },
    {
        id: 'tank',
        nome: 'Voltyx Tank',
        descricao: 'Scooter elétrica robusta com bateria de 60 V 32 Ah e carga suportada de até 180 kg.',
        preco: null,
        autonomiaKm: 55,
        velocidadeMaxKmH: 32,
        tempoRecargaHoras: 7,
        imagemUrl: tankImage
    }
];