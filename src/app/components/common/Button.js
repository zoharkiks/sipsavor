import React from "react";

const Button = ({link,children}) => {
  return (
    <div className="btn-normal btn-contact btn ">
      <a href={link} className="btn-click">
        <div className="btn-fill btn-original-fill"></div>
        <div className="btn-text btn-original-text">
          <span>
            <div className="extra-layer">{children}</div>
          </span>
        </div>
        <div className="btn-fill btn-duplicate-fill"></div>
        <div className="btn-text btn-duplicate-text">
          <span>
            <div className="extra-layer">{children}</div>
          </span>
        </div>
      </a>
    </div>
  );
};

export default Button;
