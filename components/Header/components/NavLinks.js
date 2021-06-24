import styled from "styled-components";

export default function NavLinks({ open }) {
  return (
    <StyledUl open={open}>
      <li>
        <a href="#">Our Mission</a>
      </li>
      <li>
        <a href="#">Our Philosophy </a>
      </li>
      <li>
        <a href="#">Our Portfolio</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    height: 80%;
    width: 100%;
    z-index: 2;
    padding-top: 6rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }

  /* li styles */
  li {
    font-size: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: #23242a;
  }
`;
