'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';

import { buttonVariants } from '@/components/ui/button';
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
import SubmitButton from '@/components/submit-button';

import { ChevronLeft } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function BlogForm({ formAction, initialData }) {
  const [state, action] = useFormState(formAction, initialData);

  return (
    <form
      action={action}
      className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'
    >
      <div className='grid max-w-full flex-1 auto-rows-max gap-4'>
        <div className='flex items-center gap-4'>
          <Link
            href={'/dashboard/posts'}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon' }),
              'c-7 h-7'
            )}
          >
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Kembali</span>
          </Link>
          <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
            {initialData ? 'Edit Postingan' : 'Tambah Postingan'}
          </h1>
          <div className='hidden items-center gap-2 md:ml-auto md:flex'>
            <Link
              href='/dashboard/posts'
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Batal
            </Link>
            <SubmitButton text='Simpan' />
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
            <Card x-chunk='dashboard-07-chunk-0'>
              <CardHeader>
                <CardTitle>Postingan Blog</CardTitle>
                <CardDescription>
                  Tambahkan detail postingan blog
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid gap-6'>
                  <div className='grid gap-3'>
                    <Label htmlFor='title'>Judul</Label>
                    <Input
                      id='title'
                      name='title'
                      type='text'
                      className='w-full'
                      placeholder='Judul Postingan'
                      defaultValue={initialData?.title}
                    />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.title}</p>
                    </div>
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='content'>Konten</Label>
                    <Textarea
                      id='content'
                      name='content'
                      placeholder='Tulis sesuatu...'
                      className='min-h-64'
                      defaultValue={initialData?.Content}
                    />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.content}</p>
                    </div>
                  </div>

                  {!initialData?.imageUrl && (
                    <div className='grid gap-3'>
                      <Label htmlFor='picture'>Gambar</Label>
                      <Input id='picture' name='picture' type='file' />
                      <div
                        aria-live='polite'
                        aria-atomic='true'
                        className='text-red-500 text-sm'
                      >
                        <p>{state?.error?.picture}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2 md:hidden'>
          <Link
            href='/dashboard/posts'
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
          >
            Batal
          </Link>
          <SubmitButton text='Simpan' />
        </div>
      </div>
    </form>
  );
}
