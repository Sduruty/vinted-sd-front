import React, { useEffect, useState } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import Star from "../components/Home/Star";
import Offers from "../components/Home/Offers";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Star />
      <Offers data={data} />
    </div>
  );
};

export default Home;