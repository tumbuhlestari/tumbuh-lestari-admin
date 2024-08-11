"use server";

import { del, put } from "@vercel/blob";

import { blogPostSchema, loginSchema, productSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

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
    access: "public",
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
        message: "Failed to add product",
      },
    };
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(prevState, formData) {
  const validatedFields = productSchema.omit({ picture: true }).safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    shopeeUrl: formData.get("shopeeUrl"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    console.log("error", validatedFields.error.flatten().fieldErrors);
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
        message: "Failed to update product",
      },
    };
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function deleteProduct(id) {
  const product = await prisma.products.findUnique({
    where: { id },
  });

  if (!product) {
    return {
      error: {
        message: "Product not found",
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
        message: "Failed to delete product",
      },
    };
  }

  revalidatePath("/dashboard/products");
}

/*************************************** Blog *******************************************/

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

  const { title, content, picture } = validatedFields.data;
  const { url } = await put(title, picture, {
    access: "public",
    multipart: true,
    contentType: picture.type,
  });

  try {
    await prisma.blogPosts.create({
      data: {
        title,
        content,
        imageUrl: url,
      },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to add blog post",
      },
    };
  }

  revalidatePath("/dashboard/posts");
  redirect("/dashboard/posts");
}

export async function deleteBlogPost(id) {
  const blogPost = await prisma.blogPosts.findUnique({
    where: { id },
  });

  if (!blogPost) {
    return {
      error: {
        message: "Blog post not found",
      },
    };
  }
  await del(blogPost.imageUrl);
  try {
    await prisma.blogPosts.delete({
      where: { id },
    });
  } catch (error) {
    return {
      error: {
        message: "Failed to delete blog post",
      },
    };
  }

  revalidatePath("/dashboard/posts");
}

export async function login(prevState, formData) {
  const validatedFields = loginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { username, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Username atau password salah" };
        default:
          return { error: "Username atau password salah" };
      }
    }

    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/auth/login" });
}
