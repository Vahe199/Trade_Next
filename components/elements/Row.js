import {styled} from "@linaria/react";
import {media} from "../../styles/utils";

export const Row = styled.div`
  ${media.large} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
