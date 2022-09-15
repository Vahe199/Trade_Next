import {styled} from "@linaria/react";
import {media} from "../../styles/utils";

export const LeftColumn = styled.div`
  text-align: center;
  flex: 3;
  ${media.large} {
    text-align: left;
  }
`;
