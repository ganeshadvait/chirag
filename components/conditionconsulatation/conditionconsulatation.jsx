export default function TwoColumnInfo({ leftBox, rightBox }) {
    return (
        <section className="py-8 sm:py-10">
            <div className="max-w-[100%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 sm:px-6">

                {/* LEFT BOX */}
                <div className="bg-[#F8E7C7] rounded-3xl p-6 sm:p-12 ">
                    <h2 className="text-[#6A5A8A] text-[20px] sm:text-[30px] font-semibold mb-2 sm:mb-6">
                        {leftBox.heading}
                    </h2>

                    <ul className="space-y-4 list-disc marker:text-[#7966af] marker:text-[20px] pl-5">
                        {leftBox.points.map((point, i) => (
                            <li key={i} className="text-[16px] sm:text-lg text-[#2B2A2F] leading-relaxed mb-0 sm:mb-2">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT BOX */}
                <div className="bg-[#F8E7C7] rounded-3xl p-6 sm:p-12 ">
                    <h2 className="text-[#6A5A8A] text-[20px] sm:text-[30px] font-semibold mb-6">
                        {rightBox.heading}
                    </h2>

                    <ul className="space-y-5 list-disc marker:text-[#7966af] marker:text-[20px] pl-5">
                        {rightBox.points.map((point, i) => (
                            <li key={i} className="text-[16px] sm:text-lg text-[#2B2A2F] leading-relaxed mb-0 sm:mb-2">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
