import React, { useState } from 'react'

function useCounter() {
let [val, setval]=useState(0)
function increment(){
    setval(val+1)
}
return [val, increment]
}

export default useCounter