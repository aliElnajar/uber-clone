import React from "react";

const DriverRating = () => {
  const numberOfStars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="rating rating-md">
      {numberOfStars.map((star) => {
        return (
          <input
            readOnly
            key={star}
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
            checked={star === 4}
          />
        );
      })}
    </div>
  );
};

export default DriverRating;
