$(document).ready(function(){
  var isshow = localStorage.getItem('isshow');

  if (isshow == null) {
     localStorage.setItem('isshow', 1);
  } else {
    close();
  }

  $('#later').click(function(){
    close();
  });
  $('#alright').click(function(){
    close();
  });
  function close (){
    $('.popup').css('display','none');
  }
});
