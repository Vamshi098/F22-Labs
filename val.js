
 function checkForm(form)

  {

  if(form.email.value==""){
    alert("email should not be empty!");
    form.email.focus();
    return false;
 }

    if(form.pwd.value != "" && form.pwd.value == form.pwd.value) {
      if(form.pwd.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        form.pwd.focus();
        return false;
      }
      if(form.pwd.value == form.email.value) {
        alert("Error: Password must be different from email!");
        form.pwd.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.pwd.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.pwd.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.pwd.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.pwd.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.pwd.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.pwd.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd.focus();
      return false;
    }

   
    return true;

  }
