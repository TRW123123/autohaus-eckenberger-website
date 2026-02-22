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
        make: 'Mercedes-Benz',
        model: 'Sprinter 317 CDI L2H2',
        price: 34900,
        mileage: 45000,
        fuel: 'Diesel',
        power: 170,
        powerUnit: 'PS',
        transmission: 'Automatik',
        firstRegistration: '06/2022',
        images: ['https://placehold.co/800x500/F3F3F3/545557?font=inter&text=Mercedes+Sprinter'],
        category: 'nutz',
        features: ['Klimaanlage', 'Rückfahrkamera', 'MBUX Multimediasystem', 'Tempomat', 'Trennwand'],
        description: 'Sehr gepflegter Sprinter aus 1. Hand. Ideal für Kurierdienste oder als Basis für einen Camper-Ausbau.'
    },
    {
        id: '2',
        make: 'Volkswagen',
        model: 'Crafter 35 Kasten L3H3',
        price: 29800,
        mileage: 82000,
        fuel: 'Diesel',
        power: 140,
        powerUnit: 'PS',
        transmission: 'Schaltgetriebe',
        firstRegistration: '03/2021',
        images: ['https://placehold.co/800x500/F3F3F3/545557?font=inter&text=VW+Crafter'],
        category: 'nutz',
        features: ['Einparkhilfe', 'Sitzheizung', 'Bluetooth', 'Anhängerkupplung'],
        description: 'Zuverlässiger Crafter mit Hochdach. Scheckheftgepflegt bei VW.'
    },
    {
        id: '3',
        make: 'BMW',
        model: '530d xDrive Touring M-Paket',
        price: 42500,
        mileage: 68000,
        fuel: 'Diesel',
        power: 265,
        powerUnit: 'PS',
        transmission: 'Automatik',
        firstRegistration: '09/2020',
        images: ['https://placehold.co/800x500/F3F3F3/545557?font=inter&text=BMW+530d'],
        category: 'pkw',
        features: ['Leder', 'Navi Professional', 'LED-Scheinwerfer', 'Head-Up Display', 'M-Sport'],
        description: 'Top ausgestatteter 5er BMW in Carbonschwarz. Unfallfrei und sehr gepflegt.'
    },
    {
        id: '4',
        make: 'Polaris',
        model: 'Sportsman 570 EPS',
        price: 9400,
        mileage: 1200,
        fuel: 'Benzin',
        power: 44,
        powerUnit: 'PS',
        transmission: 'Automatik',
        firstRegistration: '05/2023',
        images: ['https://placehold.co/800x500/F3F3F3/545557?font=inter&text=Polaris+Sportsman'],
        category: 'quad',
        features: ['Allrad', 'Servolenkung', 'Seilwinde', 'Gepäckträger'],
        description: 'Neuwertiges Quad für Arbeit und Freizeit. Inklusive LOF-Zulassung.'
    },
    {
        id: '5',
        make: 'Ford',
        model: 'Transit Custom 300 L2H1',
        price: 26500,
        mileage: 55000,
        fuel: 'Diesel',
        power: 130,
        powerUnit: 'PS',
        transmission: 'Schaltgetriebe',
        firstRegistration: '11/2021',
        images: ['https://placehold.co/800x500/F3F3F3/545557?font=inter&text=Ford+Transit+Custom'],
        category: 'nutz',
        features: ['Klima', 'Tempomat', 'Schiebetür rechts', 'Laderaumschutz'],
        description: 'Gepflegter Transit Custom. Scheckheftgepflegt.'
    },
    {
        id: '6',
        make: 'Audi',
        model: 'A4 Avant 40 TDI quattro',
        price: 35900,
        mileage: 49000,
        fuel: 'Diesel',
        power: 190,
        powerUnit: 'PS',
        transmission: 'Automatik',
        firstRegistration: '02/2022',
        images: ['https://placehold.co/800x500/F3F3F3/545557?font=inter&text=Audi+A4+Avant'],
        category: 'pkw',
        features: ['Virtual Cockpit', 'Matrix LED', 'Bang & Olufsen', 'ACC'],
        description: 'Schöner A4 Avant in Manhattangrau. Sehr guter Zustand.'
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
