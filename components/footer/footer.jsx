"use client";
import Image from "next/image";
import Link from "next/link";
// import "./footerstyles.css";

const data = {
  description:
    "Lorem ipsum dolor sit amet consectetur. Aliquet morbi amet nec diam. Vel massa commodo viverra.Lorem ipsum dolor sit amet consectetur. Aliquet morbi amet nec diam",
  logo: "/Chirag-New-logo_.webp",
  forpatients: [
    { text: "About Us", url: "#" },
    { text: "FAQs", url: "#" },
    { text: "Contact Us", url: "#" },
    { text: "Blogs", url: "#" },
  ],
  centerofexcellence: [
    { text: "Piles", url: "#" },
    { text: "Fissure", url: "#" },
    { text: "Fistula", url: "#" },
    { text: "Constipation", url: "#" },
    { text: "Colon Cancer", url: "#" },
    { text: "Pilonidal Sinus", url: "#" },
  ],

  contactus: {
    address:
      "103, 6th Cross Rd, Dollar Layout, BTM 2nd Stage, Bengaluru, Karnataka 560076",
    phone: "9380498256",
    email: "info@chiragglobalhospitals.com",
    website: "www.chiragglobalhospitals.com",
  },
};

const FooterComponent = ({ footerdesc, footernumber, extradesc }) => {
  return (
    <section id="contact" className="footer bg-white">
      <div className="inner_footer">
        <div className="column c_one">
          <Link href="#" className="footer_logo">
            <Image
              src={data.logo}
              alt="Logo"
              width={200}
              height={60}
              className={`logo-fade `}
            />
          </Link>
          <p className="text-black-600 mt-2 footer_description">{footerdesc}</p>
          <p>{extradesc}</p>
        </div>

        <div className="inner_second_footer">
          <div className="column c_three">
            <h3 className="font-semibold mb-2">Center of Excellence</h3>
            <ul>
              {data.centerofexcellence.map((item, index) => (
                <li key={index} className="excellence_list">
                  {/* <Link href={item.url}> */}
                  <span className="text-black-700">
                    {item.text}
                  </span>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Us Section */}
          <div className="column c_four">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-700 mb-[10px]">
              <a
                href="https://maps.app.goo.gl/evEJmyVJqMArfBoG7"
                className="hover:text-[#99509f]"
              >
                {data.contactus.address}
              </a>
            </p>

            <p className="flex flex-wrap items-center text-gray-700 mb-[10px] gap-2">
              <span className="w-4 h-4">
                <Image
                  src="/Call Us.svg"
                  alt="phone_icon"
                  width={16}
                  height={16}
                />
              </span>
              <a
                href={`tel:${footernumber}`}
                className="hover:text-[#99509f]"
              >
                {footernumber}
              </a>
            </p>

            <p className="flex flex-wrap items-center text-gray-700 mb-[10px] gap-2">
              <span className="w-4 h-4">
                <Image
                  src="/Mail Us.svg"
                  alt="phone_icon"
                  width={16}
                  height={16}
                />
              </span>
              <span
              // href={`mailto:${data.contactus.email}`}
              // className="hover:text-[#99509f]"
              >
                {data.contactus.email}
              </span>
            </p>

            <p className="flex flex-wrap items-center text-gray-700 mb-[10px] gap-2">
              <span className="w-4 h-4">
                {" "}
                <Image
                  src="/website.svg"
                  alt="phone_icon"
                  width={16}
                  height={16}
                />
              </span>
              <Link
                href="https://www.chiragglobalhospitals.com/"
                className="hover:text-[#99509f]"
              >
                {data.contactus.website}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
