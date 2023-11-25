import React from 'react';

function Range({ changeHandler, option }) {
  return (
    <>
      <input
        type="range"
        name="range"
        id="range"
        value={option.value}
        min={option.range.min}
        max={option.range.max}
        onChange={changeHandler}
      />
    </>
  );
}

export default Range;
