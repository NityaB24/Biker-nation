"use client";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
import Bike from "./Bike";

const BikeCategories = ({ bikes }) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(2000);

  useEffect(() => {
    const filtered = bikes.filter(bike => {
        const categoryMatch = category === "all" ? bikes : bike.categories.some(cat => cat.name === category)
        const priceMatch = bike.price <= price;
        return categoryMatch && priceMatch;
    });
    setFilteredBikes(filtered);
  }, [category, price, bikes]);
  

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
              onValueChange={(e) => {
                setCategory(e);
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="road" id="road" />
                <label htmlFor="road">Road</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="professional" id="professional" />
                <label htmlFor="Professional">Professional</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="extreme" id="extreme" />
                <label htmlFor="extreme">Extreme</label>
              </div>
            </RadioGroup>
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price: <span>${price}</span>
                <span className="ml-2">
                  {filteredBikes.length > 1
                    ? `${filteredBikes.length} items`
                    : `${filteredBikes.length} item`}
                </span>
              </div>
              <Slider defaultValue={[2000]} max={2000} step={1} onValueChange={val => setPrice(val)} />
            </div>
          </aside>
          <div className="w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {filteredBikes.map((bike) => {
                return <Bike bike={bike} key={bike.id} />;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;