if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function checkForm(form)
  {
  	if(form.name.value == "") {
      alert("Error: Name cannot be blank!");
      form.name.focus();
      return false;
    }

     re = /^[A-Za-z]+$/;
    if(!re.test(form.name.value)) {
      alert("Error: Name must contain only letters!");
      form.name.focus();
      return false;
    }


    if(form.Email.value == "") {
      alert("Error: e-mail cannot be blank!");
      form.Email.focus();
      return false;
    }

    re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!re.test(form.Email.value)){
        alert('Error: Please input a valid Email Address!!');
        form.Email.focus();
        return false;
    }
    
    if(form.cmsg.value == "") {
      alert("Please Leave a Message");
      form.cmsg.focus();
      return false;
    }
    
    alert("Thanks for the Mail, we would get back to you Swifly..");
    return true;
  }

