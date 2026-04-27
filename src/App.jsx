import TempFoundational from "./components/FoundationalReact/TempFoundational";
import TempIntermediate from "./components/IntermediateReact/TempIntermediate";
import TempAdvanceReact from "./components/AdvanceReact/TempAdvanceReact";
function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        learning React with makers
      </h1>
      <TempFoundational></TempFoundational>
      <TempIntermediate></TempIntermediate>
      <TempAdvanceReact></TempAdvanceReact>
    </>
  );
}

export default App;
