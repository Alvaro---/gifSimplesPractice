import React from "react";

export const GiftGridItem = ({ title, imageUrl, id }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};
