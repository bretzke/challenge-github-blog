import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logoGithubBlog from "../../assets/logo-github-blog.svg";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoGithubBlog}
          alt="Logo Coffee Delivery - Um copo de café com o título"
        />
      </NavLink>
    </HeaderContainer>
  );
}
