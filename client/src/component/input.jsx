import React from "react";

const Input = (props) => {

    const {onSubmit, label, type, placeholder, name, onChange} = props

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Input;
