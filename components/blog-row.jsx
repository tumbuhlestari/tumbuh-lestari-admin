import { TableRow, TableCell } from '@/components/ui/table';
import DeleteBlogButton from '@/components/delete-blog-button';

export default function BlogRow({ id, title, createdAt }) {
  const date = createdAt.toLocaleString();

  return (
    <TableRow>
      <TableCell className='font-medium'>{title}</TableCell>
      <TableCell className='hidden md:table-cell'>{date}</TableCell>
      <TableCell>
        <DeleteBlogButton id={id} />
      </TableCell>
    </TableRow>
  );
}
