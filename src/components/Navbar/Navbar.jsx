import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import {
  FiShoppingCart,
  FiUser,
  FiLogOut,
  FiPackage,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getTotalCartAmount, token, setToken, cartItems } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const hasDarkBg = !isHome || scrolled;

  // Cuenta el total de items en el carrito
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleNavClick = (id) => {
    setMenu(id);
    setMobileOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home", to: "/", isLink: true },
    { id: "menu", label: "Menu", href: "#explore-menu" },
    { id: "contact", label: "Contact", href: "#footer" },
  ];

  const linkBase =
    "text-[13px] font-['Inter'] font-semibold tracking-wide transition-all cursor-pointer !text-white pb-1 border-b-2 border-transparent hover:border-[#FF5A36]";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          hasDarkBg
            ? "bg-[#1A1A1A]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        }`}
      >
        <nav className="w-full flex justify-between items-center px-4 md:px-10 h-14 md:h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img src={assets.logo} alt="logo" className="h-7 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((item) =>
              item.isLink ? (
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={() => handleNavClick(item.id)}
                  className={linkBase}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={linkBase}
                >
                  {item.label}
                </a>
              ),
            )}

            <div className="flex items-center gap-5 ml-2 border-l border-white/20 pl-7">
              {/* Cart Desktop */}
              <Link
                to="/cart"
                className="relative text-white hover:scale-110 transition-transform active:scale-95"
              >
                <FiShoppingCart size={18} className="text-white" />
                {getTotalCartItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF5A36] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {getTotalCartItems()}
                  </span>
                )}
              </Link>

              {/* Auth */}
              {!token ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-white text-[#1A1A1A] px-5 py-2 rounded-full font-['Inter'] font-semibold text-[13px] hover:bg-[#FF5A36] hover:text-white transition-all duration-300 active:scale-95 shadow-lg cursor-pointer"
                >
                  Sign In
                </button>
              ) : (
                <div className="relative group">
                  <button className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-200 cursor-pointer">
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <FiUser size={13} className="text-[#1A1A1A]" />
                    </div>
                    <span className="text-[13px] font-semibold tracking-tight">
                      Account
                    </span>
                  </button>

                  {/* Dropdown */}
                  <ul className="absolute hidden right-0 top-[calc(100%+10px)] z-50 list-none w-52 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden group-hover:flex group-hover:flex-col">
                    <div className="px-4 pt-3.5 pb-1.5">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-['Inter']">
                        My Account
                      </p>
                    </div>
                    <li
                      onClick={() => navigate("/myorders")}
                      className="flex items-center gap-3 mx-2 px-3 py-2.5 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <FiPackage size={14} className="text-gray-500" />
                      </div>
                      <span>My Orders</span>
                    </li>
                    <div className="mx-4 my-1">
                      <hr className="border-gray-100" />
                    </div>
                    <li
                      onClick={logout}
                      className="flex items-center gap-3 mx-2 mb-2 px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#FF5A36] hover:bg-red-50 cursor-pointer transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <FiLogOut size={14} className="text-[#FF5A36]" />
                      </div>
                      <span>Log out</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <Link
              to="/cart"
              onClick={() => setMobileOpen(false)}
              className="relative text-white"
            >
              <FiShoppingCart size={22} className="text-white" />
              {getTotalCartItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF5A36] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {getTotalCartItems()}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="text-white p-1 transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              <FiMenu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/50 transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[60] shadow-2xl
          flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <img src={assets.logo} alt="logo" className="h-7 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        <div className="flex flex-col px-6 pt-2 flex-1 overflow-y-auto">
          {navLinks.map((item) => {
            const mobileLink =
              "flex items-center py-4 text-[15px] font-semibold font-['Inter'] tracking-wide text-gray-900 border-b border-gray-100 last:border-0 hover:text-[#FF5A36] transition-colors";

            return item.isLink ? (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => handleNavClick(item.id)}
                className={mobileLink}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={mobileLink}
              >
                {item.label}
              </a>
            );
          })}

          <div className="mt-6 flex flex-col gap-3">
            {!token ? (
              <button
                onClick={() => {
                  setShowLogin(true);
                  setMobileOpen(false);
                }}
                className="w-full bg-black text-white py-3.5 rounded-full font-['Inter'] font-semibold text-sm hover:bg-[#FF5A36] transition-all duration-300 active:scale-95 shadow-md cursor-pointer"
              >
                Sign In
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/myorders");
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <FiPackage size={18} className="text-gray-600" />
                  <span>My Orders</span>
                </button>

                <button
                  onClick={logout}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-[#FF5A36] bg-[#FF5A36]/10 hover:bg-[#FF5A36]/20 transition-colors cursor-pointer"
                >
                  <FiLogOut size={18} />
                  <span>Log out</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
