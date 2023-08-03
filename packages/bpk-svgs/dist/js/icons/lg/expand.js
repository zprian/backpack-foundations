import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7.667 14.921a1 1 0 011.439 1.39l-.025.024-2.667 2.667h1.585a1 1 0 01.993.884l.006.116a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 112 0v1.587zm8.334 6.081a1 1 0 010-2h1.583l-2.665-2.667a1 1 0 01-.082-1.32l.083-.094a1 1 0 011.414 0L19 17.591v-1.589a1 1 0 01.883-.993l.116-.007a1 1 0 011 1v4a1 1 0 01-1 1h-3.998zM8 2.998a1 1 0 010 2H6.416l2.665 2.668a1 1 0 01.082 1.32l-.083.094a1 1 0 01-1.414 0L5 6.41v1.588a1 1 0 01-.883.993L4 8.998a1 1 0 01-1-1v-4a1 1 0 011-1h4zm12 0a1 1 0 011 1v4a1 1 0 11-2 0V6.41l-2.666 2.67a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414l2.664-2.668H16a1 1 0 01-.993-.883l-.005-.117a1 1 0 011-1z" /></svg>);