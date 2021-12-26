import Link from 'next/link';

const navItems = [
  {
    path: '/about',
    label: 'About',
  },
];

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <a>Beyond</a>
        </Link>

        <nav>
          {navItems.map(({ path, label }) => (
            <Link key={path} href={path}>
              <a>{label}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;