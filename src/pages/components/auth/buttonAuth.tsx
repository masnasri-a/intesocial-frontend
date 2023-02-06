import React from "react";

const ButtonAuth = (props: any) => {
  return (
    <button
      type="submit"
      className="buttonAuth"
      onClick={(e) => props.onClick()}
    >
      {props.text}
    </button>
  );
};

export default ButtonAuth;
