import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10.5 4A2.5 2.5 0 008 6.5a1 1 0 01-2 0 4.5 4.5 0 114.5 4.5H3a1 1 0 010-2h7.5a2.5 2.5 0 000-5zm7.875 8a1.634 1.634 0 00-1.498.917 1 1 0 11-1.84-.785l.023-.049A3.63 3.63 0 0118.375 10a3.502 3.502 0 110 7h-1.222a3.383 3.383 0 01.347 1.5 3.565 3.565 0 01-3.625 3.5 3.634 3.634 0 01-3.316-2.083 1 1 0 011.818-.834 1.634 1.634 0 001.498.917 1.505 1.505 0 100-3H3a1 1 0 010-2h15.375a1.505 1.505 0 100-3z" /></svg>);