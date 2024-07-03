import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, { message: 'Nama tidak valid' }),
  price: z.coerce.number().positive('Harga harus lebih dari 0'),
  shopeeUrl: z.string().url('URL tidak valid'),
  description: z.string().min(1, { message: 'Deskripsi harus ditambahkan' }),
  picture: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: 'Gambar harus ditambahkan' })
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: 'Hanya menerima file gambar',
    })
    .refine((file) => file.size < 2 * 1024 * 1024, {
      message: 'Ukuran file harus kurang dari 2MB',
    }),
});

export const blogPostSchema = z.object({
  title: z.string().min(1, { message: 'Masukkan judul postingan' }),
  content: z.string().min(1, { message: 'Masukkan konten postingan' }),
});
