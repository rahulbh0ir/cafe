

interface Property {
  children : React.ReactNode;
  color ?: string 
}


export default ({children, color} : Property) => {

  let fontColor;
  
  if(color === "dark" ) {
    fontColor = "#2f2a26"
  }else {
    fontColor = "#af8888"
  }
  
  const strong = {
    fontWeight : "bold",
    // color: "#715656ff",
    // color: "#6b4f4fff",
      color: fontColor,
  }
    return (
    <span style={strong}>{children}</span>
  )

}


