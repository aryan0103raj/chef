// Rendering the Recipes that were searched by the user
// and filtered on the basis of the Diet selected by the user
import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (food, diet) => {
    if (diet !== "None") {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${diet}&query=${food}&number=12`
      );

      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${food}&number=12`
      );

      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
    }
  };

  useEffect(() => {
    console.log(params);
    getSearched(params.food, params.diet);
  }, [params.food, params.diet]);

  return (
    <SearchedGrid>
      {searchedRecipes.map((item) => {
        return (
          <SearchedCard key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} />
              <h4>{item.title}</h4>
            </Link>
          </SearchedCard>
        );
      })}
    </SearchedGrid>
  );
}

const SearchedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const SearchedCard = styled.div`
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

export default Searched;
