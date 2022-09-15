import {styled} from "@linaria/react";
import {media} from "../../styles/utils";

export const CodeSample = styled.img`
  width: 100%;
  height: auto;
  margin: 64px 24px;
  padding: 20px;
  border-radius: 5px;
  max-width: calc(100% - 48px);
  box-shadow: 3px 3px 32px rgba(0, 0, 0, 0.32);
  background-color: #272727;
  ${media.large} {
    margin: 24px;
  }
`;
