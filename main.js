$(document).ready(function () {

  //$('#animated').hide().fadeIn(4000)

  /*$('#submit-form').submit(function(e){
    e.preventDefault();
  });
*/

// form submission
 $('#form').submit((e) => {
  e.preventDefault();
  $.ajax({
      url:'https://thawing-falls-99935.herokuapp.com/send-email',
      type:'post',
      data:$('#form').serialize()
  });

  $('#form').trigger("reset");

  $('#submit-form').prop('disabled', true);

  document.getElementById('submit-form').innerHTML = 'Message sent!';
  document.getElementById('submit-form').style.backgroundColor = 'red';
});

  /*document.querySelectorAll('a[href^="#top"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });*/

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
