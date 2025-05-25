import React from 'react'
import Link from 'next/link'

function page({params}) {
  return (
    <>
    <div>Vegi item  {params.vegid}</div>
    <div>
    <Link href="/products/vegis">Back to Vegis</Link>

    </div>
    </>

  )
}

export default page