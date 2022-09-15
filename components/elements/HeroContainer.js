import {styled} from "@linaria/react";
import {media} from "../../styles/utils";
import linariaLogomark from "../../public/favicon.ico";

export const HeroContainer = styled.main`
  position: relative;
  ${media.large} {
    padding: 64px 0;
    background-image: url(${linariaLogomark});
    background-repeat: no-repeat;
    background-position: bottom right;
  }
`;
