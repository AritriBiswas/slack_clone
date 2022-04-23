import React from 'react';


export default function login() {
  return (
    <div>
        
        <form className ="row g-3 needs-validation" novalidate>
  <div className ="col-md-4">
    <label htmlFor="validationCustom01" className ="form-label"></label>
    <input type="text" className ="form-control" id="validationCustom01" placeholder="name@work-email.com" required/>
    <div className ="valid-feedback">
      Looks good!
    </div>
  

  </div>
</form>



    </div>
  )
}
