import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OfferCard from "../components/Offer";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className="offer-main margin-top-58">
      <div className="container">
        <OfferCard data={data} />
      </div>
    </main>
  );
};

export default Offer;
