// eslint-disable-next-line no-unused-vars
export default function WithLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    // example logic
    console.log(`Props : ${props}`);
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
}
