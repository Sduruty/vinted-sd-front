import React, { useState, useEffect } from "react";
import axios from "axios";
//COMPONENTS
import Star from "../components/Star";

//CONTAINERS
import AllOffers from "../containers/AllOffers";
import FilterNavBar from "../components/FilterNavBar";

const Home = ({ search }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [allOffers, setAllOffers] = useState(0);
  const [limit, setLimit] = useState(5);
  const [indexPage, setIndexPage] = useState(1);
  const [sort, setSort] = useState("low-to-high");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?page=${indexPage}&limit=${limit}&sort=${sort}&title=${search}`
      );
      setItems(response.data.offers);
      setAllOffers(response.data.count);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const allPages = Math.ceil(allOffers / limit); //nb d'items / limite arrondi au chiffre au dessus en cas de décimaux
  let newTab = [];
  for (let i = 0; i < allPages; i++) {
    newTab.push(i);
  }
  //needed to add the commented line below in order to avoid error
  useEffect(() => {
    fetchData(allOffers);
    // eslint-disable-next-line
  }, [allOffers, indexPage, limit, sort, search]);

  return (
    <>
      <Star />
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <section className=" container">
          <FilterNavBar
            setSort={setSort}
            setLimit={setLimit}
            allOffers={allOffers}
          />
          <AllOffers items={items} />
          <div className="buttonPagination">
            {newTab.map((page, index) => {
              return (
                <button
                  className={
                    indexPage === page + 1 ? "paginationFocus" : "pagination"
                  }
                  key={index}
                  onClick={() => {
                    setIndexPage(page + 1);
                  }}
                >
                  {page + 1}
                </button>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
