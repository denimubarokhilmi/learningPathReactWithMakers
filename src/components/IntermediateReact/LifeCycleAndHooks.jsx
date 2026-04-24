import { useEffect, useState } from "react";

// Runs once after the first render.

function OnceAfterRender() {
  useEffect(() => {
    console.log("once render");
  }, []);

  return (
    <div className="once-render">
      <h5>Runs once after the first render, useEffect</h5>
    </div>
  );
}
// runs every render
function EveryRender() {
  useEffect(() => {
    console.log("each rendering component");
  });

  return (
    <div className="every-render">
      <h5>every render by component</h5>
    </div>
  );
}

// Runs whenever a specific dependency changes.

function RenderSpecificDependency() {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("each render with dependency");
  }, [state]);

  return (
    <div className="render-with-dependency">
      <p>State : {state}</p>
      <button onClick={(e) => setState(state + 1)}>change state</button>
    </div>
  );
}

// The returned "cleanup" function runs before the component is destroyed.

function CleanUp() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="clean-up">
      <h5>Clean Up</h5>
    </div>
  );
}
