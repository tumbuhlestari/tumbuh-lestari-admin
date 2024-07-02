import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Package, BookText } from 'lucide-react';

export default function Page() {
  return (
    <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
      <Card x-chunk='dashboard-01-chunk-0'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Products</CardTitle>
          <Package className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>8</div>
          <p className='text-xs text-muted-foreground'>
            Total Product yang telah ditambahkan
          </p>
        </CardContent>
      </Card>
      <Card x-chunk='dashboard-01-chunk-1'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Posts</CardTitle>
          <BookText className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>2</div>
          <p className='text-xs text-muted-foreground'>
            Total blog post yang telah dibuat
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
