import React from "react";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const {_id, img, price,  title} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>$ {price}</p>
        <Link to={`/checkout/${_id}`} className="card-actions">
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
