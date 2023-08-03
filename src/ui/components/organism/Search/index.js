import React from "react";

const Search = ({search, onSearchChange, handleSearchSubmit}) => {
  return (
    <>
      <form className="d-flex" onSubmit={handleSearchSubmit}>
        <input
          className="form-control me-2 mt-3"
          type="text"
          value={search}
          placeholder="Busca tus productos"
          onChange={onSearchChange}
        />
        <button className="btn btn-outline-success mt-3" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Search;
