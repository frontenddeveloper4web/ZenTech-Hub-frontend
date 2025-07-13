// src/components/HeroSection.jsx

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 max-w-[85%] mx-auto pb-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left side text */}
        <div className="md:w-1/2">
          <h1 className="text-[70px] md:text-5xl font-bold leading-snug">
            <span className="text-[#02A2C7] italic font-bold">Empowering</span>{" "}
            Africa’s <br />
            Next Tech{" "}
            <span className="text-[#02A2C7] italic font-bold">Generation.</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-[589px]">
            ZenTech Hub is a space for innovators who think beyond the ordinary.
            Join us to build something extraordinary.
          </p>
          <button className="mt-6 w-[370px] h-[44px44px] bg-[#0B2C7D] hover:bg-blue-800 text-white px-6 py-3 rounded-md shadow">
            Get Started
          </button>
        </div>

        {/* Right side images */}
        <div className="md:w-1/2 flex flex-wrap">
          {['/assets/hero1.png', '/assets/hero2.png', '/assets/hero3.png', '/assets/hero4.png'].map((href, num) => (
            <div
              key={num}
              className="w-[264px] p-0 h-[243px] md:h-[243px]"
            >
              <img
                src={`${href}`}
                alt={`Team ${num}`}
                className="w-full h-full p-0  object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Icon Row */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 px-6">
        {[
          "Artificial Intelligence",
          "Robotic Engineering",
          "UI/UX Design",
          "Cyber Security",
          "Blockchain",
          "Front-end Development",
          "Back-end Development",
        ].map((text, i) => (
          <div key={i} className="flex flex-col items-center text-sm text-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow mb-2">
              🤖
            </div>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
