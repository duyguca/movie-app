import TmdbLogo from "../assets/tmdb-logo.svg";

const About = () => {
  return (
    <div className=" max-w-[max-content] lg:w-[1000px] my-[10rem] mx-auto ">
      <section className="text-white w-auto text-center text-m font-light p-2 mx-auto">
        <h1 className="text-2xl p-1 md:text-3xl">Welcome to The DB Movie</h1>
        <p className="text-lg font-extralight pt-4 px-4 mb-16 leading-10">
          The DB Movie is a website where users can find popular, top rated, now
          playing and upcoming movie listings. Browse for your favourite genres
          or movies, check out their ratings and see how they match up. We're
          passionate about film and offer a vast library of classics to
          blockbusters. Our user-friendly platform lets you search, access info,
          watch trailers, and read reviews. Stay updated with industry news
          through our blog and newsletter. Cinemaster is a community celebrating
          storytelling through movies. Join us for a personalized cinematic
          adventure. Your movie journey starts here!
        </p>
        <img
          src={TmdbLogo}
          alt="TMDb Logo"
          className="w-[150px] h-[70px] mx-auto"
        />
        <span className="text-lg font-extralight px-4 leading-10">
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </span>
      </section>
    </div>
  );
};

export default About;
