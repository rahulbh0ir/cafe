
export default ({children} : {children : React.ReactNode}) => {
  
  const strong = {
    fontWeight : "bold",
    // color: "#715656ff",
    color: "#6b4f4fff",
  }
    return (
    <span style={strong}>{children}</span>
  )

}


