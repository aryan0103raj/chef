import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiCook } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiCook />
          <Logo to={"/"}>Chef</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
