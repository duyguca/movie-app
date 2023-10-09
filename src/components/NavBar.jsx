import { useLocation } from 'react-router-dom';
import TmdbLogo from '../assets/tmdb-logo.svg'; // Import your SVG image


function NavBar() {
  const location = useLocation();
  const navLinks = [
    { route: '/about', text: 'About' },
    { route: '/favorite', text: 'Favorite' },
    { route: '/', text: 'Home' }
  ]
  const className = (navLink) => location.pathname === navLink.route ? 'active' : '';

  return (
    <div className='navbar'>
      <a href="/"  className='navbar-logo-link'>
        <img
          src={TmdbLogo} // Use the imported SVG image as the src
          alt="TMDb Logo"
          className='navbar-logo'
        />
      </a>
    <ul>
      {navLinks.map(navLink =>(
         <li key={navLink.text}>
          <a className={className(navLink)} href={navLink.route}>
            {navLink.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default NavBar;