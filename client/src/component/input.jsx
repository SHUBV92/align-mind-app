import React from "react";

const Input = ({
  onSubmit,
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          className={className}
        />
      </form>
    </div>
  );
};

export default Input;
