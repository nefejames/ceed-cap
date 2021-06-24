import { useState } from "react";
import styled from "styled-components";
import { Burger, NavLinks } from "./index";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <Burger open={open} setOpen={setOpen} />
      <NavLinks open={open} />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
