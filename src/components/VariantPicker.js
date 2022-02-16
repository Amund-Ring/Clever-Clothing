import React, { useEffect, useState } from 'react';
import '../styles/VariantPicker.css';

function VariantPicker({ color }) {
  const [colorClass, setColorClass] = useState('pink');

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
      default:
        className = 'colorPickerBlack';
    }
    setColorClass(className);
  };

  useEffect(() => {
    getColorClass();
  }, [])

  return <div className={`variantPicker ${colorClass}`}></div>;
}

export default VariantPicker;
