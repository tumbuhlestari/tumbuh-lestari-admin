import Link from 'next/link';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export default function EditProductButton({ id }) {
  return (
    <DropdownMenuItem>
      <Link href={`/products/${id}`}>Edit</Link>
    </DropdownMenuItem>
  );
}
