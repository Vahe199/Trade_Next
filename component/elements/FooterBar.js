import {styled} from "@linaria/react";
import {media} from "../../styles/utils";
import Container from "./Container";

export const FooterBar = styled(Container)`
  display: flex;
  flex-direction: row;
  z-index: 99;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: ${({background})=>background || "transparent"};
  color: ${({color})=>color || "#fff"};
  ${media.medium} {
    flex-direction: row;
  }
`;
