export const checkIsFav = (favoriteList, currentMovie) => {
  if (currentMovie && favoriteList.length > 0) {
    const isAlreadyFav = favoriteList.find(
      (movie) => movie.id === currentMovie.id
    );

    return !!isAlreadyFav;
  }
  return false;
};
