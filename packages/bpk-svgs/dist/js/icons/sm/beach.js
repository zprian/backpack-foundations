import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5c-4.595 0-9.49 4.2-10.458 8.416A1.796 1.796 0 003.45 12h.4a.856.856 0 00.833-.651C5.388 8.474 7.533 2.959 12 1.5zm0 0c4.468 1.46 6.612 6.974 7.317 9.849a.856.856 0 00.833.651h.4a1.796 1.796 0 001.908-2.084C21.49 5.7 16.595 1.5 12 1.5z" /><path d="M12 1.5c-1.445 1.416-4.807 6.26-5.258 9.454A.94.94 0 007.714 12h8.572a.94.94 0 00.972-1.046C16.808 7.761 13.445 2.916 12 1.5zm0 12a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 003 0v-6a1.5 1.5 0 00-1.5-1.5z" /></svg>);