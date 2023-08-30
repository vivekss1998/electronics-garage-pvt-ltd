// ProductSlider.js
import React from 'react';
import { Carousel } from 'primereact/carousel';
import { useTransition, animated } from '@react-spring/web';
import { Card } from 'primereact/card';
import './Slider.css'
function ProductSlider({ items }) {
  const transitions = useTransition(items, {
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
  });

  return (
    <Carousel
      value={items}
      numVisible={3}
      numScroll={1}
      itemTemplate={({ image, title, price }) => (
        <animated.div style={transitions.props}>
          <Card title={title}>
            <img src={image} alt={title} />
            <div className="item-details">
              <p className="item-price">{price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </Card>
        </animated.div>
      )}
    />
  );
}

export default ProductSlider;
