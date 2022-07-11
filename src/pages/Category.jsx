// Page to render the recipes selected for a given Cuisine
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function Category() {
  const [category, setCategory] = useState([]);
  let params = useParams();

  // Setting the state for recipes of selected Cuisine
  const getCategory = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );

    const recipes = await data.json();
    setCategory(recipes.results);
  };

  useEffect(() => {
    getCategory(params.cuisine);
  }, [params.cuisine]);

  return (
    <CategoryGrid>
      {category.map((item) => {
        return (
          <CategoryCard key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </CategoryCard>
        );
      })}
    </CategoryGrid>
  );
}

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const CategoryCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Category;
