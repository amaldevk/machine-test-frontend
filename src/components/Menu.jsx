import React from 'react';
import menupic from '../images/menupic.jpeg';

const Menu = () => {
  return (
    
      <div className="bg-image" style={{
        background: `linear-gradient(180deg, rgba(0,0,0,1) 71%, rgba(0,0,0,0.5) 50%), url(${menupic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Oswald',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '23.71px',
        letterSpacing: '0.03em',
        padding: '30px 0',
      }}>
        <div className="container">
          <h1>MENU</h1>
          <p>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
        </div>
      </div>
    
  );
}

export default Menu;
