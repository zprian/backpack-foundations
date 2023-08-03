import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M13.967 15.506a.97.97 0 01-.75-.133 16.38 16.38 0 01-2.529-2.06 16.286 16.286 0 01-2.06-2.53.97.97 0 01-.134-.75l.811-3.577a1.816 1.816 0 00-.404-1.72L6.694 2.53a2.182 2.182 0 00-2.812.104l-1.117.936a1.909 1.909 0 00-.677 1.769A20.026 20.026 0 007.61 16.39a20.036 20.036 0 0011.05 5.52 1.909 1.909 0 001.772-.678l.933-1.117a2.181 2.181 0 00.106-2.811l-2.207-2.206a1.812 1.812 0 00-1.72-.403z" /></svg>);