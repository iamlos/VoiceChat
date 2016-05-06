function login(form) {
  window.phone = PHONE({
      number        : form.username.value || "Anonymous", // listen on username line else Anonymous
      publish_key   : 'pub-c-561a7378-fa06-4c50-a331-5c0056d0163c',
      subscribe_key : 'sub-c-17b7db8a-3915-11e4-9868-02ee2ddab7fe'
  }); 
  phone.ready(function(){ 
    form.username.style.background="#55ff5b";
    $('#vid-box').append(phone.video);
  });
  phone.receive(function(session){
      session.connected(function(session) { $('#call-box').append(session.video); });
      session.ended(function(session) { $('#call-box').innerHTML=''; });
  });
  return false;   // So the form does not submit.
}

function makeCall(form){
  if(!window.phone){
    alert("Login First!");
  }else{
    phone.dial(form.number.value);
    return false;
  }
}
