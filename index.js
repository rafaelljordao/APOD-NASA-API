$('#submit').click(function(event) {
    event.preventDefault();
    
    var dateInput = $('#date-input').val()
    
    // if (dateInput > '1995-06-16'){
        $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=cPWsDjJcEhwvKx1FrQBPeIiRf2HnlxIQClACvZBf&date=${dateInput}`,
        success: function(result){
            console.log(result)
              
              var validador = `${result.media_type}`
  
              if (validador == "image"){
                  var img = result.url
                  $('#pic').html(`<img src="${result.url}" id="img" width="540" height="360">`)
              } else if (validador == "video") {
                  var iframe = result.url
                  $('#vid').html(`<iframe id="iframe" src="${iframe}" width="270" height="180" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)    
              }
  
              $('#title').html(`Título: ${result.title}`)
              $('#date').html(`Data: ${result.date}`)
              $('#media-type').html(`Arquivo: ${result.media_type}`)
              $('#copyright').html(`Crédito e Copyright: ${result.copyright}`)
               
          },  
      })
    // } else {
    //     alert("Infelizmente não temos imagens anteriores ao dia 16/06/1995")
    // }

  
})

// testar com if e else pra data mínima, pq tá dando erro, ou aparece alert pra tudo ou não aparece