
export default ({children} : {children : React.ReactNode}) => {
  
  const strong = {
    fontWeight : 800,
    color: "grey"
  }
    return (
    <span style={strong}>{children}</span>
  )

}


