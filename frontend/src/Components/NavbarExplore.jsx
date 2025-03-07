import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarExplore = ({ onSearch, user, onLogout }) => {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = () => {
    onSearch(query);
  };
  const navigate = useNavigate();
  const navigateToLogin = () => {
      navigate("/login");
  };
  

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md mb-10">
      <h1 className="text-5xl font-serif font-bold">Top Headlines</h1>

      <div className="relative">
        <input
          type="text"
          placeholder="Search for news..."
          className="border px-2 p-1.5 rounded-md w-75"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearchSubmit()}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2  text-white px-3 py-1 rounded"
          onClick={handleSearchSubmit}
        >
          🔍
        </button>
      </div>

      <div>
        {user ? (
          <button className="px-6 py-2  bg-[#4a90e2] font-bold text-l text-black rounded" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className="px-6 py-2 bg-[#4a90e2] font-bold text-l text-black  rounded hover:bg-gradient-to-r from-[#4D90FE] to-[#357ae8]" onClick={navigateToLogin}>
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavbarExplore;
