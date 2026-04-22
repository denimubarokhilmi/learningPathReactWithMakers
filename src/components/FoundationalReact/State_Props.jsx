import { useState } from "react";

// managing state

function StateAndProps() {
  const [count, setCount] = useState(0);

  const data = {
    firtsName: "Deni",
    lastName: "Mubarok Hilmi",
  };
  return (
    <div className="State-Props">
      <h5>State management with UseSate :</h5>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click button </button>
      <h5>Below is the use of Props :</h5>
      <AddingProps {...data}></AddingProps>
    </div>
  );
}

// using props
function AddingProps(props) {
  const { firtsName, lastName } = props;
  return (
    <>
      <p>
        Hello {firtsName} {lastName}, Welcome to learning React
      </p>
    </>
  );
}

export default StateAndProps;
