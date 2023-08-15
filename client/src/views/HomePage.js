import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../redux/actions";
import Cards from "../components/Cards";
function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <>
      <Cards />
    </>
  );
}

export default HomePage;
