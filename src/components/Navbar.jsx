import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { total } = useCart();

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4'>
      <Link className='navbar-brand' to='/'> 🍕Pizzería Mamma Mia</Link>

      <div className='navbar-nav me-auto'>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/login'>🔒 Login</Link>
        <Link className='nav-link' to='/register'>Register</Link>
        <Link className='nav-link' to='/profile'>🔓 Profile</Link>
        {/* {token && <Link className='nav-link' to='/profile'>Profile</Link>} */}
      </div>

      <Link className='btn btn-outline-info' to='/cart'>
        🛒 Total: ${total}
      </Link>
    </nav>
  );
}