import Link from 'next/link';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { buttonVariants } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';

import { PlusCircle } from 'lucide-react';
import ProductRow from '@/components/product-row';
import { prisma } from '@/lib/prisma';

export default async function Page() {
  const products = await prisma.products.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return (
    <div className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <Tabs defaultValue='all'>
        <div className='flex items-center'>
          <div className='ml-auto flex items-center gap-2'>
            <Link
              href='/dashboard/products/add'
              className={buttonVariants({ variant: 'default', size: 'sm' })}
            >
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='not-sr-only sm:whitespace-nowrap'>
                Tambah Product
              </span>
            </Link>
          </div>
        </div>
        <TabsContent value='all'>
          <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
              <CardTitle>Produk</CardTitle>
              <CardDescription>Kelola product anda</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>
                      <span className='sr-only'>Gambar</span>
                    </TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead className='hidden md:table-cell'>
                      Harga
                    </TableHead>
                    <TableHead className='hidden md:table-cell'>
                      Dibuat pada
                    </TableHead>
                    <TableHead>
                      <span className='sr-only'>Aksi</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <ProductRow
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      imageUrl={product.imageUrl}
                      price={product.price}
                      createdAt={product.createdAt}
                    />
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
