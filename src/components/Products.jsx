import Product from './Product';

const Products = ( { products } ) =>
{
  return (
    <div className='products'>
      { products.map( product => (
        <Product
          key={ product.id }
          title={ product.title }
          price={ product.price }
          description={ product.description }
          category={ product.category }
          image={ product.image }
          rating={ product.rating }
        />
      ) ) }
    </div>
  );
};

export default Products;