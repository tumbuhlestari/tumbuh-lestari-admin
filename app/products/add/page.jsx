import ProductForm from '@/components/form/product-form';
import { addProduct } from '@/lib/actions';

export default function Page() {
  return <ProductForm formAction={addProduct} initialData={null} />;
}
