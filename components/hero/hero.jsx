import Image from "next/image";

export default function Hero({ heading, descList, heroImage }) {
  return (
    <>
      <section className="hero_section rounded-xl">
        <h1 className="fade-up hero_title hero-title font-500 px-[5px]">
          {heading}
        </h1>

        <div className="hero_content flex flex-wrap">
          <div className="left_hero">
            <Image
              src={heroImage}
              alt="Healthcare Support Services"
              className="logo-fade hero_image mt-0"
              fill
              priority
            />
          </div>
          <div className="right_hero pb-8">
            <ul className="list_items_hero ">
              {(descList && descList.length > 0
                ? descList
                : [
                    "Trusted doctors at your service",
                    "Advanced treatment options available",
                    "All major insurances accepted",
                  ]
              ).map((desc, index) => (
                <li className="flex gap-2 text-white text-xl pb-4" key={index}>
                  <span
                    className="hero-list-icon"
                    style={{ display: "inline-block", marginRight: "8px" }}
                  >
                    {/* SVG ICON HERE */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
