$(document).ready(function(){

$(window).load(function() {
  $.ajax({
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
  type: 'POST',
  dataType: 'json',
  success: function(data) {
      $('#quote').text('“' + data.quote + '”');
      $('#author').text("- " + data.author);
      $('#twitter').click(function(){
        window.open('http://twitter.com/home/?status=' + data.quote + data.author);
      });
    },
  error: function(err) { alert(err); },
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Key", "0aWYl7pwzLmshJyBShuaDVn0YPvAp1uKEDHjsn35sJW506dElB");
  }
  });
});

$('#getQuote').click(function() {
  $.ajax({
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
  type: 'POST',
  dataType: 'json',
  success: function(data) {
    $('#quote').text('“' + data.quote + '”');
    $('#author').text("- " + data.author);
    $('#twitter').click(function(){
      window.open('http://twitter.com/home/?status=' + data.quote  + data.author);
    });
    },
  error: function(err) { alert(err); },
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Key", "0aWYl7pwzLmshJyBShuaDVn0YPvAp1uKEDHjsn35sJW506dElB");
  }
  });
});
});
