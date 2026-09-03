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
    phone: "08065916415",
    email: "info@chiragglobalhospitals.com",
    website: "www.chiragglobalhospitals.com",
  },
};

const FooterComponent = ({ footerdesc, footernumber, extradesc }) => {
  return (
    <section id="contact" className="footer bg-white mb-[100px] md:mb-0 border-t border-gray-100">
      <div className="inner_footer max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* LOGO + DESCRIPTION */}
        <div className="column c_one w-full lg:w-[38%] xl:w-[40%]">
          <Link href="#" className="footer_logo inline-block">
            <Image
              src={data.logo}
              alt="Chirag Global Hospitals logo"
              width={200}
              height={60}
              className="logo-fade w-[170px] md:w-[200px] h-auto"
            />
          </Link>
          <p className="text-gray-600 mt-3 footer_description text-sm md:text-[15px] leading-relaxed max-w-md">
            {footerdesc}
          </p>
          {extradesc && (
            <p className="text-gray-600 mt-2 text-sm md:text-[15px] leading-relaxed max-w-md">
              {extradesc}
            </p>
          )}
        </div>

        {/* LINK COLUMNS */}
        <div className="inner_second_footer flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 lg:gap-8">
          <div className="column c_three">
            <h3 className="font-semibold mb-3 text-gray-900">
              Center of Excellence
            </h3>
            <ul className="space-y-2">
              {data.centerofexcellence.map((item, index) => (
                <li key={index} className="excellence_list">
                  <span className="text-gray-700 text-sm md:text-[15px]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="column c_four">
            <h3 className="font-semibold mb-3 text-gray-900">Contact Us</h3>
            <p className="text-gray-700 mb-3 text-sm md:text-[15px] leading-relaxed">
              <a
                href="https://maps.app.goo.gl/3ox9s9tsJ9rD9tmu7"
                className="hover:text-[#99509f]"
              >
                {data.contactus.address}
              </a>
            </p>

            <p className="flex items-center text-gray-700 mb-3 gap-2 text-sm md:text-[15px]">
              <span className="w-4 h-4 shrink-0">
                <Image
                  src="/Call Us.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </span>
              <a href={`tel:${footernumber}`} className="hover:text-[#99509f]">
                {footernumber}
              </a>
            </p>

            <p className="flex items-center text-gray-700 mb-3 gap-2 text-sm md:text-[15px]">
              <span className="w-4 h-4 shrink-0">
                <Image
                  src="/Mail Us.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </span>
              <span className="break-all">{data.contactus.email}</span>
            </p>

            <p className="flex items-center text-gray-700 mb-3 gap-2 text-sm md:text-[15px]">
              <span className="w-4 h-4 shrink-0">
                <Image
                  src="/website.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </span>
              <Link
                href="https://www.chiragglobalhospitals.com/"
                className="hover:text-[#99509f] break-all"
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