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
      <h1 className="text-4xl font-bold">ContentHub: Top Headlines</h1>

      <div className="relative">
        <input
          type="text"
          placeholder="Search for news..."
          className="border p-2 rounded-md w-64"
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
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className="px-4 py-2 bg-yellow-500 text-black rounded" onClick={navigateToLogin}>
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavbarExplore;
