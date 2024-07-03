import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await prisma.blogPosts.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: false,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!posts) {
    return NextResponse.json({ error: 'No posts found' }, { status: 404 });
  }

  return NextResponse.json(posts, {
    status: 200,
  });
}
