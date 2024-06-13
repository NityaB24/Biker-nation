import { client } from "@/app/lib/sanity";
import Link from "next/link";
import React from "react";
import PopularBikeCarousel from "./PopularBikeCarousel";

// getData
const getData = async () => {
  const query = `*[_type == "product" && references(*[_type=="category" && name == "popular"]._id, categories)] {
          _id,
          name,
          description,
          image,
          price,
          price_id,
          "slug": slug.current,
          "categories": categories[]-> {
            name
          }
      }`;
  const data = await client.fetch(query);

  return data;
};

const PopularBikes = async () => {
  const bikes = await getData();
  // console.log(bikes);
  return <section className="mb-40">
    <div className="container mx-auto">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="text-center mb-[30px]">The World's Premium Brands In One Description.</p>
        <PopularBikeCarousel bikes={bikes} />
        <Link href="/our-bikes">
            <button className="btn btn-accent mx-auto">See all bikes</button>
        </Link>
    </div>
  </section>;
};

export default PopularBikes;