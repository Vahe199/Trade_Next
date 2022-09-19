import {styled} from "@linaria/react";
import constants from "../../styles/constants";

export const LinkItem = styled.a`
  display: block;
  font-size: 1.2em;
  font-weight: 700;
  padding: 24px 16px;
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
  transition: 200ms;
  &:hover {
    color: inherit;
  }
  @supports (-webkit-background-clip: text) {
    background-image: ${constants.gradient};
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-background-clip: text;
    &:hover {
      color: transparent;
    }
  }
`;
