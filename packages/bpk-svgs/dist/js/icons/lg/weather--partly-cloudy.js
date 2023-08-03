import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M11.056 4.43a.75.75 0 00-1.42-.468l-.384.926-.035.106a.75.75 0 001.42.468l.384-.926zm-4.794-.555l.045.09.384.927a.75.75 0 01-1.34.666l-.047-.092-.384-.926a.75.75 0 011.34-.665zm-3.71 3.02l-.105-.034a.75.75 0 00-.469 1.42l.926.385.106.035a.75.75 0 00.468-1.421zm1.007 5.703a.75.75 0 00-.666-1.34l-.926.383-.09.045a.75.75 0 00.664 1.34l.926-.383zm14.445 7.9h-10.5a3.998 3.998 0 01-.884-7.896A1.432 1.432 0 007.684 11.6a5.502 5.502 0 0110.38-.76 1.341 1.341 0 00.936.77 4.502 4.502 0 01-.996 8.889z" /><path d="M9.82 7.006a.195.195 0 01-.017.335 6.515 6.515 0 00-3.087 4.005.433.433 0 01-.32.282 5.028 5.028 0 00-1.056.37.198.198 0 01-.252-.062 3.5 3.5 0 014.732-4.93z" /></svg>);