'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import { LoaderCircle } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
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

import SubmitButton from '@/components/submit-button';
import { cn } from '@/lib/utils';
import { addProduct } from '@/lib/actions';

export default function AddProductForm() {
  const [state, formAction] = useFormState(addProduct, null);

  return (
    <form
      action={formAction}
      className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'
    >
      <div className='grid max-w-full flex-1 auto-rows-max gap-4'>
        <div className='flex items-center gap-4'>
          <Link
            href={'/products'}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon' }),
              'c-7 h-7'
            )}
          >
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Back</span>
          </Link>
          <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
            Add Product
          </h1>
          <div className='hidden items-center gap-2 md:ml-auto md:flex'>
            <Link
              href='/products'
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Discard
            </Link>
            <SubmitButton />
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
            <Card x-chunk='dashboard-07-chunk-0'>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                  Add product details and images
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid gap-6'>
                  <div className='grid gap-3'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      name='name'
                      type='text'
                      className='w-full'
                      placeholder='Product Name'
                    />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.name}</p>
                    </div>
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='price'>Price</Label>
                    <Input
                      id='price'
                      name='price'
                      type='number'
                      className='w-full'
                      placeholder='10000'
                    />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.price}</p>
                    </div>
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='shopeeUrl'>Shopee URL</Label>
                    <Input
                      id='shopeeUrl'
                      name='shopeeUrl'
                      type='text'
                      className='w-full'
                      placeholder='https://shopee.co.id/product'
                    />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.shopeeUrl}</p>
                    </div>
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='description'>Description</Label>
                    <Textarea
                      id='description'
                      name='description'
                      placeholder='Product Description'
                      className='min-h-32'
                    />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.description}</p>
                    </div>
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='picture'>Picture</Label>
                    <Input id='picture' name='picture' type='file' />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.picture}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2 md:hidden'>
          <Link
            href='/products'
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
          >
            Discard
          </Link>
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
