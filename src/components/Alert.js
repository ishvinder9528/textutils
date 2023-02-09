import React from 'react'

function Alert(props) {
    const Capitalize = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className='my-2' style={{height:'50px'}}>
      { props.alert  && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
        <strong>{Capitalize(props.alert.type)} :</strong> {props.alert.msg} </div> }
    </div> 
  )
}

export default Alert

// i am just a comment...