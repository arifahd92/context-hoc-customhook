import React from 'react'
import useCounter from './useCounter'
function CompB() {
  let  [val, increment]=useCounter()
  return (
    <div onClick={increment}>CompB value of B ={val}</div>
  )
}

export default CompB