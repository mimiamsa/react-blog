import React from 'react';
import { Link } from "react-router-dom"

const Cta = () => {
  return (
    <div className="big-cta-container">
      <Link to="/articles"><button className="btn-white">Start discovering</button></Link>
    </div>
  );
}

export default Cta;