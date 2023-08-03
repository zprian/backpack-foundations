import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M9.412 7.483L8.223 6.144a.472.472 0 01.236-.764l1.261-.346a.94.94 0 01.543.013l3.063 1.01a.468.468 0 01-.036.896l-2.935.806a.93.93 0 01-.943-.276z" /><path d="M2.34 8.001a.936.936 0 00-.696-.076l-.295.082a.472.472 0 00-.234.764l2.528 2.845a3.17 3.17 0 003 1.028l4.22-1.16a.46.46 0 01.587.467l-.323 6.565a.462.462 0 00.587.467l1.15-.316a.958.958 0 00.66-.635l2.784-7.626a1.335 1.335 0 01.822-.642l5.235-1.437a.726.726 0 00.514-1.087c-.804-1.082-2.454-1.28-3.946-.87L7.027 9.639a2.81 2.81 0 01-2.075-.23L2.338 8z" /></svg>);