import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19.616 3.047a5.995 5.995 0 00-2.536 1.547l-8.188 8.373a3.384 3.384 0 00-.403.498l-1.287 1.186a.903.903 0 01-.594.24l-2.58.05a.913.913 0 00-.976.616.943.943 0 00.473 1.155l2.56 1.012a.91.91 0 01.492.468l1.038 2.27a.905.905 0 001.16.474.934.934 0 00.575-.987l-.114-2.36a.918.918 0 01.282-.709l1.173-1.12a3.358 3.358 0 00.54-.448l1.27-1.298.609.621 2.886 6.062a.452.452 0 00.732.123l.504-.516a1.883 1.883 0 00.487-1.728l-1.582-7.085a1.838 1.838 0 01.478-1.685l2.887-2.952a6.154 6.154 0 001.41-2.28l.022-.059a1.112 1.112 0 00-1.318-1.469z" /><path d="M12.03 8.22a.458.458 0 00-.257-.765L5.517 6.068a1.792 1.792 0 00-1.69.498l-.52.53a.46.46 0 00.12.73L9.073 10.9c.358.18.56-.104.833-.399z" /></svg>);