
import Image from "next/image";
import React from "react";
export default function Hero({ heading, descList, heroImage }) {

  return (
    <>
      <section className="hero_section">
        <h1 className="fade-up hero_title hero-title font-500 px-[5px]">
          {heading}
        </h1>

        <div className="hero_content flex flex-wrap">
          <div className="left_hero">
            <Image
              src={heroImage}
              alt="Healthcare Support Services"
              className="logo-fade hero_image"
              fill
              priority
            />
          </div>
          <div className="right_hero">
            <ul className="list_items_hero">
            {(descList && descList.length > 0 ? descList : [
              "Trusted doctors at your service",
              "Advanced treatment options available",
              "All major insurances accepted",
            ]).map((desc, index) => (
              <li className="list_item_hero hero-text" key={index}>
                {desc}
              </li>
            ))}
          </ul>
          </div>

        </div>
      </section>
    </>
  );
}
