import React from "react";

const SingleCancelingReason = ({ reason }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{reason}</span>
        <input
          type="radio"
          name="radio-10"
          className="radio checked:bg-red-500"
          checked
        />
      </label>
    </div>
  );
};

export default SingleCancelingReason;
