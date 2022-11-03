import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10.333 1h3.334C14.403 1 15 1.597 15 2.333V3.5a.5.5 0 01-1 0V3h-4v.5a.5.5 0 01-1 0V2.333C9 1.597 9.597 1 10.333 1zM6 7a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2v1a1 1 0 11-2 0v-1h-4v1a1 1 0 11-2 0v-1a2 2 0 01-2-2V7z" /></svg>);