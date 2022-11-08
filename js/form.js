
var form = document.getElementById('contact_me');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("contact_me")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
	  alert("Thank you for Reaching out to me!!!");
      document.getElementById('name').value="";
	  document.getElementById('email').value="";
	  document.getElementById('message').value="";
    });
  });