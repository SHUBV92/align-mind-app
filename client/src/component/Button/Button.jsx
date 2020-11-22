import React from "react";

const Button = (props) => {
  const { onClick, name, className } = props;

  return (
    <div>
      <button className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
