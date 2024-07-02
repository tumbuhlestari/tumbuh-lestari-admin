import Link from 'next/link';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

import { PlusCircle, Image, MoreHorizontal } from 'lucide-react';

export default function Page() {
  return (
    <div className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <Tabs defaultValue='all'>
        <div className='flex items-center'>
          <div className='ml-auto flex items-center gap-2'>
            <Link
              href='/products/add'
              className={buttonVariants({ variant: 'default', size: 'sm' })}
            >
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='not-sr-only sm:whitespace-nowrap'>
                Add Product
              </span>
            </Link>
          </div>
        </div>
        <TabsContent value='all'>
          <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>
                      <span className='sr-only'>Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className='hidden md:table-cell'>
                      Price
                    </TableHead>
                    <TableHead className='hidden md:table-cell'>
                      Total Sales
                    </TableHead>
                    <TableHead className='hidden md:table-cell'>
                      Created at
                    </TableHead>
                    <TableHead>
                      <span className='sr-only'>Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Image
                        alt='Product image'
                        className='aspect-square rounded-md object-cover'
                        height='64'
                        src='/placeholder.svg'
                        width='64'
                      />
                    </TableCell>
                    <TableCell className='font-medium'>
                      Laser Lemonade Machine
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      $499.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>25</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2023-07-12 10:42 AM
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup='true'
                            size='icon'
                            variant='ghost'
                          >
                            <MoreHorizontal className='h-4 w-4' />
                            <span className='sr-only'>Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Image
                        alt='Product image'
                        className='aspect-square rounded-md object-cover'
                        height='64'
                        src='/placeholder.svg'
                        width='64'
                      />
                    </TableCell>
                    <TableCell className='font-medium'>
                      AeroGlow Desk Lamp
                    </TableCell>

                    <TableCell className='hidden md:table-cell'>
                      $39.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>50</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2023-11-29 08:15 AM
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup='true'
                            size='icon'
                            variant='ghost'
                          >
                            <MoreHorizontal className='h-4 w-4' />
                            <span className='sr-only'>Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Image
                        alt='Product image'
                        className='aspect-square rounded-md object-cover'
                        height='64'
                        src='/placeholder.svg'
                        width='64'
                      />
                    </TableCell>
                    <TableCell className='font-medium'>
                      TechTonic Energy Drink
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      $2.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>0</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2023-12-25 11:59 PM
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup='true'
                            size='icon'
                            variant='ghost'
                          >
                            <MoreHorizontal className='h-4 w-4' />
                            <span className='sr-only'>Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Image
                        alt='Product image'
                        className='aspect-square rounded-md object-cover'
                        height='64'
                        src='/placeholder.svg'
                        width='64'
                      />
                    </TableCell>
                    <TableCell className='font-medium'>
                      Gamer Gear Pro Controller
                    </TableCell>

                    <TableCell className='hidden md:table-cell'>
                      $59.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>75</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2024-01-01 12:00 AM
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup='true'
                            size='icon'
                            variant='ghost'
                          >
                            <MoreHorizontal className='h-4 w-4' />
                            <span className='sr-only'>Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className='text-xs text-muted-foreground'>
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
