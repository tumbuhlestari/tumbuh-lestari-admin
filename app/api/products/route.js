import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.products.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      description: true,
      imageUrl: true,
      shopeeUrl: false,
      createdAt: false,
      updatedAt: false,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!products) {
    return NextResponse.json(
      { error: 'No products found' },
      { status: 404, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }

  return NextResponse.json(products, {
    status: 200,
    headers: { 'Cache-Control': 'no-store, max-age=0' },
  });
}
