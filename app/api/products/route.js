import { getAllProducts } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const products = await getAllProducts();

  if (!products) {
    return NextResponse.json({ error: 'No products found' }, { status: 404 });
  }

  return NextResponse.json(products, {
    status: 200,
  });
}
