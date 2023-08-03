import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><g clipPath="url(#a)"><path d="M3.75 2.248V12H3a2.25 2.25 0 00-2.25 2.25v6A2.25 2.25 0 003 22.5v.375a1.125 1.125 0 002.25 0V22.5h4.5v.375a1.125 1.125 0 002.25 0V22.5a2.25 2.25 0 002.25-2.25v-6A2.25 2.25 0 0012 12h-.75V2.25A2.25 2.25 0 009 0H6a2.25 2.25 0 00-2.25 2.248zm5.625.002c.207 0 .375.168.375.375V12h-4.5V2.625c0-.207.168-.375.375-.375h3.75zM15.75 13.5a3 3 0 00-2.626-2.977c-.205-.025-.374-.19-.374-.398V2.248A2.25 2.25 0 0115 0h3a2.25 2.25 0 012.25 2.25V6H21a2.25 2.25 0 012.25 2.25v12A2.25 2.25 0 0121 22.5v.375a1.125 1.125 0 01-2.25 0V22.5h-2.625a.375.375 0 01-.375-.375V13.5zm2.625-11.25h-3.75a.375.375 0 00-.375.375V6h4.5V2.625a.375.375 0 00-.375-.375z" /></g></svg>);