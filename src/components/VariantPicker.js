import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/VariantPicker.css';

function VariantPicker({ color, productID, setProductId }) {
  const [colorClass, setColorClass] = useState('colorPickerSand');


  const getColorClass = () => {
    let className;
    switch (color) {
      case 'black':
        className = 'colorPickerBlack';
        break;
      case 'sand':
        className = 'colorPickerSand';
        break;
      case 'white':
        className = 'colorPickerWhite';
        break;
      case 'red':
        className = 'colorPickerRed';
        break;
      case 'yellow':
        className = 'colorPickerYellow';
        break;
      case 'aqua':
        className = 'colorPickerAqua';
        break;
      case 'gray':
        className = 'colorPickerGray';
        break;
      case 'blue':
        className = 'colorPickerBlue';
        break;
      case 'medium blue':
        className = 'colorPickerMediumBlue';
        break;
      case 'army':
        className = 'colorPickerArmy';
        break;
      case 'navy':
        className = 'colorPickerNavy';
        break;
      default:
        className = 'colorPickerBlack';
    }
    setColorClass(className);
  };

  useEffect(() => {
    getColorClass();
  }, []);

  return (
    <Link to={`/product/${productID}/${color}`}>
      <div className={`variantPicker ${colorClass}`}></div>
    </Link>
  );
}

export default VariantPicker;
