import React from "react";

// reactstrap components
import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div className="h-screen w-full fixed bg-black top-0 left-0 opacity-90">
      <Spinner />
    </div>
  );
}
