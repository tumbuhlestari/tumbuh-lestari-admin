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

export async function getAllProducts() {
  try {
    const products = await prisma.products.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return products;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getProductById(id) {
  try {
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    });

    return product;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getAllPosts() {
  try {
    const posts = await prisma.blogPosts.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return posts;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getPostById(id) {
  try {
    const post = await prisma.blogPosts.findUnique({
      where: {
        id,
      },
    });

    return post;
  } catch (e) {
    throw new Error(e);
  }
}
