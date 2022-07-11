// The component for rendering the option for selecting a certain cusisine
import {
  GiDumplingBao,
  GiFrenchFries,
  GiNoodles,
  GiBroccoli,
} from "react-icons/gi";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { IoPizzaOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  // Each option is linked to provide the recipes of the selected cuisine
  return (
    <CategoryList>
      <StyledLink to={"/category/Italian"}>
        <IoPizzaOutline />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={"/category/Indian"}>
        <GiBroccoli />
        <h4>Indian</h4>
      </StyledLink>
      <StyledLink to={"/category/Chinese"}>
        <GiDumplingBao />
        <h4>Chinese</h4>
      </StyledLink>
      <StyledLink to={"/category/French"}>
        <GiFrenchFries />
        <h4>French</h4>
      </StyledLink>
      <StyledLink to={"/category/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
    </CategoryList>
  );
}

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 4.5rem;
  height: 4.5rem;
  tranform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
