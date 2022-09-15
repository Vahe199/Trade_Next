import constants from "./constants";
import {css} from "@linaria/core";

export const globals = css`
  :global(html) {
    html {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: ${constants.fontFamily};
      font-size: 20px;
      line-height: 1.42857;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;
