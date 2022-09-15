import {styled} from "@linaria/react";
import {media} from "../../styles/utils";

export const LogoImage = styled.img`
  height: 64px;
  margin: 16px auto;
  display: block;
  ${media.medium} {
    height: 48px;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }
`;
