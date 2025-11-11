
export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        .font-berkshire {
          font-family: 'Berkshire Swash', cursive;
        }
      `}</style>

      <section className="relative flex flex-col items-center pb-48 text-center text-sm text-white max-md:px-2 bg-gradient-to-b from-pink-500 via-pink-600 to-pink-700 bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-20"></div>

        <nav className="relative flex justify-between items-center px-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-white/20 w-full z-10">
          <a href="#" className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="24" stroke="white" strokeWidth="2" />
              <path d="M25 12L33 25L25 38L17 25L25 12Z" fill="white" />
            </svg>
            <span className="text-lg font-semibold tracking-wide">
              HopeTogether
            </span>
          </a>
          <a
            href="#contact"
            className="bg-white text-pink-700 hover:bg-pink-100 px-6 md:px-8 py-2.5 rounded-full font-medium transition"
          >
            Donate Now
          </a>
        </nav>

        <div className="relative flex flex-wrap items-center justify-center p-1.5 mt-24 md:mt-28 rounded-full border border-pink-200/70 text-xs bg-pink-700/30 backdrop-blur-sm z-10">
          <div className="flex items-center">
            <img
              className="size-7 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=50"
              alt="volunteer1"
            />
            <img
              className="size-7 rounded-full border-2 border-white -translate-x-2"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50"
              alt="volunteer2"
            />
            <img
              className="size-7 rounded-full border-2 border-white -translate-x-4"
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=50"
              alt="volunteer3"
            />
          </div>
          <p className="-translate-x-2">Join our 1M+ supporters community 💖</p>
        </div>

        <h1 className="relative font-berkshire text-[42px]/[52px] md:text-6xl/[65px] mt-8 max-w-4xl z-10 drop-shadow-md">
          Together We Fight, Together We Heal.
        </h1>

        <p className="relative text-base md:text-lg mt-4 max-w-xl z-10 text-pink-100">
          Empowering lives with awareness, compassion, and support for every
          fighter and survivor.
        </p>

        <p className="relative text-base mt-3 md:mt-6 max-w-xl z-10 text-pink-100">
          Join our mission to spread awareness and hope — every voice counts.
        </p>

        <form className="relative flex items-center mt-8 max-w-lg h-16 w-[90%] md:w-full rounded-full border border-white/60 z-10 backdrop-blur-md shadow-lg">
          <input
            type="email"
            placeholder="Enter your email to stay updated"
            className="w-full h-full outline-none bg-transparent pl-6 pr-2 text-white placeholder:text-pink-100 rounded-full"
          />
          <button className="bg-white text-pink-700 hover:bg-pink-200 text-nowrap px-8 md:px-10 h-12 mr-2 rounded-full font-medium transition">
            Join Us
          </button>
        </form>
      </section>
    </>
  );
}
