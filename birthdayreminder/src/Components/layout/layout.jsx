import React from "react";

const Layout =(props)=> {
    return (      
      <>
       
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">{props.children}</div>
          <div className="col-md-1"></div>
        </div>
      </>
    );
  }


export default Layout;
