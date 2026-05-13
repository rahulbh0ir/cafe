import "./footer.css";

export default () => {

  return (
    <div className="footer">
        <h3>Bean There</h3>
        <p>Good coffee. Good food. Good moments.</p>
        <small>© {new Date().getFullYear()} Long Pour</small>
    </div>
  )
}
