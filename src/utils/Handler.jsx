import React from 'react'

function Handler(e ,set) {

    const {name ,value} = e.target ;
    set(prev => ({
        ...prev ,[name] : value
    }))
  
}

export default Handler