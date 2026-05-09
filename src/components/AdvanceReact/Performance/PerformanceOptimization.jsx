// example of not using Memo
// import { useState } from "react";
// function Greeting(props) {
//   const { name } = props;
//   console.log(`Component Greetings`);
//   return <h3>Hello, Greetings {name}</h3>;
// }

// export default function MyAPPS() {
//   const [state, setState] = useState(0);

//   return (
//     <div
//       style={{
//         marginTop: "70px",
//       }}
//     >
//       <p>State : {state}</p>
//       <button onClick={(e) => setState(state + 1)}>Change State</button>
//       <Greeting name="deni"></Greeting>
//     </div>
//   );
// }

//* example using Memo
import { useState, memo } from "react";

const Greeting = memo((props) => {
  const { name } = props;
  console.log(`Component Greetings`);

  return <h3>Hello, Greetings {name}</h3>;
});

export default function MyAPPS() {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        marginTop: "70px",
      }}
    >
      <p>State : {state}</p>
      <button onClick={() => setState(state + 1)}>Change State</button>
      <Greeting name="deni"></Greeting>
    </div>
  );
}
