import React from 'react'
import productdata from './utility/data';

const App = () => {
  let previews = productdata.map((product) => {
    let reviews = product.productReviews;
    let productReviews = reviews.map((review) => review.productReview);
    return { productName: product.productName, productReviews };
});
  return (
    <div className="bg-slate-700 text-white text-center">
    product views
      {previews.map((product) => (
        <div>
      
        <p>{product.productName}</p>
        <p>{product.productReviews}</p>

        </div>
        
    ))}
    </div>
  )
}

export default App
