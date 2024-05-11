import React, { useState } from 'react';
import buttonimage from '../images/menubg.png';

const MenuButton = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [displayCards, setDisplayCards] = useState(false);

  const fetchDrinksData = async () => {
    try {
      const response = await fetch('http://localhost:3001/drinks');
      if (!response.ok) {
        throw new Error('Failed to fetch drinks data');
      }
      const data = await response.json();
      setDrinksData(data);
      setDisplayCards(true); // Set displayCards to true after fetching data
    } catch (error) {
      console.error('Error fetching drinks data:', error);
    }
  };

  const handleDrinksClick = () => {
    fetchDrinksData();
  };

  const divStyle = {
    width: '100%',
    background: `url(${buttonimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Display buttons vertically
    opacity: '10.0', // Reduced opacity
  };

  const buttonStyle = {
    margin: '0 10px',
    width: '114.25px',
    height: '49.98px',
    gap: '0px',
    border: '0.5px solid #0796EF',
    background: '#000000', // Black background for buttons
    color: '#ffffff', // White text color for buttons
    fontWeight: 'bold',
    opacity: '0.8',
    transition: 'background-color 0.3s ease',
  };

  const cardStyle = {
    margin: '20px',
    border: '1px solid #ccc',
    padding: '20px', 
    width: '100%', 
    maxWidth: '500px', 
    background: '#000000', 
    color: '#ffffff', 
    textAlign: 'center', 
  };

  const categoryStyle = {
    marginBottom: '10px', 
  };

  return (
    <div style={divStyle}>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.background = '#0796EF')}
        onMouseLeave={(e) => (e.target.style.background = '#000000')}
      >
        FOOD
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={buttonStyle}
        onClick={handleDrinksClick}
        onMouseEnter={(e) => (e.target.style.background = '#0796EF')}
        onMouseLeave={(e) => (e.target.style.background = '#000000')}
      >
        DRINKS
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.background = '#0796EF')}
        onMouseLeave={(e) => (e.target.style.background = '#000000')}
      >
        BRUNCH
      </button>

      
      {displayCards &&
        drinksData.map((category) => (
          <div key={category.category} style={cardStyle}>
            <h3 style={categoryStyle}>{category.category}</h3>
            <br />
            {category.items.map((item) => (
              <div key={item.name}>
                <p>{item.name}</p>
                {item.descr && <p>{item.descr}</p>}
              </div>
            ))}
          </div>
        ))}
        <button
        type="button"
        className="btn btn-primary"
        
      >
        ORDER ONLINE
      </button>
      <br />
      <div class="card-group">
  <div class="card" style={{background: '#C5A059' }}>
    
    <div class="card-body">
      
      <p class="card-text"  style={{ fontFamily: 'Kelly Slab', fontSize: '14px', fontWeight: 400, lineHeight: '16.97px', textAlign: 'left' }}>Food may not be refunded. If your food was made incorrectly we will remake it for you.</p>
      
    </div>
  </div>
  <div class="card" style={{background: '#C5A059' }}>
    
    <div class="card-body">
      
      <p class="card-text"  style={{ fontFamily: 'Kelly Slab', fontSize: '14px', fontWeight: 400, lineHeight: '16.97px', textAlign: 'left' }}>18% service charge will be added to all checks over $100.</p>
      
    </div>
  </div>
  <div class="card" style={{background: '#C5A059' }}>
    
    <div class="card-body">
      
      <p class="card-text"  style={{ fontFamily: 'Kelly Slab', fontSize: '14px', fontWeight: 400, lineHeight: '16.97px', textAlign: 'left' }}>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</p>
      
    </div>
  </div>
</div>
    </div>
  );
};

export default MenuButton;
