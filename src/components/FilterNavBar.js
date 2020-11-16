import React from "react";

const FilterNavBar = ({ setSort, setLimit, Offers }) => {
  return (
    <nav className="FilterNavOptions">
      <select
        name="sortingPrice"
        id="sortingPrice"
        onChange={(event) => {
          setSort(event.target.value);
        }}
      >
        <option value="">Prix</option>
        <option value="low-to-high">Croissant</option>
        <option value="high-to-low">Décroissant</option>
      </select>
      <select
        name="OffersPerPage"
        id="OffersPerPage"
        onChange={(event) => {
          setLimit(Number(event.target.value));
        }}
      >
        <option value="">Offres/Page</option>
        <option value="5">5 </option>
        <option value="10">10</option>
        <option value="50">50</option>
      </select>
      <span
        onClick={() => {
          setLimit(Offers);
        }}
      >
        Voir tout
      </span>
    </nav>
  );
};

export default FilterNavBar;
