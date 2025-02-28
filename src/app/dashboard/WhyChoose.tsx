"use client";
import { whyChooseFeatures } from "@data";

export const WhyChoose = () => {
  return (
    <section className="relative min-h-180 w-full overflow-x-hidden bg-gray-50 py-20 mt-20 flex flex-col items-center justify-center">
      <div className="container mx-auto text-center px-6 flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose 
          <span className="font-normal"> inves</span>
          <span className="text-[#695192]">Tify3</span>?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our next-gen Web3 platform offers a secure, efficient, and transparent way to invest in stocks, mutual funds, and bonds without intermediaries.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {whyChooseFeatures.map((feature, index) => {
            const IconComponent = feature.icon; // Ambil ikon sebagai komponen
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                <IconComponent className="text-4xl text-[#695192]" /> {/* Render ikon sebagai komponen */}
                <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};