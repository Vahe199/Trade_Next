import {styled} from "@linaria/react";
import {media} from "../../styles/utils";
import Container from "./Container";

export const NavBar = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${media.medium} {
    flex-direction: row;
  }
`;
