export default function WithLogger(WrapComponent) {
  return function EnhancedComponent(props) {
    // example logic
    console.log(`Props : ${props}`);
    return (
      <>
        <WrapComponent {...props}></WrapComponent>
      </>
    );
  };
}
