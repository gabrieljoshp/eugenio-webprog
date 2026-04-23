import logo from "../assets/NU_Shield_1.png";

const Footer = () => {
  return (
    <footer className="border-t-[5px] border-yellow-400 bg-blue-900/95 backdrop-blur">
      <div className="mx-auto flex flex-col items-center justify-center gap-3 px-4 py-6 sm:px-6 lg:px-8">
        <img src={logo} alt="NU Logo" className="h-16 w-auto" />

        <p className="text-center border-t border-white/30 text-sm font-semibold text-white">
          All Rights Reserved. National University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
