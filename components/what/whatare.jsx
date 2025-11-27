export default function Whatare({ whatAreH, whatAreP, whatHead, treatments })  {
    return (
      <section className="logo-fade  text-[#252B61] whatare">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">{whatAreH}</h2>
        <p className="text-gray-700 mb-6 leading-[2em] whatarepara">{whatAreP}</p>
  
        {/* Treatments Section */}
        <h3 className="text-lg md:text-xl font-bold mb-6">{whatHead}</h3>
        {/* Render treatments */}
        <div className="space-y-4">
          {treatments.map((treatment, index) => (
            <div key={index}>
              <ul className="list-disc list-outside pl-5 font-medium mb-0">
                <li>{treatment.title}</li>
              </ul>
              <p className="text-gray-700 mb-2 px-4 leading-[2em] whatarepara">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };


