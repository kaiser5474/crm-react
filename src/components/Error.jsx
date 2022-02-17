import React from "react";

const Error = ({ mensaje }) => {
  return <div className="text-center text-red-600 font-bold">*{mensaje}</div>;
};

export default Error;
