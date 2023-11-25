import React, { useState } from 'react';
import './style.css';
import Button from './Components/Button';
import Range from './Components/Range';

let DEFAULT_OPTIONS = [
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 100,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px',
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Hue-rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  },
];

export default function App() {
  let [options, setOptions] = useState(DEFAULT_OPTIONS);
  let [selectedIndex, setSelectedIndex] = useState(0);
  let selectedOption = options[selectedIndex];

  let changeHandler = ({ target }) => {
    setOptions((oldOptions) => {
      return oldOptions.map((option, index) => {
        if (index !== selectedIndex) return option;
        return {
          ...option,
          value: target.value,
        };
      });
    });
  };

  function changeStyle() {
    let filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(' ') };
  }

  return (
    <div className="main_page">
      <div className="grid_container">
        <div className="image_section" style={changeStyle()}>
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="buttons_section">
          {options.map((option, index) => (
            <Button
              key={index}
              clickHandler={() => setSelectedIndex(index)}
              title={option.name}
            />
          ))}
        </div>
        <div className="range_section">
          <input
            type="range"
            name="range"
            id="range"
            value={selectedOption.value}
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}
