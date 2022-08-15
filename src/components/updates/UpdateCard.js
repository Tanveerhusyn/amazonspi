import React from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import {CgArrowsExpandLeft} from 'react-icons/cg'
import './updatecard.css'
function UpdateCard() {
  return (
    <div className='card-container'>
       <div className='card-body'>
       <div className='card-header'>
            <strong className='strong-1'>כותרת ראשית</strong>
            <p className='date-para'>16-04-2022<AiFillClockCircle style={{width:'16px',height:'16px',marginLeft:'2px',color:'#595A5B'}}/></p>
        </div>
        <p className='main-para'>
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לורם איפסום דולור סיט אמט, מוסן מנת.
        </p>
       
       </div>
       <button id='btn-1'>הרחיב תצוגה <CgArrowsExpandLeft style={{marginLeft:'6px'}}/></button>
    </div>
  )
}

export default UpdateCard