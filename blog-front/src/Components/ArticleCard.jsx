import React from 'react';

const ArticleCard = ({ img }) => {
  return (
    <div className="article-card-container">

      <img src={img} alt="img" className="article-card-img"/>
      {/* <div className="card-infos">
        <h4 className="card-title">See the true beauty</h4>
        <p className="card-city">Toronto</p>
      </div> */}
    </div>

  );
}

export default ArticleCard;
