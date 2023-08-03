import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19 6h-4a4 4 0 00-4-4H7a4 4 0 00-4 4v15a1 1 0 002 0V6a2 2 0 012-2h4a2 2 0 012 2 2.15 2.15 0 00-2 2v13a1 1 0 001 1h1a1 1 0 001-1v-1.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V21a1 1 0 001 1h1a1 1 0 001-1V8a2.15 2.15 0 00-2-2zm-5 11a1 1 0 111-1 1 1 0 01-1 1zm0-3a1 1 0 111-1 1 1 0 01-1 1zm0-3a1 1 0 111-1 1 1 0 01-1 1zm4 6a1 1 0 111-1 1 1 0 01-1 1zm0-3a1 1 0 111-1 1 1 0 01-1 1zm0-3a1 1 0 111-1 1 1 0 01-1 1zM9 7a1 1 0 11-1-1 1 1 0 011 1zm0 3a1 1 0 11-1-1 1 1 0 011 1zm0 6a1 1 0 11-1-1 1 1 0 011 1zm0-3a1 1 0 11-1-1 1 1 0 011 1zm0 6a1 1 0 11-1-1 1 1 0 011 1z" /></svg>);