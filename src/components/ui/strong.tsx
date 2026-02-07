
export default ({children} : {children : React.ReactNode}) => {
  
  const strong = {
    fontWeight : "bold",
    // color: "#715656ff",
    // color: "#6b4f4fff",
      color: "#af8888",
  }
    return (
    <span style={strong}>{children}</span>
  )

}


