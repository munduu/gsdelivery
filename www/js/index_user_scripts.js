/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 
	//Funções do COOKIE INICIO
	function setCookie(cname,cvalue) {
		localStorage.setItem(cname, cvalue);
	 }
	function getCookie(cname) {
		return localStorage.getItem(cname);
	}
	//funções do COOKIE FINAL
	
	
 function register_event_handlers()
 {    
    
        /* button  #btnnetwork */
    $(document).on("click", "#btnnetwork", function(evt)
    {
         /*global activate_page */
        var cod_empresa = getCookie("cod_empresa");
		var token_id    = getCookie("token_id");
		
		$('.loader').show();
		var url_geral = "http://mundoinova.com.br/igestao/gsentregas/";
		$("#frame_list").attr("src", url_geral+"?token_id="+token_id+"");
		activate_page("#frame");
		$('.loader').hide();
    });
	 
	 function abc() {
        alert("sss");
    };
	 
	 
	 $(document).on("click", "#troca_empresa", function(evt)
    {
         /*global activate_page */
		 alert('oi')
		activate_page("#pg_empresa"); 
    });
    
        /* button  #btnnetwork */
    $(document).on("click", "#btnnetwork", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #btnnetwork */
    $(document).on("click", "#btnnetwork", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  Enviar */
    $(document).on("click", ".uib_w_10", function(evt)
    {
        var cod_empresa = $("#cod_empresa").val();
        var token_id    = $("#token_id").val();
        
		$(".error").empty();$(".error").hide();
		
		if(cod_empresa==''){ 
            $(".error").show(); 
            $(".error").append('<p>CÓDIGO EMPRESA VAZIO!</p>'); 
            $(".error").focus();
        }
        
        evt.preventDefault();
                       
        $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://mundoinova.com.br/igestao/gsentregas/empresa.php?cod_empresa="+cod_empresa+"&token=H424715433852",
        timeout: 10000, 
            success: function(resultado){ 
                $('.loader').show();
				setCookie("cod_empresa",resultado.cod_empresa);
				var url_geral = "http://mundoinova.com.br/igestao/gsentregas/";
				$("#frame_list").attr("src", url_geral+"?token_id="+token_id+"");
				activate_page("#frame");
				$('.loader').hide();
            },
            error: function(resultado) {
				$(".error").show();
                $(".error").append("<p>Dados não encontrados, verifique o Código da Empresa!</p>");
                $(".error").focus();
            }
               
        });
         return false;
    });
    
    }
	
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
