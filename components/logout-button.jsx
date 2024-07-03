import { logout } from '@/lib/actions';

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type='submit'>Logout</button>
    </form>
  );
}
