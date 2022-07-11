// Component to render the Search bar and also the list to enable
// users to select a Diet option
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";

function Search() {
  const [food, setFood] = useState("");
  const [diet, setDiet] = useState("None");
  const navigate = useNavigate();

  // Navigates to provide the recipes for searched food and selected diet
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + food + "/" + diet);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setFood(e.target.value)}
          type="text"
          placeholder="What's Cooking?"
          value={food}
        />
      </div>
      <div>
        <span>Diet</span>
        <select onChange={(e) => setDiet(e.target.value)}>
          {["None", "Vegan", "Vegetarian"].map((diet) => {
            return <option value={diet}>{diet}</option>;
          })}
        </select>
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 0rem;

  div {
    width: 100%;
    position: relative;
  }

  span {
    margin: 3rem 1rem 1rem 0rem;
    border: none;
    background: #404040;
    font-size: 1.5rem;
    color: white;
    padding: 0.5rem 3.5rem;
    border: none;
    border-radius: 3rem;
    outline: none;
    width: 100%;
  }

  select {
    margin: 0rem 1rem 0.8rem 0rem;
    border: none;
    background: #bebebe;
    font-size: 0.9rem;
    color: black;
    padding: 0.5rem 0.6rem 0.5rem 1rem;
    border: none;
    border-radius: 3rem;
    outline: none;
    width: 12.5%;
  }

  option {
    background: linear-gradient(35deg, #494949, #313131);
  }

  input {
    border: none;
    background: #404040;
    font-size: 1.7rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 3rem;
    outline: none;
    margin: 0 0 2rem 0;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 33%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
