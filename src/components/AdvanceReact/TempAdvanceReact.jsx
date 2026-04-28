import TempContext from "./Context/TempContext";
import ExampleUseCallback from "./UseCallback&UseReducer/UseCallbackReact";
import ExampleReducer from "./UseCallback&UseReducer/UseReducerReact";
export default function TempAdvanceReact() {
  return (
    <>
      <TempContext></TempContext>
      <ExampleUseCallback></ExampleUseCallback>
      <ExampleReducer></ExampleReducer>
    </>
  );
}
