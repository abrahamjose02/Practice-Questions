import React, { useEffect } from "react";

const WithLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} rendered.`);
    }, []); // Logs only on the first render
    return (
      <WrappedComponent {...props} /> // Pass all props down to the wrapped component
    );
  };
};

export default WithLogger;

// withLogger is a function that takes a component (WrappedComponent) as an argument and returns a new functional component.
// useEffect is used to log a message to the console every time the component renders.
// The new component returned by the HOC renders the original WrappedComponent, passing down all the original props ({...props}).
