// src/components/HeroSection.jsx

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left side text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            <span className="text-blue-600 italic font-semibold">Empowering</span>{" "}
            Africa’s <br />
            Next Tech{" "}
            <span className="text-blue-600 italic font-semibold">Generation.</span>
          </h1>
          <p className="mt-4 text-gray-600">
            ZenTech Hub is a space for innovators who think beyond the ordinary.
            Join us to build something extraordinary.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow">
            Get Started
          </button>
        </div>

        {/* Right side images */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-full h-32 md:h-40 rounded-lg overflow-hidden shadow"
            >
              <img
                src={`/team-${num}.jpg`}
                alt={`Team ${num}`}
                className="w-full h-full object-cover"
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
