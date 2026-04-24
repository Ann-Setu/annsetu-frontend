import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className="bg-white border-b-[2px] bg-gradient-to-br from-orange-50 to red-50 shadow-md px-6 md:px-10 py-4 flex items-center justify-between relative">

      {/* LEFT - LOGO + NAME */}
      <div className="flex items-center gap-3">
        
        <img src={logo} alt="logo" className="w-10 h-10 object-contain" />

        <div className="flex flex-col leading-tight">
          
          {/* BRAND NAME */}
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-[#FF9933]">ann</span>
            <span className="text-[#8B0000]">setu</span>
          </h1>

          {/* HINDI TAGLINE */}
          <p className="text-[12px] text-[#D4AF37] tracking-wide">
            अन्न दान महा दान
          </p>

        </div>

      </div>

      {/* CENTER - LINKS (DESKTOP) */}
      <div className="hidden md:flex gap-8 text-[#8B0000] font-medium">

        {[
          
          "How It Works",
          "Donate", 
          "NGOs", 
          "Impact"
        ].map((item) => (
          <a key={item} href="#" className="relative group cursor-pointer">
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF9933] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}

      </div>

      {/* RIGHT */}
      <div className="hidden md:flex items-center gap-4">
    <NavLink to="/login"> 
        <button className="text-[#8B0000] font-medium hover:text-[#FF9933] transition">
          Login
        </button>
    </NavLink>

      <NavLink to="/signup">
        <button className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] text-white px-5 py-2 rounded-full shadow hover:scale-105 transition">
          Donate now
        </button>
      </NavLink>

      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="text-[#8B0000] text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFF5E1] shadow-md flex flex-col items-center py-6 gap-4 md:hidden z-50">

          {["Who We Are", "How It Works", "Donate", "NGOs", "Impact"].map((item) => (
            <a key={item} href="#" className="text-[#8B0000] font-medium">
              {item}
            </a>
          ))}

          <NavLink to="/login">
            <button className="text-[#8B0000] font-medium">Login</button>
          </NavLink>

          
            <button className="bg-[#FF9933] text-white px-5 py-2 rounded-full">
              Donate now
            </button>
          

        </div>
      )}
    </nav>
<Outlet />

      </>
    
  );
}

export default Navbar;