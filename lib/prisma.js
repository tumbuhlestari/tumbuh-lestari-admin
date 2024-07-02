import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export async function getTotalProducts() {
  try {
    const totalProducts = await prisma.products.count();
    return totalProducts;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTotalPosts() {
  try {
    const totalPosts = await prisma.blogPosts.count();
    return totalPosts;
  } catch (e) {
    throw new Error(e);
  }
}
