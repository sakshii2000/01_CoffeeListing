import React from "react";

function Coffee({
  name,
  image,
  popular,
  price,
  rating,
  votes,
  available,
  isAvail
}) {
  return (
    <div className={`py-6 mb-3.5  ${isAvail && !available ? "hidden" : ""}`}>
      {popular && (
        <div className="float-left absolute m-2 bg-[#F6C768] text-[#111315] text-[10px] font-bold py-0.5  rounded-full px-2">
          Popular
        </div>
      )}
      <img
        className="rounded-xl lg:w-full"
        src={image}
        alt="image"
      />
      <div className="flex mx-auto justify-between mt-3 mb-1.5">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="rounded-md bg-[#BEE3CC]  font-semibold text-[#111315] text-sm  mt-1 items-center flex px-2">
          {price}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <img
            src="./images/Star_fill.svg"
            alt=""
          />
          <p className="mx-1 font-semibold">{rating}</p>
          <p className="text-[#6F757C]">({votes} votes)</p>
        </div>
        {!available && (
          <div className="text-sm font-bold text-[#ED735D] flex items-center mt-1">
            Sold Out
          </div>
        )}
      </div>
    </div>
  );
}

export default Coffee;
