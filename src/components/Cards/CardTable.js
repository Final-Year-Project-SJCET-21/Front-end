import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "../../components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
  return (
    <>
      
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
