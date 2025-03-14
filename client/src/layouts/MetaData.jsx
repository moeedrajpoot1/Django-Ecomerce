import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>Daraz | {title || "Default Title"}</title> 
    </Helmet>
  );
};

export default MetaData;

