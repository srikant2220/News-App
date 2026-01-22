import React from "react";

const withLoader = (WrappedComponent) => {
  return function WithLoaderComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2 style={{ textAlign: "center" }}>Loading news...</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
