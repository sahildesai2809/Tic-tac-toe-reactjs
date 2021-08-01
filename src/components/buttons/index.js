import React from "react";

const Button = (props) => {
  return (
    <span style={props.containerStyle}>
      <button
        style={props.style}
        onClick={() => {
          props.onClick(props.label, props.index);
        }}
      >
        {props.label}
      </button>
    </span>
  );
};

const defaultProps = {
  index: 0,
  label: "button",
};

Button.defaultProps = defaultProps;

export default Button;
