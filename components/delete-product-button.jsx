import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { deleteProduct } from '@/lib/actions';

export default function DeleteProductButton({ id }) {
  const deleteProductById = deleteProduct.bind(null, id);

  return (
    <form action={deleteProductById}>
      <DropdownMenuItem>
        <button type='submit'>Delete</button>
      </DropdownMenuItem>
    </form>
  );
}
