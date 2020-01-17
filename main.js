$(document).ready(function () {

  //$('#animated').hide().fadeIn(4000)

  /*$('#submit-form').submit(function(e){
    e.preventDefault();
  });
*/

 $('#form').submit( (e) => {
  e.preventDefault();
  $.ajax({
      url:'http://localhost:4001/send-email',
      type:'post',
      data:$('#form').serialize()
  }).toggle(400);
})

  document.querySelectorAll('a[href^="#home"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  document.querySelectorAll('a[href^="#projects"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

})
