$(document).ready(function() {
  $('#search-box').hide();
  $('#search-icon').click(function() {
    $('#search-icon').hide();
    $('#search-box').show();
    
    $(document).keypress(function(e) {
		if(e.which === 13)
      e.preventDefault();
			searchWikipedia();
	  });
  })
});

  function searchWikipedia() {
    var query = $('#search-box').val();
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&meta=&titles=&srsearch="+query+"&sroffset=0&callback=?";
    
    $.getJSON(url, function(data){ 
	  $.each(data.query, function(i, item){
 
  var template = document.getElementById('template').innerHTML;
      
  var compiled_template = Handlebars.compile(template);

  //Render the data into the template
  var rendered = compiled_template(item);
 
  //Overwrite the contents of #target with the renderer HTML
  $('#results').html(rendered);
		});
	});
}

  
