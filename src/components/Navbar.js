import React from 'react'
import { Link} from 'react-router-dom'

export default function Navbar(props) {
  
  
  return (
        
<nav className={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to='/' >{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <div className="btn btn-primary round mx-1" onClick={()=>{props.toggleMode('primary')}} style={{width:'30px' ,height:'30px'}}></div>
      <div className="btn btn-danger round mx-1" onClick={()=>{props.toggleMode('danger')}} style={{width:'30px' ,height:'30px'}}></div>
      <div className="btn btn-success round mx-1" onClick={()=>{props.toggleMode('success')}} style={{width:'30px' ,height:'30px'}}></div>
      <div className="btn btn-warning round mx-1" onClick={()=>{props.toggleMode('warning')}} style={{width:'30px' ,height:'30px'}}></div>
      <div className="btn btn-light round mx-1 border" onClick={()=>{props.toggleMode('light')}} style={{width:'30px' ,height:'30px'}}></div>
      <div className="btn btn-dark round mx-1" onClick={()=>{props.toggleMode('dark')}} style={{width:'30px' ,height:'30px'}}></div> */}
      <div className="form-check form-switch ">
        <input className="form-check-input " type="checkbox" role="switch" onClick={props.toggleMode} id="CheckBox"/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} `} htmlFor="CheckBox">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
