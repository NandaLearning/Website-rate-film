import React, { useState } from "react";

export default function Navigasi({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); // State untuk menyimpan hasil pencarian

  const handleSearch = () => {
    onSearch(searchQuery); // Panggil fungsi pencarian yang diteruskan dari komponen Movie
    setSearchResults([]); // Kosongkan hasil pencarian
    setSearchQuery(""); // Kosongkan input pencarian
  };

  return (
    <div className="navbar bg-white drop-shadow-xl text-black">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">NandaFilm</a>
      </div>
      <div className="flex items-center gap-2"> {/* Menggunakan "flex" dan "items-center" untuk menyusun elemen secara horizontal */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto bg-white border border-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="btn btn-ghost btn-circle avatar mr-5 ml-5 border border-black rounded-xl w-16 hover:bg-blue-400"
        >
          {/* Tambahkan ikon pencarian di sini */}
          Search
        </button>
      </div>
      {/* Menampilkan hasil pencarian di bawah input */}
      {searchResults.length > 0 && (
        <div className="absolute top-12 left-0 right-0 bg-white z-10 p-2 border border-gray-300 rounded-md shadow-md">
          {searchResults.map((result) => (
            <div key={result.id} className="py-2">
              <a href="#" className="text-black">
                {result.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
