import ProductForm from '@/components/form/product-form';
import { updateProduct } from '@/lib/actions';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const product = await prisma.products.findUnique({
    where: { id: params.id },
  });

  if (!product) {
    notFound();
  }

  return <ProductForm formAction={updateProduct} initialData={product} />;
}
