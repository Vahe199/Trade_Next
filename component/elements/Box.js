import {styled} from "@linaria/react";

const Box= styled.div`
  width: auto;
 display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  & a{
    color: #fafafa;
    text-decoration: none;
    margin-right: 10px;
    &:hover{
      font-weight: bold;
    }
  }
`;

export default Box;
