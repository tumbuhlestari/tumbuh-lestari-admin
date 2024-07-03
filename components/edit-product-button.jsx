import Link from 'next/link';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export default function EditProductButton({ id }) {
  return (
    <DropdownMenuItem>
      <Link href={`/dashboard/products/${id}`}>Edit</Link>
    </DropdownMenuItem>
  );
}
