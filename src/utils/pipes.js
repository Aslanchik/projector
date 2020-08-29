import React from "react";

export const firstCharUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export default {
  firstCharUppercase,
};
