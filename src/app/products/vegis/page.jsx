import React from 'react'
import Link from 'next/link'

function page() {
  const vegis = [
    {
      id: 1,
      veginame: "Broccoli",
    },

    {
      id: 2,
      veginame: "Spinach",
    },

    {
      id: 3,
      veginame: "Pumpkin",
    },

    {
      id: 4,
      veginame: "Beans",
    },

    {
      id: 5,
      veginame: "Potatoes",
    },

    {
      id: 6,
      veginame: "Carrot",
    },

  ]

  return (
    <>
      <div>Vegis Page</div>


      <ul>
        {vegis.map((vegi) => (
            <li ><Link href={`/products/vegis/${vegi.veginame}`}>{vegi.veginame}</Link></li>
        ))}

      </ul>
    </>

  )
}

export default page