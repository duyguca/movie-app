import { useLocation } from 'react-router-dom';
import TmdbLogo from '../assets/tmdb-logo.svg'; // Import your SVG image

function NavBar() {
  const location = useLocation();
  const navLinks = [
    { route: '/', text: 'Home' },
    { route: '/favorite', text: 'Favorite' },
    { route: '/about', text: 'About' }
  ]
  const className = (navLink) => location.pathname === navLink.route ? 'active' : '';

  return (
    <div className='footer'>
      <a href="/"  className='footer-logo-link'>
        <img
          src={TmdbLogo} // Use the imported SVG image as the src
          alt="TMDb Logo"
          className='navbar-logo'
        />
      </a>
      <div>@Ahmet Bugra Yildirim - Duygu Koksal</div>
      <ul className='footer-menu'>
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
