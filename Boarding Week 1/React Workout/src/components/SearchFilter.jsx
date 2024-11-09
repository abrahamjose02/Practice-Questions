import React, { useState } from "react";

const SearchList = () => {
  // Initial list of items
  const initialList = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];

  // State to track the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered list based on the search input
  const filteredList = initialList.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
  );

  // Event handler to update the search input state
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term as user types
  };

  return (
    <div>
      <h2>Search List</h2>

      {/* Search input field */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange} // Update search term on input change
        style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
      />

      {/* Render the filtered list */}
      <ul>
        {filteredList.length > 0 ? (
          filteredList.map((name, index) => <li key={index}>{name}</li>)
        ) : (
          <li>No matches found</li> // Display message if no matches
        )}
      </ul>
    </div>
  );
};

export default SearchList;
