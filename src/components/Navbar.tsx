
const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed  top-0 left-0 w-full bg-gray-50 shadow-md z-50">
      <div className="container max-w-[85%] mx-auto flex justify-between items-center py-1 px-6">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="ZenTech Hub" className="w-20 h-20" />
          {/* <span className="font-bold text-lg">ZenTech Hub</span> */}
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {["home", "about", "courses", "mentor", "faqs", "contact"].map((id, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(id)}
              className="capitalize text-gray-700 hover:text-blue-800 cursor-pointer transition"
            >
              {id === "mentor" ? "Become a Mentor/Ambassador" : id.replace("-", " ")}
            </button>
          ))}
          <button className="ml-4 bg-[#0B2C7D] hover:bg-blue-800 text-white px-4 py-2 rounded-md shadow">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
