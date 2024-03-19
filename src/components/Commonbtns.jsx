import React from 'react'

const Commonbtns = (props) => {
  return (
    <div>
      <button onClick={props.fun} className={`${props.paddings} common-btns roboto-flex fw-bold fs-md`}>{props.text}</button>
    </div>
  )
}

export default Commonbtns
