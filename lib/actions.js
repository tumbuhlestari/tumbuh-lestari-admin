'use server';

import { del, put } from '@vercel/blob';

import { productSchema } from '@/lib/zod';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addProduct(prevState, formData) {
  const validatedFields = productSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, price, shopeeUrl, description, picture } = validatedFields.data;
  const { url } = await put(name, picture, {
    access: 'public',
    multipart: true,
    contentType: picture.type,
  });

  try {
    await prisma.products.create({
      data: {
        name,
        description,
        price,
        shopeeUrl,
        imageUrl: url,
      },
    });
  } catch (error) {
    return {
      error: {
        message: 'Failed to add product',
      },
    };
  }

  revalidatePath('/products');
  redirect('/products');
}

export async function deleteProduct(id) {
  const product = await prisma.products.findUnique({
    where: { id },
  });

  if (!product) {
    return {
      error: {
        message: 'Product not found',
      },
    };
  }

  await del(product.imageUrl);
  try {
    await prisma.products.delete({
      where: { id },
    });
  } catch (error) {
    return {
      error: {
        message: 'Failed to delete product',
      },
    };
  }

  revalidatePath('/products');
}
