// 1. O Molde (Interface): Define exatamente quais informações cada moto precisa ter
export interface Moto {
    id: string;
    nome: string;
    descricao: string;
    preco: number;
    autonomiaKm: number;
    velocidadeMaxKmH: number;
    tempoRecargaHoras: number;
    imagemUrl: string;
}

// 2. Os Dados (Mock): Um catálogo temporário para testarmos o visual da loja
export const catalogoMotos: Moto[] = [
    {
        id: 'vtx-001',
        nome: 'Voltix Urban S',
        descricao: 'Ágil e compacta, perfeita para dominar o trânsito da cidade com estilo e economia.',
        preco: 12500,
        autonomiaKm: 80,
        velocidadeMaxKmH: 60,
        tempoRecargaHoras: 4,
        imagemUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'vtx-002',
        nome: 'Voltix Touring X',
        descricao: 'Conforto e potência para trajetos mais longos. O equilíbrio perfeito entre desempenho e autonomia.',
        preco: 18900,
        autonomiaKm: 150,
        velocidadeMaxKmH: 90,
        tempoRecargaHoras: 6,
        imagemUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'vtx-003',
        nome: 'Voltix Pro Max',
        descricao: 'A máquina definitiva. Design esportivo, aceleração instantânea e a maior bateria da categoria.',
        preco: 25400,
        autonomiaKm: 220,
        velocidadeMaxKmH: 120,
        tempoRecargaHoras: 8,
        imagemUrl: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];