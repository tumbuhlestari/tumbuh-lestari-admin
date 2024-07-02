import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { ChevronLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <div className='grid max-w-full flex-1 auto-rows-max gap-4'>
        <div className='flex items-center gap-4'>
          <Button variant='outline' size='icon' className='h-7 w-7'>
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Back</span>
          </Button>
          <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
            Pro Controller
          </h1>
          <div className='hidden items-center gap-2 md:ml-auto md:flex'>
            <Button variant='outline' size='sm'>
              Discard
            </Button>
            <Button size='sm'>Save Product</Button>
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
            <Card x-chunk='dashboard-07-chunk-0'>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid gap-6'>
                  <div className='grid gap-3'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      type='text'
                      className='w-full'
                      defaultValue='Gamer Gear Pro Controller'
                    />
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='name'>Price</Label>
                    <Input
                      id='name'
                      type='number'
                      className='w-full'
                      defaultValue='1000000'
                    />
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='description'>Description</Label>
                    <Textarea
                      id='description'
                      defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.'
                      className='min-h-32'
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk='dashboard-07-chunk-1'>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Label htmlFor='picture'>Picture</Label>
                <Input id='picture' type='file' />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2 md:hidden'>
          <Button variant='outline' size='sm'>
            Discard
          </Button>
          <Button size='sm'>Save Product</Button>
        </div>
      </div>
    </div>
  );
}
