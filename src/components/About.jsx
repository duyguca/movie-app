import { FaAlignCenter } from 'react-icons/fa';
import TmdbLogo from '../assets/tmdb-logo.svg'; // Import your SVG image

const About = () => {
  return (
    <div className='about-container'>
      <img
          src={TmdbLogo} // Use the imported SVG image as the src
          alt="TMDb Logo"
          className='tmbd-logo'
        />

        <div className='about-us'>Welcome to Cinemaster, your go-to online movie database for all things cinema! We are dedicated to providing you with a comprehensive and immersive movie experience like no other.

        At Cinemaster, we're passionate about film and the magic it brings to our lives. Whether you're a casual moviegoer or a dedicated cinephile, our platform is designed to cater to all your cinematic needs.

        Explore a vast and ever-growing library of movies, from timeless classics to the latest blockbusters. Our user-friendly interface allows you to easily search for films, access detailed information, watch trailers, and read insightful reviews.

        Stay updated with the latest industry news, trends, and upcoming releases through our informative blog and newsletter. Cinemaster is not just a database; it's a community of film enthusiasts coming together to celebrate the art of storytelling through motion pictures.

        We are committed to enhancing your movie-watching journey, offering personalized recommendations based on your preferences, and fostering a vibrant film-loving community. Join us on Cinemaster and embark on a cinematic adventure like never before. Your love for movies begins here.</div>
      <div className='about-us2'>! This product uses the TMDb API but is not endorsed or certified by TMDb.</div>
    </div>
  );
};

export default About;
