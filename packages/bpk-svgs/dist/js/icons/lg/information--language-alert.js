import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.247 3.916l-2.216-.758a21.686 21.686 0 00-14.063 0l-2.215.758A1.14 1.14 0 001.993 5v10.597a3.38 3.38 0 003.337 3.425h2.49a2 2 0 011.433.605l2.03 2.085a1 1 0 001.414.019l.02-.019 2.03-2.085a2 2 0 011.432-.605h2.491a3.38 3.38 0 003.336-3.425V5a1.14 1.14 0 00-.76-1.083zm-9.252 12.071h-.063a.999.999 0 11.063 0zm.994-3.883a1 1 0 01-1.987 0l-.007-.117-.002-5L11 6.87a1 1 0 011.987 0l.007.116.002 5.001z" /></svg>);