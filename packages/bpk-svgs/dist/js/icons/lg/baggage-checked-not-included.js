import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M9 2.498A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5V5h1c.432 0 .832.137 1.16.37l4.097-4.074a1 1 0 011.415 0l.035.035a1 1 0 010 1.415L2.743 22.71a1 1 0 01-1.414 0l-.036-.036a1 1 0 010-1.414L6 16.53V7a2 2 0 012-2h1V2.498zM8.073 20.38a.25.25 0 00-.073.177V22a1 1 0 102 0v-1h4v1a1 1 0 102 0v-1a2 2 0 002-2v-7.943a.25.25 0 00-.427-.177l-8.535 8.535-.965.965zM10.5 2.5a.5.5 0 00-.5.5v2h4V3a.5.5 0 00-.5-.5h-3z" /></svg>);