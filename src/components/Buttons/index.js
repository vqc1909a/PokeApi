import {useContext} from 'react'
import PokemonContext from 'context/PokemonContext'
import "./index.css"

function Buttons(){
 const {page, totalPages, changePage} = useContext(PokemonContext)
 return (
   <div className="button">
   <div className="button__grid">
     {(page >= 1 && page <= 3) 
       && 
       <>
         <button type="button" data-number={page - 1} onClick={changePage} className={`button__item ${page === 1 && 'button__item--disabled'}`}><p>&laquo;</p></button>  
         {[...Array(page + 1).keys()].map((number) => {
           return <button key={number} type="button" data-number={number + 1} onClick={changePage} className={`button__item ${page === (number + 1) && 'button__item--active' }`}>{number + 1}</button>
         })}
         <button type="button" className={`button__item button__item--disabled`}>...</button>
         <button type="button" data-number={totalPages} onClick={changePage} className={`button__item ${page === (totalPages) && 'button__item--active' }`}>{totalPages}</button>
         <button type="button" data-number={page + 1} onClick={changePage} className={`button__item ${page === totalPages && 'button__item--disabled'}`}>&raquo;</button>
       </>
      }
      {(page >= 4 && page <= totalPages - 3) 
       && 
       <>
         <button type="button" data-number={page - 1} onClick={changePage} className={`button__item ${page === 1 && 'button__item--disabled'}`}>&laquo;</button>
         <button type="button" data-number={1} onClick={changePage} className={`button__item ${page === (1) && 'button__item--active' }`}>{1}</button>
         <button type="button" className={`button__item button__item--disabled`}>...</button>
         {[...Array(...[(page-2), (page-1), (page)]).values()].map((number) => {
           return <button key={number} type="button" data-number={number + 1} onClick={changePage} className={`button__item ${page === (number + 1) && 'button__item--active' }`}>{number + 1}</button>
         })}
         <button type="button" className={`button__item button__item--disabled`}>...</button>
         <button type="button" data-number={totalPages} onClick={changePage} className={`button__item ${page === (totalPages) && 'button__item--active' }`}>{totalPages}</button>
         <button type="button" data-number={page + 1} onClick={changePage} className={`button__item ${page === totalPages && 'button__item--disabled'}`}>&raquo;</button>
       </>
      }
     {(page >= (totalPages - 2) && page <= totalPages) 
       && 
       <>
         <button type="button" data-number={page - 1} onClick={changePage} className={`button__item ${page === 1 && 'button__item--disabled'}`}>&laquo;</button>
         <button type="button" data-number={1} onClick={changePage} className={`button__item ${page === (1) && 'button__item--active' }`}>{1}</button>
         <button type="button" className={`button__item button__item--disabled`}>...</button>
         {[...Array((totalPages - page) + 2).keys()].reverse().map((number) => {
           return <button key={number} type="button" data-number={totalPages - number} onClick={changePage} className={`button__item ${page === (totalPages - number) && 'button__item--active' }`}>{totalPages - number}</button>
         })}
         <button type="button" data-number={page + 1} onClick={changePage} className={`button__item ${page === totalPages && 'button__item--disabled'}`}>&raquo;</button>
       </>
      }


     {/* <button type="button" data-number={page - 1} onClick={changePage} className={`button__item ${page === 1 && 'button__item--disabled'}`}>&laquo;</button>
     {[...Array(totalPages).keys()].map((number) => {
       return <button key={number} type="button" data-number={number + 1} onClick={changePage} className={`button__item ${page === (number + 1) && 'button__item--active' }`}>{number + 1}</button>
     })}
     <button type="button" data-number={page + 1} onClick={changePage} className={`button__item ${page === totalPages && 'button__item--disabled'}`}>&raquo;</button> */}
   </div>
  </div>
 )
}
export default Buttons