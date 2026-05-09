import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Info:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h4>Example Error Boundary :</h4>
          <h1>Terjadi kesalahan 😢</h1>;
        </>
      );
    }

    return (
      <>
        <h4>Example Error Boundary :</h4>
        {this.props.children}
      </>
    );
  }
}

export function ExampleErrorComponent() {
  throw new Error("error component");
}
