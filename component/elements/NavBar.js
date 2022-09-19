import {styled} from "@linaria/react";
import {media} from "../../styles/utils";
import Container from "./Container";

export const NavBar = styled(Container)`
  display: flex;
  z-index: 99;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  padding: 0;
  background: ${({background})=>background || "transparent"};
  color: ${({color})=>color || "#fff"};
  ${media.medium} {
    flex-direction: row;
  }
`;
