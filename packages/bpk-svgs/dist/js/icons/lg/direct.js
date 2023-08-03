import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M15.296 15.294a1 1 0 001.415 1.414l4.997-5.004a1 1 0 000-1.413L16.71 5.293a1 1 0 00-1.415 1.414L18.59 10H10a8 8 0 00-7.996 7.75L2 18a1 1 0 002 0 6 6 0 015.775-5.996L10 12h8.586z" /></svg>);