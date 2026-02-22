export interface Car {
    id: string;
    make: string;
    model: string;
    price: number;
    mileage: number;
    fuel: string;
    power: number;
    powerUnit: 'PS' | 'kW';
    transmission: 'Automatik' | 'Schaltgetriebe';
    firstRegistration: string;
    images: string[];
    category: 'nutz' | 'pkw' | 'quad';
    features: string[];
    description?: string;
}

export const DEMO_CARS: Car[] = [
    {
        id: '1',
        make: 'Fiat',
        model: 'Ducato 35 L5H2 Maxi',
        price: 33320,
        mileage: 50,
        fuel: 'Diesel',
        power: 179,
        powerUnit: 'PS',
        transmission: 'Schaltgetriebe',
        firstRegistration: 'Neu',
        images: [
            'https://images.unsplash.com/photo-1600320844678-430930335099?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1519003300449-424ad040507b?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
        ],
        category: 'nutz',
        features: ['Klimaanlage', 'Rückfahrkamera', 'Tempomat', 'Trennwand'],
        description: 'Neufahrzeug mit Tageszulassung. Sofort verfügbar für Ihren Fuhrpark.'
    },
    {
        id: '2',
        make: 'Peugeot',
        model: 'Boxer L3H2 Premium',
        price: 17000,
        mileage: 24000,
        fuel: 'Diesel',
        power: 120,
        powerUnit: 'PS',
        transmission: 'Schaltgetriebe',
        firstRegistration: '09/2021',
        images: [
            'https://images.unsplash.com/photo-1517524008436-bbdb53951433?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800'
        ],
        category: 'nutz',
        features: ['Einparkhilfe', 'Sitzheizung', 'Bluetooth', 'Anhängerkupplung'],
        description: 'Gepflegter Leasingrückläufer. Scheckheftgepflegt, HU/AU neu.'
    },
    {
        id: '3',
        make: 'Citroën',
        model: 'Jumper L2H1 Kasten',
        price: 11186,
        mileage: 86000,
        fuel: 'Diesel',
        power: 95,
        powerUnit: 'PS',
        transmission: 'Schaltgetriebe',
        firstRegistration: '05/2021',
        images: [
            'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600320844678-430930335099?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1519003300449-424ad040507b?auto=format&fit=crop&q=80&w=800'
        ],
        category: 'nutz',
        features: ['Radio/CD', 'Zentralverriegelung', 'Servolenkung'],
        description: 'Robuster Handwerkerwagen. Sehr guter Preis-Leistung-Verhältnis.'
    },
    {
        id: '4',
        make: 'Mercedes-Benz',
        model: 'Sprinter 314 CDI L2H2',
        price: 29155,
        mileage: 10,
        fuel: 'Diesel',
        power: 144,
        powerUnit: 'PS',
        transmission: 'Schaltgetriebe',
        firstRegistration: 'Neu',
        images: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1517524008436-bbdb53951433?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800'
        ],
        category: 'nutz',
        features: ['MBUX', 'Multifunktionslenkrad', 'Seitenwind-Assistent'],
        description: 'Tageszulassung. Der Klassiker unter den Transportern.'
    },
    {
        id: '5',
        make: 'Volkswagen',
        model: 'Transporter T6.1 Kasten',
        price: 15113,
        mileage: 133000,
        fuel: 'Diesel',
        power: 140,
        powerUnit: 'PS',
        transmission: 'Schaltgetriebe',
        firstRegistration: '04/2021',
        images: [
            'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600320844678-430930335099?auto=format&fit=crop&q=80&w=800'
        ],
        category: 'nutz',
        features: ['Klima', 'Trennwand mit Fenster', 'Holzboden'],
        description: 'Verlässlicher VW T6. Ideal für den täglichen Einsatz.'
    },
    {
        id: '6',
        make: 'Fiat',
        model: 'Ducato Doppelkabine',
        price: 36057,
        mileage: 10,
        fuel: 'Diesel',
        power: 179,
        powerUnit: 'PS',
        transmission: 'Automatik',
        firstRegistration: 'Neu',
        images: [
            'https://images.unsplash.com/photo-1519003300449-424ad040507b?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1517524008436-bbdb53951433?auto=format&fit=crop&q=80&w=800'
        ],
        category: 'nutz',
        features: ['Automatik', 'Navi', '7 Sitze', 'Pritsche'],
        description: 'Perfekt für den Bautrupp. Sofort verfügbar mit voller Garantie.'
    },
    {
        id: '7',
        make: 'Audi',
        model: 'A4 Avant 40 TDI quattro',
        price: 22491,
        mileage: 35000,
        fuel: 'Diesel',
        power: 190,
        powerUnit: 'PS',
        transmission: 'Schaltgetriebe',
        firstRegistration: '10/2024',
        images: [
            'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600320844678-430930335099?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1519003300449-424ad040507b?auto=format&fit=crop&q=80&w=800'
        ],
        category: 'pkw',
        features: ['Virtual Cockpit', 'Matrix LED', 'Bang & Olufsen'],
        description: 'Schöner A4 Avant in Manhattangrau. Sehr guter Zustand.'
    },
    {
        id: '8',
        make: 'Polaris',
        model: 'Sportsman 570 EPS',
        price: 9400,
        mileage: 1200,
        fuel: 'Benzin',
        power: 44,
        powerUnit: 'PS',
        transmission: 'Automatik',
        firstRegistration: '05/2023',
        images: [
            'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1517524008436-bbdb53951433?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
        ],
        category: 'quad',
        features: ['Allrad', 'Servolenkung', 'Seilwinde', 'Gepäckträger'],
        description: 'Neuwertiges Quad für Arbeit und Freizeit. Inklusive LOF-Zulassung.'
    }
];

export function getCars() {
    return DEMO_CARS;
}

export function getCarById(id: string) {
    return DEMO_CARS.find(car => car.id === id);
}

export function formatPrice(price: number) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
}

export function formatMileage(mileage: number) {
    return new Intl.NumberFormat('de-DE').format(mileage) + ' km';
}
