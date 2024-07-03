import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Package, BookText } from 'lucide-react';

import { getTotalProducts, getTotalPosts } from '@/lib/prisma';

export default async function Page() {
  const totalProducts = await getTotalProducts();
  const totalPosts = await getTotalPosts();

  return (
    <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
      <Card x-chunk='dashboard-01-chunk-0'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Produk</CardTitle>
          <Package className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{totalProducts}</div>
          <p className='text-xs text-muted-foreground'>
            Total produk yang telah ditambahkan
          </p>
        </CardContent>
      </Card>
      <Card x-chunk='dashboard-01-chunk-1'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Blog</CardTitle>
          <BookText className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{totalPosts}</div>
          <p className='text-xs text-muted-foreground'>
            Total postingan blog yang telah dibuat
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
