import React from 'react'

const EmptyFavView = () => {
  return (
    <div className="w-full h-900px bg-#0a0b0d ">
        <div className="max-w-[70rem] mx-auto text-white flex flex-col items-center justify-center my-[13rem] ">
            <h1 className="uppercase font-bold text-7xl pb-6">Whoops!</h1>
            <p className="w-[500px] text-center text-lg font-base p-2">
                "Sorry, you haven't favorited any movies. Please return to the homepage to add a favorite movie."
            </p>
            <p className="text-sm font-light p-2">To get started, go to a movie's individual page to click on the heart icon for the movies you like and add it to your collection!</p>
        </div>

      
    </div>
  )
}

export default EmptyFavView;
