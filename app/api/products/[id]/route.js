import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;

  const product = await prisma.products.findFirst({
    where: {
      id,
    },
  });

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product, {
    status: 200,
  });
}
