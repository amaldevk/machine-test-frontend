import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => {
  return (
    <div style={{ background: '#000000', padding: '20px' }}>
      <div className="card-group">
        <div className="card" style={{ background: '#000000', color: '#ffffff' }}>
          <div className="card-body">
          <p style={{ fontFamily: 'Oswald', fontSize: '16px', fontWeight: 500, lineHeight: '23.71px', letterSpacing: '0.03em', textAlign: 'left', color: '#0796EF' }}>Connect with Us</p>
          <p style={{ 
            width: '109px', 
            height: '22.6px', 
            top: '2580.95px', 
            left: '294px', 
            gap: '0px', 
            opacity: '0px', 
            fontFamily: 'Oswald', 
            fontSize: '14px', 
            fontWeight: 400, 
            lineHeight: '23.71px', 
            letterSpacing: '0.03em', 
            textAlign: 'left', 
            color: '#857878' 
            }}>+1 470-788-8255
            </p>

            <p style={{ 
                width: '163px', 
                height: '22.6px', 
                top: '2607.32px', 
                left: '267px', 
                gap: '0px', 
                opacity: '0px', 
                fontFamily: 'Oswald', 
                fontSize: '16px', 
                fontWeight: 400, 
                lineHeight: '23.71px', 
                letterSpacing: '0.03em', 
                textAlign: 'left', 
                color: '#857878' 
                }}>email@42barandgrill.com</p>

          </div>
        </div>
        <div className="card" style={{ background: '#000000', color: '#ffffff' }}>
          <img src={logo} className="card-img-top" alt="..." width="110" height="104" style={{ filter: 'invert(1)' }} />
        </div>
        <div className="card" style={{ background: '#000000', color: '#ffffff',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="card-body">
            
          <p style={{ 
            width: '53px', 
            height: '23px', 
            top: '2541px', 
            left: '1081px', 
            gap: '0px', 
            opacity: '0px', 
            fontFamily: 'Oswald', 
            fontSize: '12px', 
            fontWeight: 500, 
            lineHeight: '23.71px', 
            letterSpacing: '0.03em', 
            textAlign: 'center', 
            color: '#0796EF' 
            }}>FIND US</p>

            <p style={{ 
            width: '184px', 
            height: '45.21px', 
            top: '2580.01px', 
            left: '1029px', 
            gap: '0px', 
            opacity: '0px', 
            fontFamily: 'Oswald', 
            fontSize: '16px', 
            fontWeight: 400, 
            lineHeight: '23.71px', 
            letterSpacing: '0.03em', 
            textAlign: 'center', 
            color: '#857878' 
            }}>327 Memorial Dr SE, Atlanta, GA 30312, USA</p>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
