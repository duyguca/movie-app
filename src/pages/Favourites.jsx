import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import MovieGrid from '../components/MovieGrid';
import EmptyFavView from '../components/EmptyFavView';

const Favourites = () => {
  const { favoriteList } = useSelector((state) => state.favorite);
  
  return (
  (favoriteList.length === 0 ) ? <EmptyFavView/>
    : <MovieGrid filteredMovies={favoriteList} />
)};

export default Favourites;
