import styled from "styled-components";

export default function ButtonScooped() {
  const Button = styled.button`
    background-color: ${(props) => (props.primary ? "green" : "blue")};
    padding: "20px 20px";
    color: "black";
  `;

  return (
    <div className="example-css-in-js">
      <h4>CSS in JS: </h4>
      <Button primary={false}>Button click</Button>
    </div>
  );
}
