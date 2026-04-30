import TempContext from "./Context/TempContext";
import ExampleUseCallback from "./UseCallback&UseReducer/UseCallbackReact";
import ExampleReducer from "./UseCallback&UseReducer/UseReducerReact";
import {
  ErrorBoundary,
  ExampleErrorComponent,
} from "./ErrorBoundary&Lazy/ErrorBoundary";
import LazyLoading from "./ErrorBoundary&Lazy/Lazy";

export default function TempAdvanceReact() {
  return (
    <>
      <TempContext></TempContext>
      <ExampleUseCallback></ExampleUseCallback>
      <ExampleReducer></ExampleReducer>
      <ErrorBoundary>
        <ExampleErrorComponent></ExampleErrorComponent>
      </ErrorBoundary>
      <LazyLoading></LazyLoading>
    </>
  );
}
