import React, { useEffect, useState } from "react";
import Coffee from "./Coffee";
import { Link, NavLink } from "react-router-dom";

function Card() {
  const [data, setdata] = useState([]);
  const [avail, setavail] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    ).then((response) =>
      response
        .json()
        .then((data) => {
          setdata(data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);

  return (
    <div className="absolute bg-[#1b1d1f] flex flex-col xl:w-5/6 justify-center items-center  mx-auto lg:px-12 z-20 left-0 right-0 mt-36 xl:mt-40 lg:w-2/3 w-[59%] rounded-xl py-16 px-7 shadow-2xl lg:py-20 overflow-hidden">
      <div className="flex flex-col items-center">
        <img
          className="float-right absolute xl:right-72 xl:top-4 -z-10 lg:right-24 lg:top-9 -right-16 top-4 "
          src="./images/vector.svg"
          alt=""
        />
        <h1 className="text-[#FEF7EE] font-dmsans text-[32px] font-bold">
          Our Collection
        </h1>
        <p className="text-[#6F757C] font-dmsans mt-2 mb-4 text-center xl:w-[55%] lg:w-[85%]  font-semibold">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>
      <div
        className="flex
      ">
        <div
          className={`p-1 px-2.5  cursor-pointer text-[#FEF7EE] rounded-lg ${
            avail ? "" : "bg-[#6F757C]"
          } mr-2 font-semibold font-dmsans`}
          onClick={() => {
            setavail(false);
          }}>
          All Products
        </div>
        <div
          className={`p-1 px-2.5 text-[#FEF7EE] rounded-lg font-semibold font-dmsans cursor-pointer ${
            avail ? "bg-[#6F757C]" : ""
          }`}
          onClick={() => {
            setavail(true);
          }}>
          Available Now
        </div>
      </div>
      <div className="pb-5"></div>
      <div></div>
      <div className="flex text-[#FEF7EE] font-dmsans flex-col lg:flex-row lg:justify-around lg:flex-wrap xl:w-[92%] ">
        {data.map((coffee) => (
          <Coffee
            key={coffee.id}
            name={coffee.name}
            image={coffee.image}
            price={coffee.price}
            popular={coffee.popular}
            rating={coffee.rating}
            votes={coffee.votes}
            available={coffee.available}
            isAvail={avail}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
