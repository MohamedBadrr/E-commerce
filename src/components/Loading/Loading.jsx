import React from "react";

const Loading = () => {
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center">
      <h1 className="loading">
        <i className="fa-solid fa-rotate-right fa-spin-pulse base-color"></i>
      </h1>
    </div>
  );
};

export default Loading;
