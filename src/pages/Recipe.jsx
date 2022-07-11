// Rendering the information about a certain recipe
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`
    );

    const recipeInfo = await data.json();
    console.log(recipeInfo);
    setDetails(recipeInfo);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <Button
          className={activeTab === "nutrition" ? "active" : ""}
          onClick={() => setActiveTab("nutrition")}
        >
          Nutrition
        </Button>
        {/* Rendering the ingredients required to cook the recipe  */}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li className="ing" key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}
        {/* Rendering the summary of the recipe and the instructions to cook it  */}
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {/* Rendering the nutritional values of the recipe  */}
        {activeTab === "nutrition" && (
          <table>
            <tr>
              <th>Nutrient</th>
              <th>Amount</th>
              <th>Unit</th>
            </tr>
            {details.nutrition.nutrients.map((nutrient) => (
              <tr>
                <td>{nutrient.name}</td>
                <td>{nutrient.amount}</td>
                <td>{nutrient.unit}</td>
              </tr>
            ))}
          </table>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #313131;
  }

  .active {
    background: #494949;
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.1rem;
  }

  .ing {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(odd) {
    background-color: #dddddd;
  }
`;

const Button = styled.button`
  padding: 1rem 1rem;
  color: #494949;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
