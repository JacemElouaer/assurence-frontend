import React from 'react'

function Base_page(props) {
  return (

<section className="w-full md-900 h-auto  justify-center place-items-center ">
    {props.children}
</section>
  )
}

export default Base_page