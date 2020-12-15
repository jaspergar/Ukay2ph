import React from 'react'

export default function UserFullDetailsForm() {
    return (
      <form action="" className="userdetailform">
       <h1>this is the formmm</h1>
          <input type="text" className="userdetailform__fullname"/>
          <input type="text" className="userdetailform__pnumber"/>
           <input type="text" className="userdetailform__zip"/>
           <input type="text" className="userdetailform__address"/>
           <input type="text" className="userdetailform__detailAddress"/>

           <button className="userdetailform__button">Confirm</button>
      </form>
    )
}
