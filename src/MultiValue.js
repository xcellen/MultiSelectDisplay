import React from "react";
import { components } from "react-select";

const MoreSelectedBadge = ({ items }) => {
  const style = {
    marginLeft: "auto",
    background: "#D4EEFA",
    borderRadius: "4px",
    fontFamily: "Open Sans",
    fontSize: "11px",
    padding: "3px",
    order: 99,
  };

  const title = items.join(", ");
  const length = items.length;
  const label = `+ ${length} item${length !== 1 ? "s" : ""} selected`;

  return (
    <div style={style} title={title}>
      {label}
    </div>
  );
};

const MultiValue = ({ index, getValue, ...props }) => {
  const maxToShow = 3;
  const overflow = getValue().slice(maxToShow).map((x) => x.label);

  return index < maxToShow ? (
    <components.MultiValue {...props} />
  ) : index === maxToShow ? (
    <MoreSelectedBadge items={overflow} />
  ) : null;
};

export default MultiValue;
