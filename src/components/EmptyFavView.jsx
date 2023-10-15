import React from "react";
import { Link } from "react-router-dom";

const EmptyFavView = () => {
  return (
    <div className="bg-#0a0b0d  max-w-[max-content] lg:w-[1000px] mx-auto text-white flex flex-col items-center justify-center my-[13rem] ">
      <h1 className="uppercase font-base text-3xl pb-6">Whoops!</h1>
      <p className=" text-center text-lg font-extralight px-4 leading-10">
        "Sorry, you haven't favorited any movies. Please return to the{" "}
        <Link className="border-b-[1px]" to="/">
          homepage
        </Link>{" "}
        to add a favorite movie."
      </p>
      <p className="text-md font-extralight px-4 leading-10">
        To get started, go to a movie's individual page to click on the heart
        icon for the movies you like and add it to your collection!
      </p>
    </div>
  );
};

export default EmptyFavView;
