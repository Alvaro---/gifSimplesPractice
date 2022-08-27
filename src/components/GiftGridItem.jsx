import PropTypes from "prop-types";

export const GiftGridItem = ({ title, imageUrl, id }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
