import React from 'react';
import SearchBar from './../Components/SearchBar';
import GridArticles from '../Components/GridArticles';
const AllArticles = () => {
  return (
    <>
      <header className="articles-header">
        <h2 className="articles-header-title">Browse and discover your new adventure...</h2>
        <SearchBar />
      </header>
      <div className="wrapper articles-grid">
        <GridArticles />
      </div>
    </>
  );
}

export default AllArticles;