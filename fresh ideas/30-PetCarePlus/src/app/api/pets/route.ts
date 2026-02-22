import { NextRequest, NextResponse } from 'next/server';

const pets = [
  {
    id: '1',
    name: 'Bella',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 4,
    weight: 29.5,
    lastVetVisit: '2026-01-15',
    nextVaccination: '2026-07-15',
    diet: 'Premium dry kibble, 2 cups twice daily',
    healthAlerts: [],
    medications: ['Heartworm prevention (monthly)'],
  },
  {
    id: '2',
    name: 'Miso',
    species: 'Cat',
    breed: 'Scottish Fold',
    age: 3,
    weight: 4.2,
    lastVetVisit: '2025-12-20',
    nextVaccination: '2026-06-20',
    diet: 'Grain-free wet food, 1 can daily + dry food',
    healthAlerts: ['Due for dental cleaning'],
    medications: [],
  },
  {
    id: '3',
    name: 'Charlie',
    species: 'Dog',
    breed: 'French Bulldog',
    age: 6,
    weight: 12.8,
    lastVetVisit: '2026-02-01',
    nextVaccination: '2026-08-01',
    diet: 'Hypoallergenic formula, 1.5 cups twice daily',
    healthAlerts: ['Mild skin allergy — monitor for flare-ups'],
    medications: ['Apoquel 16mg (daily)', 'Fish oil supplement'],
  },
  {
    id: '4',
    name: 'Kiwi',
    species: 'Bird',
    breed: 'Cockatiel',
    age: 2,
    weight: 0.09,
    lastVetVisit: '2025-11-10',
    nextVaccination: null,
    diet: 'Pellet mix with fresh vegetables and fruit treats',
    healthAlerts: ['Overdue for checkup'],
    medications: [],
  },
];

export async function GET() {
  return NextResponse.json({ pets }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.species) {
    return NextResponse.json(
      { error: 'Missing required fields: name, species' },
      { status: 400 }
    );
  }

  const newPet = {
    id: String(pets.length + 1),
    name: body.name,
    species: body.species,
    breed: body.breed ?? 'Unknown',
    age: body.age ?? 0,
    weight: body.weight ?? null,
    lastVetVisit: body.lastVetVisit ?? null,
    nextVaccination: body.nextVaccination ?? null,
    diet: body.diet ?? '',
    healthAlerts: body.healthAlerts ?? [],
    medications: body.medications ?? [],
  };

  pets.push(newPet);

  return NextResponse.json({ pet: newPet }, { status: 201 });
}
