import ConditionalRendering from "./ConditionalRendering";
import List from "./RenderingList";
import ButtonScooped from "./CSSinJS";
import ExampleFormik from "./Formik";
function TempIntermediate() {
  return (
    <div
      className="intermediate-react"
      style={{
        marginTop: "60px",
      }}
    >
      <h2>2.Intermediate React :</h2>
      <h4>Conditional Rendering :</h4>
      <ConditionalRendering></ConditionalRendering>
      <h4>Rendering List :</h4>
      <List></List>
      <ButtonScooped></ButtonScooped>
      <ExampleFormik></ExampleFormik>
    </div>
  );
}

export default TempIntermediate;
