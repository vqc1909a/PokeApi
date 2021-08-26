import "./index.css"
function PageNotFound(){

  return (
    <section className="pageNotFound">
      <div className="circles">
        <p>404<br/><small>PAGE NOT FOUND</small></p>
        <span className={`circle big`}></span>
        <span className={`circle med`}></span>
        <span className={`circle small`}></span>
      </div>
    </section>
  )
}
export default PageNotFound