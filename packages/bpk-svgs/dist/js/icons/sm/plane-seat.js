import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M8.657.045A.869.869 0 007.5.829v2.843a.853.853 0 00.875.828h.375a1.706 1.706 0 001.75-1.657V1.23a.833.833 0 00-.593-.784zM6 7.5a1.5 1.5 0 10-3 0v6a6 6 0 006 6h3.75a.75.75 0 110 1.5H7.5a1.5 1.5 0 000 3h5.25a3.75 3.75 0 100-7.5H9a3 3 0 01-3-3z" /><path d="M14.25 9H10.5v3h2.25A8.25 8.25 0 0121 20.25V21a1.5 1.5 0 11-3 0v-.75A5.25 5.25 0 0012.75 15h-3a2.25 2.25 0 01-2.25-2.25v-4.8A1.95 1.95 0 019.45 6h4.8a1.5 1.5 0 010 3z" /></svg>);