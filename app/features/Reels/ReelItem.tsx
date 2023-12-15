import React from "react";

const ReelItem = ({
  image,
  title,
  big,
}: {
  big?: boolean;
  image: string;
  title: string;
}) => {
  return (
    <div className={`h-96 flex-1`}>
      <img className="h-full w-full object-cover" src={image} alt={title} />
    </div>
  );
};

export default ReelItem;
