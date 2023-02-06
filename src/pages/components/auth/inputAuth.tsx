import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const InputAuth = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="wrapper">
      {props.type == "password" ? (
        showPassword ? (
          <AiOutlineEye
            className="hide"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="hide"
            onClick={() => setShowPassword(!showPassword)}
          />
        )
      ) : null}
      {showPassword ? (
        <input
          type="text"
          placeholder={props.placeholder}
          className="inputAuth"
        />
      ) : (
        <input
          type={props.type ? props.type : "text"}
          placeholder={props.placeholder}
          className="inputAuth"
        />
      )}
    </div>
  );
};

export default InputAuth;
