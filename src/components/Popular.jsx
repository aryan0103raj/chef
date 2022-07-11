// Component for rendering the "Popular Recipes This Week"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  // Setting the Popular recipes every time the page reloads
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
    );

    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      <PopularWrapper>
        <h3>Popular Recipes This Week</h3>

        <Splide>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <PopularCard>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <ImageGradient />
                  </Link>
                </PopularCard>
              </SplideSlide>
            );
          })}
        </Splide>
      </PopularWrapper>
    </div>
  );
}

const PopularWrapper = styled.div`
  margin: 4rem 0 rem;
`;

const PopularCard = styled.div`
  min-height: 14rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    padding: 1rem;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImageGradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
