import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="ml-3">
            Home
          </Link>
        </li>
        <li>
          <Link href="/login" className="ml-3">
            Login
          </Link>
        </li>
        <li>
          <Link href="/register" className="ml-3">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
