import {styled} from "@linaria/react";

export const Button = styled.button`
  display: inline-block;
  appearance: none;
  background: none;
  border: 0;
  padding: 16px 24px;
  color: inherit;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: inset 0 0 0 2px currentColor, 1px 1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  cursor: ${({cursor})=>cursor};
  transition: color 200ms, background 200ms;
  &:hover {
    color: #d2356d;
    box-shadow: inset 0 0 0 2px transparent, 1px 1px 1px rgba(0, 0, 0, 0.08);
    background: linear-gradient(
      to right,
      hsl(180, 100%, 70%),
      hsl(64, 57%, 82%),
      hsl(0, 100%, 84%)
    );
  }
`;
