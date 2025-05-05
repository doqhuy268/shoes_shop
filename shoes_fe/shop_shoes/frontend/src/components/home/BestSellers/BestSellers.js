import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-2xl mx-auto">
        <Heading heading="Our Bestsellers" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <Product
            _id="1011"
            img={bestSellerOne}
            productName="Flower Base"
            price="35.00"
            color="Blank and White"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
          <Product
            _id="1012"
            img={bestSellerTwo}
            productName="New Backpack"
            price="180.00"
            color="Gray"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
          <Product
            _id="1013"
            img={bestSellerThree}
            productName="Household materials"
            price="25.00"
            color="Mixed"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
          <Product
            _id="1014"
            img={bestSellerFour}
            productName="Travel Bag"
            price="220.00"
            color="Black"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
