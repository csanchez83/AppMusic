$(function() 
  {
  
      document.addEventListener("deviceready", function()
                                {
                                    alert("listo");
                                    
                                    $(function()
                                        {
                                            $.ajax(
                                            {
                                                type:"POST",
                                                url:"http://carlos.igitsoft.com/apps/ringtonesPlatform/servApp.php",                    
                                                data: { pet: "0" },
                                                dataType: "json"
                                            })

                                            .done(function (msg)
                                                {
                                                    //msg = JSON.parse(msg);
                                                    for (i=0; i<msg.length; i++)
                                                    {
                                                        alert("Data Saved: " + msg);
                                                        $('#canciones').append('<li><audio><source src="' + msg[i].ruta +
                                                                               '" type= "audio/mpeg"></audio>' + msg[i].nombre +
                                                                               '</li>');
                                                    }
                                                    
                                                    $('#canciones li').click(function() 
                                                                             {
                                                                                 var audio = $(this).find('audio');
                                                                                 audio.hide();
                                                                                 audio[0].play();
                                                                             });
                                                });
                                            
                                            //taps
                                            
                                        });
                                }, false);
              }
          );
      
    
            