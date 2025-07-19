const Product = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="product">
      <h2 style={{ color: "red" }}>{title}</h2>
      <img src={image} alt={title} />
      {/*<p><strong>Price:</strong> ৳{price}</p>*/}
      <p><strong>Category:</strong> {category}</p>
      <p>{description}</p>
      <p>
        {/* <strong>Rating:</strong> {rating?.rate} ({rating?.count} reviews)*/}
      </p>
    </div>
  );
};

export default Product;