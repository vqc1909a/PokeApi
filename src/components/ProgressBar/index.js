import "./index.css"
function ProgressBar({bg, width}){
 return (
   <div className="progress">
     <span style={{backgroundColor: bg , width: `${width}px`}}>{width}</span>
   </div>
 )
}
export default ProgressBar