import styled from "styled-components";
const Button = styled.button`
  background-color: ${(props) => (props.$primary ? "green" : "blue")};
  padding: "20px 20px";
  color: "black";
`;

export default function ButtonScooped() {
  return (
    <div className="example-css-in-js">
      <h4>CSS in JS: </h4>
      <Button $primary={false}>Button click</Button>
    </div>
  );
}
