'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      size='sm'
      disabled={pending}
      className={cn(pending ? 'cursor-progress' : 'cursor-pointer')}
    >
      <LoaderCircle
        className={cn(
          pending ? 'not-sr-only animate-spin' : 'sr-only',
          'h-3.5 w-3.5'
        )}
      />
      <span>Save Product</span>
    </Button>
  );
}
