import React from 'react';

const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="page-title-container">
      <div className="header-title-container">
        <p className="header-over-title"> Discover and Share </p>
        <h2 className="header-title">{title}</h2>
        {/* <Link to="/articles"><button className="btn-white">Start discovering</button></Link> */}
      </div>
      <h3 className="page-title">{subTitle}</h3>
    </div>
  );
}

export default PageTitle;