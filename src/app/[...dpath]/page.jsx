import React from 'react'

function page({params}) {
  console.log(params)
  return (
    <>
    <div>Catch ALL routes</div>
   <ul>
{params.dpath.map((item, index) => {
return(
  <li>{item}</li>
) 
})}

   </ul>
    </>
  )
}

export default page