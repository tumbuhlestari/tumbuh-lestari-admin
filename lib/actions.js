'use server';

import { del, put } from '@vercel/blob';

import { blogPostSchema, productSchema } from '@/lib/zod';
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

export async function updateProduct(prevState, formData) {
  const validatedFields = productSchema.omit({ picture: true }).safeParse({
    name: formData.get('name'),
    price: formData.get('price'),
    shopeeUrl: formData.get('shopeeUrl'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    console.log('error', validatedFields.error.flatten().fieldErrors);
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, price, shopeeUrl, description } = validatedFields.data;

  try {
    await prisma.products.update({
      where: { id: prevState.id },
      data: {
        name,
        description,
        price,
        shopeeUrl,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    return {
      error: {
        message: 'Failed to update product',
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

export async function addBlogPost(prevState, formData) {
  const validatedFields = blogPostSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  console.log(validatedFields.success);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, content } = validatedFields.data;

  try {
    await prisma.blogPosts.create({
      data: {
        title,
        content,
      },
    });
  } catch (error) {
    return {
      error: {
        message: 'Failed to add blog post',
      },
    };
  }

  revalidatePath('/posts');
  redirect('/posts');
}

export async function deleteBlogPost(id) {
  const blogPost = await prisma.blogPosts.findUnique({
    where: { id },
  });

  if (!blogPost) {
    return {
      error: {
        message: 'Blog post not found',
      },
    };
  }

  try {
    await prisma.blogPosts.delete({
      where: { id },
    });
  } catch (error) {
    return {
      error: {
        message: 'Failed to delete blog post',
      },
    };
  }

  revalidatePath('/posts');
}
