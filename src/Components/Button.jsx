import React from "react";

function Button({clickHandler, title}) {

  return (
    <>
      <button onClick={clickHandler}>{title}</button>
    </>
  )
}

export default Button;

