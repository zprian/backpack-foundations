import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3 4.5v3a1.5 1.5 0 11-3 0v-3A4.5 4.5 0 014.5 0h3a1.5 1.5 0 110 3h-3A1.5 1.5 0 003 4.5zM16.5 0h3A4.5 4.5 0 0124 4.5v3a1.5 1.5 0 01-3 0v-3A1.5 1.5 0 0019.5 3h-3a1.5 1.5 0 010-3zM3 16.5v3A1.5 1.5 0 004.5 21h3a1.5 1.5 0 010 3h-3A4.5 4.5 0 010 19.5v-3a1.5 1.5 0 013 0zm21 0v3a4.5 4.5 0 01-4.5 4.5h-3a1.5 1.5 0 010-3h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 013 0zm-7.5-6a4.502 4.502 0 01-3 4.244V18a1.5 1.5 0 01-3 0v-3.256A4.502 4.502 0 0112 6a4.5 4.5 0 014.5 4.5z" /></svg>);