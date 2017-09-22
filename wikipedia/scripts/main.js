$(document).ready(function() {

  $('#random_button').click(function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  });

  function validation() {
    $('#validation').text('Please enter a valid search term.');
  }

  function beforeSearch() {
    $('#placement_div').css({ 'height':'0' });
    $('#containing_div').css({ 'min-height':'500px' });
    setTimeout(search, 500);
  }

    $('#search_button').click(function() {
    query = $('#search_input').val();
    if (query == '') {
      validation();
    } else {
      beforeSearch();
    }
  });

  $('#search_input').on('keyup', function(e) {
    query = $('#search_input').val();
    if (e.which == 13 && query == '') {
       validation();
    } else if (e.which == 13 && query != '') {
      beforeSearch();
    }
  });

  var title = [];
  var snippet = [];
  var url = [];

  function search() {
    $('#containing_div').text('');
      $('#validation').text('');
      $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&limit=10&namespace=0&redirects=return&format=json&callback=?', function(data) {
        for (var i = 0; i < 10; i++) {
          title[i] = data[1][i];
          snippet[i] = data[2][i];
          url[i] = data[3][i];
          $('<a href="' + url[i] + '" target="_blank"><div class="articles"><span class="article_title">' + title[i] + '</span><br><span class="snippet">' + snippet[i] + '</span></div></a>').appendTo('#containing_div');

        };
      });
    };

});
