<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br" id="www-astra-sa-com-br">

<head>

<meta name="adopt-website-id" content="ca525c7c-af98-4fcd-a5f7-d50071948e3e" />
<script src="//tag.goadopt.io/injector.js?website_code=ca525c7c-af98-4fcd-a5f7-d50071948e3e" 
class="adopt-injector"></script><script src="https://www.googleoptimize.com/optimize.js?id=OPT-PKG6T9F"></script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K5DDVNC');</script>
<!-- End Google Tag Manager -->
	
	<title>Calhas | Astra</title>

    <meta name="description" content="Resultado da simula��o, com largura do telhado, comprimento do beiral, altura do telhado e altura da calha at� o ch�o. Confira."/>
    <meta name="keywords" content="calhas, durabilidade, dispensa pintura, n�o enferruja, resiste ao sol, simulador, largura do telhado, comprimento do beiral, altura do telhado e altura da calha at� o ch�o" />

	<meta http-equiv="pragma" content="no-cache" />
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	
	<link href="css/estiloImprimir.css" rel="stylesheet" type="text/css" />
    <link href="css/forms.css" rel="stylesheet" type="text/css" />

	<link rel="shortcut icon" href="favicon.ico" />
	
	<!-- SCROLL -->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/scroll.js"></script>
	
		
	<!-- GA -->
	<script type="text/javascript">
 
  	  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-5783817-1']);
  _gaq.push(['_trackPageview']);
 
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

 
	</script>


    <!-- Facebook Pixel Code (11/09/2019)-->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '722142261464044');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=722142261464044&ev=PageView&noscript=1"/></noscript>
    <!-- End Facebook Pixel Code -->

<meta name="google-site-verification" content="CvXNNSn1Ul0NYhYEBaXYAPRw3cO98aOmwIXZS-lSv7Q" />
</head>


<body onload="window.print()">
	
	<div id="conteiner" style="width:960px;border:1px #fff solid">
	

	<div id="menu">

        <img alt="logotipo Astra" src="images/logotipo-grupo-astra.png" class="logo-astra"/>


	</div> <!-- FIM DO MENU -->
	
	
	<div id="conteudo">
	
		
		<div class="texto">
		
		

		
		<div class="texto-tab">
		
		<table cellpadding="0" cellspacing="0" style="width: 100%">
		<tr valign="top">
		
			<td class="texto-tab-miolo">
			
			         


            <%

            Session.LCID = 1046
			
			largura = request.querystring("largura")
            comprimento = request.querystring("comprimento")
            alturaDoTelhado = request.querystring("alturaDoTelhado")
            alturaDoBeiral = request.querystring("alturaDoBeiral")
            tipo = request.querystring("tipo")
            cidade = request.querystring("cidade")
           	data = Day(Date()) & Chr(47) & Month(Date()) & Chr(47) & Year(Date())

            area= FormatNumber(((largura+alturaDoTelhado/2)*comprimento),0)

            resto = FormatNumber(alturaDoBeiral-((alturaDoBeiral\3)*3),1)

            if tipo=1 then
                  nome = "Barra 3 m e bocal de sa�da 75 mm"
            end if

            if tipo=2 then
                  nome = "Barras 3 m e 1 m e bocal de sa�da 75 mm"
            end if

            if tipo=3 then
                  nome = "Barra 3 m e bocal de sa�da 100 mm"
            end if

            if tipo=4 then
                  nome = "Barras 3 m e 1 m e bocal de sa�da 100 mm"
            end if


            Function RoundUp(n)
                roundUp = Int(n) - CBool(CDbl(n) <> CLng(n))
            End Function

         			
	    	%>


            <h1>Calhas (<%=nome %>)</h1>


            <div style="background-color:#e5e5e5;color:#000;margin-top:30px">
            <div style="padding:0 10px 20px 20px">

           
            <div style="margin:20px 0">
            <img src="images/calhas-altura-largura-comprimento-impressao.png" alt="Calhas: altura, largura, comprimento"/>
            </div>

                

            <div style="margin:20px 20px 0 20px">

            <table style="width:100%;font-size:1.1em">
            <tr>
                <td style="width:40px"><img src="images/calhas-letra-a.png" alt=""/></td>
                <td style="width:60%">Largura do telhado:</td>
                <td style="width:40%;text-align:right"><span style="font-size:1.4em;font-weight:bold"><%= largura %> m</span></td>

            </tr>
            </table>

            <hr style="border: 1px #000 dotted;margin:0;margin:10px 0;opacity:0.3"/>

           

            <table style="width:100%;font-size:1.1em;">
            <tr>
                <td style="width:40px"><img src="images/calhas-letra-b.png" alt=""/></td>
                <td style="width:60%">Comprimento do beiral:</td>
                <td style="width:40%;text-align:right"><span style="font-size:1.4em;font-weight:bold"><%= comprimento %> m</span></td>

            </tr>
            </table>


            <hr style="border: 1px #000 dotted;margin:0;margin:10px 0;opacity:0.3"/>

           

            <table style="width:100%;font-size:1.1em;">
            <tr>
                <td style="width:40px"><img src="images/calhas-letra-c.png" alt=""/></td>
                <td style="width:60%">Altura do telhado:</td>
                <td style="width:40%;text-align:right"><span style="font-size:1.4em;font-weight:bold"><%= alturaDoTelhado %> m</span></td>

            </tr>
            </table>


            <hr style="border: 1px #000 dotted;margin:0;margin:10px 0;opacity:0.3"/>

           

            <table style="width:100%;font-size:1.1em;">
            <tr>
                <td style="width:40px"><img src="images/calhas-letra-d.png" alt=""/></td>
                <td style="width:60%">Altura da calha at� o ch�o:</td>
                <td style="width:40%;text-align:right"><span style="font-size:1.4em;font-weight:bold"><%= alturaDoBeiral %> m</span></td>

            </tr>
            </table>


            </div>

            </div>
            </div>



            <div style="background-color:#e5e5e5;color:#000">

            <div style="padding:10px 10px 5px 20px;margin-bottom:0">

            <div style="margin:0 20px 5px 20px">

            <table style="width:100%;font-size:1.1em;">
            <tr>
                <td style="width:60%">�rea total:</td>
                <td style="width:40%;text-align:right"><span style="font-size:1.2em;font-weight:bold"><%= area %> m<sup>2</sup></span></td>

            </tr>
            </table>

           
            </div>

            </div>

            </div>
			

            
            <%
                
            
            'Rio Branco	
            if cidade = 1 then
                localidade = "Rio Branco/AC"
            end if

            'Sena Madureira
            if cidade=2 then    	
                localidade = "Sena Madureira/AC"
            end if

            'Macei�	
            if cidade=3 then    	
                localidade = "Macei�/AL"	
            end if

            'Juaret�	
            if cidade=4 then
                localidade = "Juaret�/AM"	
            end if

            'Manaus
            if cidade=5 then
                localidade = "Manaus/AM"	
            end if

            'Paratins
            if cidade=6 then
                localidade = "Paratins/AM"	
            end if

            'Uaupes	
            if cidade=7 then
                localidade = "Uaupes/AM"	
            end if

            'Salvador
            if cidade=8 then    	
                localidade = "Salvador/BA"	
            end if

            'Fortaleza	
            if cidade=9 then
                localidade = "Fortaleza/CE"	
            end if

            'Guaramiranga	
            if cidade=10 then
                localidade = "Guaramiranga/CE"	
            end if

            'Quixeramobim	
            if cidade=11 then
                localidade = "Quixeramobim/CE"	
            end if

            'Vit�ria	
            if cidade=12 then
                localidade = "Vit�ria/ES"	
            end if

            'Fernando de Noronha	
            if cidade=13 then
                localidade = "Fernando de Noronha/PE"	
            end if

            'Catal�o	
            if cidade=14 then
                localidade = "Catal�o/GO"	
             end if

            'Formosa	
            if cidade=15 then
                localidade = "Formosa/GO"	
            end if

            'Goi�nia
            if cidade=16 then    	
                localidade = "Goi�nia/GO"	
            end if

            'Barra do Corda	
            if cidade=17 then
                localidade = "Barra do Corda/MA"	
            end if

            'S�o Luiz	
            if cidade=18 then
                localidade = "S�o Luiz/MA"	
            end if

            'Barbacena	
            if cidade=19 then
                localidade = "Barbacena/MG"	
            end if

            'Belo Horizonte	
            if cidade=20 then
                localidade = "Belo Horizonte/MG"	
            end if

            'Bonsucesso	
            if cidade=21 then
                localidade = "Bonsucesso/MG"	
            end if

            'Caxambu	
            if cidade=22 then
                localidade = "Caxambu/MG"	
            end if

            'Ouro Preto	
            if cidade=23 then
                localidade = "Ouro Preto/MG"	
            end if

            'Paracatu	
            if cidade=24 then
                localidade = "Paracatu/MG"	
             end if

            'Passa Quatro	
            if cidade=25 then
                localidade = ">Passa Quatro/MG"	
            end if

            'Sete Lagoas	
            if cidade=26 then
                localidade = "Sete Lagoas/MG"	
            end if

            'Te�filo Otoni	
            if cidade=27 then
                localidade = ">Te�filo Otoni/MG"	
            end if

            'Turia�u
            if cidade=28 then      	
                localidade = "Turia�u/MG"	
            end if

            'Corumb�	
            if cidade=29 then
                localidade = "Corumb�/MS"	
             end if

            'Cuiab�	
            if cidade=30 then
                localidade = "Cuiab�/MT"	
            end if

            'Alto Tapaj�s	
            if cidade=31 then
                localidade = "Alto Tapaj�s/PA"	
            end if

            'Bel�m	
            if cidade=32 then
                localidade = "Bel�m/PA"	
            end if

            'Soure	
            if cidade=33 then
                localidade = "Soure/PA"	
             end if

            'Taperinha	
            if cidade=34 then
                localidade = "Taperinha/PA"	
            end if

            'Jo�o Pessoa	
            if cidade=35 then
                localidade = "Jo�o Pessoa/PB"	
             end if

            'S�o Gon�alo	
            if cidade=36 then
                localidade = "S�o Gon�alo/PB"	
            end if

            'Nazar�	
            if cidade=37 then
                localidade = "Nazar�/PE"	
            end if

            'Olinda	
            if cidade=38 then
                localidade = "Olinda/PE"	
            end if

            'Teresina	
            if cidade=39 then
                localidade = "Teresina/PI"	
            end if

            'Curitiba	
            if cidade=40 then
                localidade = "Curitiba/PR"	
            end if

            'Jacarezinho	
            if cidade=41 then
                localidade = "Jacarezinho/PR"	
            end if

            'Paranagu�	
            if cidade=42 then
                localidade = "Paranagu�/PR"	
            end if

            'Ponta Grossa	
            if cidade=43 then
                localidade = "Ponta Grossa/PR"	
            end if

            'Alto Itatiaia	
            if cidade=44 then
                localidade = "Alto Itatiaia/RJ"	
            end if

            'Alto Teres�polis	
            if cidade=45 then
                localidade = "Alto Teres�polis/RJ"	
            end if

            'Cabo Frio	
            if cidade=46 then
                localidade = ">Cabo Frio/RJ"	
            end if

            'Campos	
            if cidade=47 then
                localidade = "Campos/RJ"	
            end if

            'km 47 - Rodovia Presidente Dutra	
            if cidade=48 then
                localidade = "km 47 - Rodovia Presidente Dutra/RJ"	
            end if

            'Niter�i	
            if cidade=49 then
                localidade = "Niter�i/RJ"	
            end if

            'Nova Friburgo	
            if cidade=50 then
                localidade = "Nova Friburgo/RJ"	
            end if

            'Petr�polis	
            if cidade=51 then
                localidade = "Petr�polis/RJ"	
            end if

            'Pinheiral	
            if cidade=52 then
                localidade = "Pinheira/RJ"
             end if

            'Resende	
            if cidade=53 then
                localidade = "Resende/RJ"	
            end if

            'Rio de Janeiro (Bangu)	
            if cidade=54 then
                localidade = "Rio de Janeiro (Bangu)/RJ"	
            end if

            'Rio de Janeiro (Ipanema)	
            if cidade=55 then
                localidade = "Rio de Janeiro (Ipanema)/RJ"	
            end if

            'Rio de Janeiro (Jacarepagu�)	
            if cidade=56 then
                localidade = "Rio de Janeiro (Jacarepagu�)/RJ"	
            end if

            'Rio de Janeiro (Jardim Bot�nico)	
            if cidade=57 then
                localidade = "Rio de Janeiro (Jardim Bot�nico)/RJ"	
            end if

            'Rio de Janeiro (Pra�a Saenz Pe�a)	
            if cidade=58 then
                localidade = "Rio de Janeiro (Pra�a Saenz Pe�a)/RJ"
            end if

            'Rio de Janeiro (Pra�a XV)	
            if cidade=59 then
                localidade = "Rio de Janeiro (Pra�a XV)/RJ"	
            end if

            'Rio de Janeiro (Santa Cruz)	
            if cidade=60 then
                localidade = "Rio de Janeiro (Santa Cruz)/RJ"	
            end if

            'Santa Maria Madalena	
            if cidade=61 then
               localidade = "Santa Maria Madalena/RJ"	
            end if

            'Teres�polis	
            if cidade=62 then
                localidade = "Teres�polis/RJ"
            end if

            'Vassouras	
            if cidade=63 then
                localidade = "Vassouras/RJ"
              end if

            'Volta Redonda	
            if cidade=64 then
                localidade = "Volta Redonda/RJ"
            end if

            'Natal	
            if cidade=65 then
                localidade = "Natal/RN"	
            end if

            'Porto Velho	
             if cidade=66 then
                localidade = "Porto Velho/RO"	
            end if
            
            'Alegrete	
            if cidade=67 then
                localidade = "Alegrete/RS"	
            end if

            'Bag�	
            if cidade=68 then
                localidade = "Bag�/RS"	
            end if

            'Caxias do Sul	
            if cidade=69 then
                localidade = "Caxias do Sul/RS"	
            end if

            'Cruz Alta	
            if cidade=70 then
                localidade = "Cruz Alta/RS"	
            end if

            'Encruzilhada	
            if cidade=71 then
                localidade = "Encruzilhada/RS"	
            end if

            'Ira�	
            if cidade=72 then
                localidade = "Ira�/RS"
            end if

            'Passo Fundo	
            if cidade=73 then
                localidade = "Passo Fundo/RS"
            end if

            'Porto Alegre	
            if cidade=74 then
                localidade = "Porto Alegre/RS"	
            end if

            'Rio Grande	
            if cidade=75 then
                localidade = "Rio Grande/RS"	
            end if

            'Santa Maria	
            if cidade=76 then
                localidade = "Santa Maria/RS"	
            end if

            'Santa Vit�ria do Palmar	
            if cidade=77 then
                localidade = "Santa Vit�ria do Palmar/RS"
            end if

            'S�o Luiz Gonzaga	
            if cidade=78 then
                localidade = "S�o Luiz Gonzaga/RS"	
            end if

            'Uruguaiana	
            if cidade=79 then
                localidade = "Uruguaiana/RS"	
            end if

            'Viam�o	
            if cidade=80 then
                localidade = "Viam�o/RS"	
            end if

            'Blumenau	
            if cidade=81 then
                localidade = "Blumenau/SC"	
            end if

            'Florian�polis	
            if cidade=82 then
                localidade = "Florian�polis/SC"	
            end if

            'S�o Francisco do Sul	
            if cidade=83 then
                localidade = "S�o Francisco do Sul/SC"	
            end if

            'Aracaju	
            if cidade=84 then
                localidade = "Aracaju/SE"	
            end if

            'Avar�	
            if cidade=85 then
                localidade = "Avar�/SP"	
            end if

            'Bauru	
            if cidade=86 then
                localidade = "Bauru/SP"	
            end if

            'Campos do Jord�o	
            if cidade=87 then
                localidade = "Campos do Jord�o/SP"	
            end if

            'Lins	
            if cidade=88 then
                localidade = "Lins/SP"	
            end if

            'Piracicaba	
            if cidade=89 then
                localidade = "Piracicaba/SP"	
            end if

            'Santos	
            if cidade=90 then
                localidade = "Santos/SP"	
            end if

            'Santos - Itapema	
            if cidade=91 then
                localidade = "Santos - Itapema/SP"	
            end if

            'S�o Carlos	
            if cidade=92 then
                localidade = "S�o Carlos/SP"	
            end if

            'S�o Paulo (Congonhas)	
            if cidade=93 then
                localidade = "S�o Paulo (Congonhas)/SP"	
            end if

            'S�o Paulo (Mirante Santana)	
            if cidade=94 then
                localidade = "S�o Paulo (Mirante Santana)/SP"	
            end if

            'S�o Sim�o	
            if cidade=95 then
                localidade = "S�o Sim�o/SP"	
            end if

            'Taubat�	
            if cidade=96 then
                localidade = "Taubat�/SP"	
            end if

            'Tupi	
            if cidade=97 then
                localidade = "Tupi/SP"	
            end if

            'Ubatuba	
            if cidade=98 then
                localidade = "Ubatuba/SP"	
            end if

                    
                
            %>

            
            <!-- localidade -->
            <div style="background-color:#efefef;color:#000">

            <div style="padding:10px 10px 5px 20px;margin-bottom:0">

            <div style="margin:0 20px 5px 20px">

            <table style="width:100%;font-size:1.1em;">
            <tr>
                <td style="width:60%">Localidade:</td>
                <td style="width:40%;text-align:right"><span style="font-size:1.4em;font-weight:bold"><%= localidade %></span></td>

            </tr>
            </table>

           
            </div>

            </div>

            </div>



            <h2 style="margin:30px 0">Itens:</h2>	

		

            <% if tipo=1 then
                           

           'mais cidades -------------------

            'Rio Branco	
            if cidade=1 then
                precipitacao = 77	
            end if

            'Sena Madureira
            if cidade=2 then    	
                precipitacao = 67	
            end if

            'Macei�	
            if cidade=3 then    	
                precipitacao = 88	
            end if

            'Juaret�	
            if cidade=4 then
                precipitacao = 45	
            end if

            'Manaus
            if cidade=5 then
                precipitacao = 60	
            end if

            'Paratins
            if cidade=6 then
                precipitacao =54	
            end if

            'Uaupes	
            if cidade=7 then
                precipitacao = 52	
            end if

            'Salvador
            if cidade=8 then    	
                precipitacao =88	
            end if

            'Fortaleza	
            if cidade=9 then
                precipitacao = 69	
            end if

            'Guaramiranga	
            if cidade=10 then
                precipitacao = 85	
            end if

            'Quixeramobim	
            if cidade=11 then
                precipitacao = 89	
            end if

            'Vit�ria	
            if cidade=12 then
                precipitacao = 69	
            end if

            'Fernando de Noronha	
            if cidade=13 then
                precipitacao = 90	
            end if

            'Catal�o	
            if cidade=14 then
                precipitacao = 62	
             end if

            'Formosa	
            if cidade=15 then
                precipitacao = 61	
            end if

            'Goi�nia
            if cidade=16 then    	
                precipitacao = 60	
            end if

            'Barra do Corda	
            if cidade=17 then
                precipitacao = 84	
            end if

            'S�o Luiz	
            if cidade=18 then
                precipitacao = 85	
            end if

            'Barbacena	
            if cidade=19 then
                precipitacao = 48	
            end if

            'Belo Horizonte	
            if cidade=20 then
                precipitacao = 47	
            end if

            'Bonsucesso	
            if cidade=21 then
                precipitacao =55	
            end if

            'Caxambu	
            if cidade=22 then
                precipitacao = 78	
            end if

            'Ouro Preto	
            if cidade=23 then
                precipitacao =51	
            end if

            'Paracatu	
            if cidade=24 then
                precipitacao = 46	
             end if

            'Passa Quatro	
            if cidade=25 then
                precipitacao =60	
            end if

            'Sete Lagoas	
            if cidade=26 then
                precipitacao = 59	
            end if

            'Te�filo Otoni	
            if cidade=27 then
                precipitacao = 89	
            end if

            'Turia�u
            if cidade=28 then      	
                precipitacao = 66	
            end if

            'Corumb�	
            if cidade=29 then
                precipitacao = 82	
             end if

            'Cuiab�	
            if cidade=30 then
                precipitacao = 56	
            end if

            'Alto Tapaj�s	
            if cidade=31 then
                precipitacao = 47	
            end if

            'Bel�m	
            if cidade=32 then
                precipitacao = 68	
            end if

            'Soure	
            if cidade=33 then
                precipitacao = 66	
             end if

            'Taperinha	
            if cidade=34 then
                precipitacao = 53	
            end if

            'Jo�o Pessoa	
            if cidade=35 then
                precipitacao = 77	
             end if

            'S�o Gon�alo	
            if cidade=36 then
                precipitacao = 87	
            end if

            'Nazar�	
            if cidade=37 then
                precipitacao = 80	
            end if

            'Olinda	
            if cidade=38 then
                precipitacao = 64	
            end if

            'Teresina	
            if cidade=39 then
                precipitacao = 45	
            end if

            'Curitiba	
            if cidade=40 then
                precipitacao = 52	
            end if

            'Jacarezinho	
            if cidade=41 then
                precipitacao = 88	
            end if

            'Paranagu�	
            if cidade=42 then
                precipitacao = 58	
            end if

            'Ponta Grossa	
            if cidade=43 then
                precipitacao = 85	
            end if

            'Alto Itatiaia	
            if cidade=44 then
                precipitacao = 65	
            end if

            'Alto Teres�polis	
            if cidade=45 then
                precipitacao = 78	
            end if

            'Cabo Frio	
            if cidade=46 then
                precipitacao = 73	
            end if

            'Campos	
            if cidade=47 then
                precipitacao =52	
            end if

            'km 47 - Rodovia Presidente Dutra	
            if cidade=48 then
                precipitacao =65	
            end if

            'Niter�i	
            if cidade=49 then
                precipitacao = 59	
            end if

            'Nova Friburgo	
            if cidade=50 then
                precipitacao =87	
            end if

            'Petr�polis	
            if cidade=51 then
                precipitacao = 85	
            end if

            'Pinheiral	
            if cidade=52 then
                precipitacao =50	
             end if

            'Resende	
            if cidade=53 then
                precipitacao =53	
            end if

            'Rio de Janeiro (Bangu)	
            if cidade=54 then
                precipitacao =69	
            end if

            'Rio de Janeiro (Ipanema)	
            if cidade=55 then
                precipitacao = 86	
            end if

            'Rio de Janeiro (Jacarepagu�)	
            if cidade=56 then
                precipitacao = 76	
            end if

            'Rio de Janeiro (Jardim Bot�nico)	
            if cidade=57 then
                precipitacao = 64	
            end if

            'Rio de Janeiro (Pra�a Saenz Pe�a)	
            if cidade=58 then
                precipitacao = 77	
            end if

            'Rio de Janeiro (Pra�a XV)	
            if cidade=59 then
                precipitacao =62	
            end if

            'Rio de Janeiro (Santa Cruz)	
            if cidade=60 then
                precipitacao = 81	
            end if

            'Santa Maria Madalena	
            if cidade=61 then
                precipitacao =85	
            end if

            'Teres�polis	
            if cidade=62 then
                precipitacao = 72	
            end if

            'Vassouras	
            if cidade=63 then
                precipitacao = 60	
              end if

            'Volta Redonda	
            if cidade=64 then
                precipitacao = 50	
            end if

            'Natal	
            if cidade=65 then
                precipitacao = 90	
            end if

            'Porto Velho	
             if cidade=66 then
                precipitacao = 64	
            end if

            'Alegrete	
            if cidade=67 then
                precipitacao =45	
            end if

            'Bag�	
            if cidade=68 then
                precipitacao =52	
            end if

            'Caxias do Sul	
            if cidade=69 then
                precipitacao = 85	
            end if

            'Cruz Alta	
            if cidade=70 then
                precipitacao = 43	
            end if

            'Encruzilhada	
            if cidade=71 then
                precipitacao = 85	
            end if

            'Ira�	
            if cidade=72 then
                precipitacao = 54	
            end if

            'Passo Fundo	
            if cidade=73 then
                precipitacao = 86	
            end if

            'Porto Alegre	
            if cidade=74 then
                precipitacao = 73	
            end if

            'Rio Grande	
            if cidade=75 then
                precipitacao = 52	
            end if

            'Santa Maria	
            if cidade=76 then
                precipitacao = 88	
            end if

            'Santa Vit�ria do Palmar	
            if cidade=77 then
                precipitacao = 85	
            end if

            'S�o Luiz Gonzaga	
            if cidade=78 then
                precipitacao = 51	
            end if

            'Uruguaiana	
            if cidade=79 then
                precipitacao = 76	
            end if

            'Viam�o	
            if cidade=80 then
                precipitacao = 85	
            end if

            'Blumenau	
            if cidade=81 then
                precipitacao = 86	
            end if

            'Florian�polis	
            if cidade=82 then
                precipitacao = 90	
            end if

            'S�o Francisco do Sul	
            if cidade=83 then
                precipitacao = 81	
            end if

            'Aracaju	
            if cidade=84 then
                precipitacao = 88	
            end if

            'Avar�	
            if cidade=85 then
                precipitacao = 75	
            end if

            'Bauru	
            if cidade=86 then
                precipitacao = 90	
            end if

            'Campos do Jord�o	
            if cidade=87 then
                precipitacao = 75	
            end if

            'Lins	
            if cidade=88 then
                precipitacao = 88	
            end if

            'Piracicaba	
            if cidade=89 then
                precipitacao = 88	
            end if

            'Santos	
            if cidade=90 then
                precipitacao = 54	
            end if

            'Santos - Itapema	
            if cidade=91 then
                precipitacao = 62	
            end if

            'S�o Carlos	
            if cidade=92 then
                precipitacao = 60	
            end if

            'S�o Paulo (Congonhas)	
            if cidade=93 then
                precipitacao = 81	
            end if

            'S�o Paulo (Mirante Santana)	
            if cidade=94 then
                precipitacao = 62	
            end if

            'S�o Sim�o	
            if cidade=95 then
                precipitacao = 72	
            end if

            'Taubat�	
            if cidade=96 then
                precipitacao = 62	
            end if

            'Tupi	
            if cidade=97 then
                precipitacao = 70	
            end if

            'Ubatuba	
            if cidade=98 then
                precipitacao = 72	
            end if



            '-------------------------------

         
            %>

            

            <%

            A = FormatNumber((roundUp(comprimento/3)),0)
            B = roundUp(area/precipitacao)
            C = FormatNumber((roundUp(alturaDoBeiral/3))*B,0)
            D = (FormatNumber((roundUp(alturaDoBeiral/3))-1,0))*B
            E = FormatNumber((roundUp(alturaDoBeiral/1.5)),0)*B

            %>

            <table style="width:100%;margin-top:10px">
            <tr style="text-align:center;font-size:1.1em;font-weight:bold;background-color:#efefef">
                <td style="height:40px;width:30%">Item</td>
                <td style="height:40px;width:15%">C�digo</td>
                <td style="height:40px;width:15%">Quantidade</td>
                <td style="height:40px;width:20%">Link</td>
                <td style="height:40px;width:20%">Observa��o</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Calha de 3 m</td>
                <td style="height:40px;width:15%">CAL/CK</td>
                <td style="height:40px;width:15%"><%= A %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/barra-da-calha-3m-branca-astra-cal-ck/p?idsku=2056" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Bocal de sa�da 75 mm</td>
                <td style="height:40px;width:15%">CAL/BOC</td>
                <td style="height:40px;width:15%"><%= B %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/bocal-de-saida-da-calha-de-75mm-branco-astra/p?idsku=2053" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>


            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Anti-folha para 75 mm</td>
                <td style="height:40px;width:15%">CAL/AF</td>
                <td style="height:40px;width:15%"><%= B %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/anti-folha-para-bocal-de-saida-de-calha-120x135mm-astra/p?idsku=2051
" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Emenda com veda��o</td>
                <td style="height:40px;width:15%">CAL/EMC</td>
                <td style="height:40px;width:15%"><%= FormatNumber((A-1),0) %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/emenda-da-calha-com-vedacao-branco-astra/p?idsku=2059" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">Op��o (com ou sem veda��o)</td>
            </tr>
            </table>

        

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Suporte fixador</td>
                <td style="height:40px;width:15%">CAL/SU</td>
                <td style="height:40px;width:15%"><%= FormatNumber((A*5),0) %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/suporte-de-fixacao-de-calha-branco-astra/p?idsku=2065" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Condutor de 3 m</td>
                <td style="height:40px;width:15%">CAL/CDT</td>
                <td style="height:40px;width:15%">



                     <%
                                                                                   
                    ' in�cio (ok)
                    if resto=0 then 
                        C = alturaDoBeiral/3*B
                        response.write C
                    else 

                        '1 (ok)
                        if resto>1.5 then
                        C = roundUp(round(alturaDoBeiral/3)*B)
                        response.write C  
                                                
                        else 
                        
                            '2 (ok)
                            if resto>1 then
                            C = roundUp((round(alturaDoBeiral/3)+0.5)*B)
                            response.write C        
                        
                            else

                                '3 (ok)
                                if resto>0.5 then
                                C = roundUp((round(alturaDoBeiral/3)+1/3)*B)
                                response.write C               
                                                                              
                                    'final (ok)
                                    else
                                    C = roundUp(((alturaDoBeiral/3)+0.17)*B)
                                    response.write C
                                    end if

                            end if
                        end if
                  end if 
                       
                  %>









                </td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/tubo-condutor-de-calha-de-3m-branco-astra/p" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Conector do condutor</td>
                <td style="height:40px;width:15%">CAL/CN</td>
                <td style="height:40px;width:15%"><%= D %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/conector-do-condutor-de-calha-branco-astra/p?idsku=2058" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Abra�adeira do condutor</td>
                <td style="height:40px;width:15%">CAL/ABC</td>
                <td style="height:40px;width:15%"><%= E %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/abracadeira-para-condutor-de-calha-branco-astra/p?idsku=2049" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Cabeceira (par)</td>
                <td style="height:40px;width:15%">CAL/CAB </td>
                <td style="height:40px;width:15%">1</td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/cabeceira-para-calha--par--branco-astra/p?idsku=2054
" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">M�nimo � 1 (um)</td>
            </tr>
            </table>

         




            <% end if %>





            
            <% if tipo=2 then 

           'mais cidades -------------------

            'Rio Branco	
            if cidade=1 then
                precipitacao = 77	
            end if

            'Sena Madureira
            if cidade=2 then    	
                precipitacao = 67	
            end if

            'Macei�	
            if cidade=3 then    	
                precipitacao = 88	
            end if

            'Juaret�	
            if cidade=4 then
                precipitacao = 45	
            end if

            'Manaus
            if cidade=5 then
                precipitacao = 60	
            end if

            'Paratins
            if cidade=6 then
                precipitacao =54	
            end if

            'Uaupes	
            if cidade=7 then
                precipitacao = 52	
            end if

            'Salvador
            if cidade=8 then    	
                precipitacao =88	
            end if

            'Fortaleza	
            if cidade=9 then
                precipitacao = 69	
            end if

            'Guaramiranga	
            if cidade=10 then
                precipitacao = 85	
            end if

            'Quixeramobim	
            if cidade=11 then
                precipitacao = 89	
            end if

            'Vit�ria	
            if cidade=12 then
                precipitacao = 69	
            end if

            'Fernando de Noronha	
            if cidade=13 then
                precipitacao = 90	
            end if

            'Catal�o	
            if cidade=14 then
                precipitacao = 62	
             end if

            'Formosa	
            if cidade=15 then
                precipitacao = 61	
            end if

            'Goi�nia
            if cidade=16 then    	
                precipitacao = 60	
            end if

            'Barra do Corda	
            if cidade=17 then
                precipitacao = 84	
            end if

            'S�o Luiz	
            if cidade=18 then
                precipitacao = 85	
            end if

            'Barbacena	
            if cidade=19 then
                precipitacao = 48	
            end if

            'Belo Horizonte	
            if cidade=20 then
                precipitacao = 47	
            end if

            'Bonsucesso	
            if cidade=21 then
                precipitacao =55	
            end if

            'Caxambu	
            if cidade=22 then
                precipitacao = 78	
            end if

            'Ouro Preto	
            if cidade=23 then
                precipitacao =51	
            end if

            'Paracatu	
            if cidade=24 then
                precipitacao = 46	
             end if

            'Passa Quatro	
            if cidade=25 then
                precipitacao =60	
            end if

            'Sete Lagoas	
            if cidade=26 then
                precipitacao = 59	
            end if

            'Te�filo Otoni	
            if cidade=27 then
                precipitacao = 89	
            end if

            'Turia�u
            if cidade=28 then      	
                precipitacao = 66	
            end if

            'Corumb�	
            if cidade=29 then
                precipitacao = 82	
             end if

            'Cuiab�	
            if cidade=30 then
                precipitacao = 56	
            end if

            'Alto Tapaj�s	
            if cidade=31 then
                precipitacao = 47	
            end if

            'Bel�m	
            if cidade=32 then
                precipitacao = 68	
            end if

            'Soure	
            if cidade=33 then
                precipitacao = 66	
             end if

            'Taperinha	
            if cidade=34 then
                precipitacao = 53	
            end if

            'Jo�o Pessoa	
            if cidade=35 then
                precipitacao = 77	
             end if

            'S�o Gon�alo	
            if cidade=36 then
                precipitacao = 87	
            end if

            'Nazar�	
            if cidade=37 then
                precipitacao = 80	
            end if

            'Olinda	
            if cidade=38 then
                precipitacao = 64	
            end if

            'Teresina	
            if cidade=39 then
                precipitacao = 45	
            end if

            'Curitiba	
            if cidade=40 then
                precipitacao = 52	
            end if

            'Jacarezinho	
            if cidade=41 then
                precipitacao = 88	
            end if

            'Paranagu�	
            if cidade=42 then
                precipitacao = 58	
            end if

            'Ponta Grossa	
            if cidade=43 then
                precipitacao = 85	
            end if

            'Alto Itatiaia	
            if cidade=44 then
                precipitacao = 65	
            end if

            'Alto Teres�polis	
            if cidade=45 then
                precipitacao = 78	
            end if

            'Cabo Frio	
            if cidade=46 then
                precipitacao = 73	
            end if

            'Campos	
            if cidade=47 then
                precipitacao =52	
            end if

            'km 47 - Rodovia Presidente Dutra	
            if cidade=48 then
                precipitacao =65	
            end if

            'Niter�i	
            if cidade=49 then
                precipitacao = 59	
            end if

            'Nova Friburgo	
            if cidade=50 then
                precipitacao =87	
            end if

            'Petr�polis	
            if cidade=51 then
                precipitacao = 85	
            end if

            'Pinheiral	
            if cidade=52 then
                precipitacao =50	
             end if

            'Resende	
            if cidade=53 then
                precipitacao =53	
            end if

            'Rio de Janeiro (Bangu)	
            if cidade=54 then
                precipitacao =69	
            end if

            'Rio de Janeiro (Ipanema)	
            if cidade=55 then
                precipitacao = 86	
            end if

            'Rio de Janeiro (Jacarepagu�)	
            if cidade=56 then
                precipitacao = 76	
            end if

            'Rio de Janeiro (Jardim Bot�nico)	
            if cidade=57 then
                precipitacao = 64	
            end if

            'Rio de Janeiro (Pra�a Saenz Pe�a)	
            if cidade=58 then
                precipitacao = 77	
            end if

            'Rio de Janeiro (Pra�a XV)	
            if cidade=59 then
                precipitacao =62	
            end if

            'Rio de Janeiro (Santa Cruz)	
            if cidade=60 then
                precipitacao = 81	
            end if

            'Santa Maria Madalena	
            if cidade=61 then
                precipitacao =85	
            end if

            'Teres�polis	
            if cidade=62 then
                precipitacao = 72	
            end if

            'Vassouras	
            if cidade=63 then
                precipitacao = 60	
              end if

            'Volta Redonda	
            if cidade=64 then
                precipitacao = 50	
            end if

            'Natal	
            if cidade=65 then
                precipitacao = 90	
            end if

            'Porto Velho	
             if cidade=66 then
                precipitacao = 64	
            end if

            'Alegrete	
            if cidade=67 then
                precipitacao =45	
            end if

            'Bag�	
            if cidade=68 then
                precipitacao =52	
            end if

            'Caxias do Sul	
            if cidade=69 then
                precipitacao = 85	
            end if

            'Cruz Alta	
            if cidade=70 then
                precipitacao = 43	
            end if

            'Encruzilhada	
            if cidade=71 then
                precipitacao = 85	
            end if

            'Ira�	
            if cidade=72 then
                precipitacao = 54	
            end if

            'Passo Fundo	
            if cidade=73 then
                precipitacao = 86	
            end if

            'Porto Alegre	
            if cidade=74 then
                precipitacao = 73	
            end if

            'Rio Grande	
            if cidade=75 then
                precipitacao = 52	
            end if

            'Santa Maria	
            if cidade=76 then
                precipitacao = 88	
            end if

            'Santa Vit�ria do Palmar	
            if cidade=77 then
                precipitacao = 85	
            end if

            'S�o Luiz Gonzaga	
            if cidade=78 then
                precipitacao = 51	
            end if

            'Uruguaiana	
            if cidade=79 then
                precipitacao = 76	
            end if

            'Viam�o	
            if cidade=80 then
                precipitacao = 85	
            end if

            'Blumenau	
            if cidade=81 then
                precipitacao = 86	
            end if

            'Florian�polis	
            if cidade=82 then
                precipitacao = 90	
            end if

            'S�o Francisco do Sul	
            if cidade=83 then
                precipitacao = 81	
            end if

            'Aracaju	
            if cidade=84 then
                precipitacao = 88	
            end if

            'Avar�	
            if cidade=85 then
                precipitacao = 75	
            end if

            'Bauru	
            if cidade=86 then
                precipitacao = 90	
            end if

            'Campos do Jord�o	
            if cidade=87 then
                precipitacao = 75	
            end if

            'Lins	
            if cidade=88 then
                precipitacao = 88	
            end if

            'Piracicaba	
            if cidade=89 then
                precipitacao = 88	
            end if

            'Santos	
            if cidade=90 then
                precipitacao = 54	
            end if

            'Santos - Itapema	
            if cidade=91 then
                precipitacao = 62	
            end if

            'S�o Carlos	
            if cidade=92 then
                precipitacao = 60	
            end if

            'S�o Paulo (Congonhas)	
            if cidade=93 then
                precipitacao = 81	
            end if

            'S�o Paulo (Mirante Santana)	
            if cidade=94 then
                precipitacao = 62	
            end if

            'S�o Sim�o	
            if cidade=95 then
                precipitacao = 72	
            end if

            'Taubat�	
            if cidade=96 then
                precipitacao = 62	
            end if

            'Tupi	
            if cidade=97 then
                precipitacao = 70	
            end if

            'Ubatuba	
            if cidade=98 then
                precipitacao = 72	
            end if



            '-------------------------------

            %>

            <%

            A = Int(comprimento/3)                          
            B = roundUp(comprimento-(A*3))                           
            C = FormatNumber(roundUp((area/precipitacao)),0)
            E = (FormatNumber((roundUp(alturaDoBeiral/3))-1,0))*C   
            F = FormatNumber((roundUp(alturaDoBeiral/1.5)),0)*C      



            %>

           
            <table style="width:100%;margin-top:10px">
            <tr style="text-align:center;font-size:1.1em;font-weight:bold;background-color:#efefef">
                <td style="height:40px;width:30%">Item</td>
                <td style="height:40px;width:15%">C�digo</td>
                <td style="height:40px;width:15%">Quantidade</td>
                <td style="height:40px;width:20%">Link</td>
                <td style="height:40px;width:20%">Observa��o</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Calha de 3 m</td>
                <td style="height:40px;width:15%">CAL/CK</td>
                <td style="height:40px;width:15%"><%= A %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/barra-da-calha-3m-branca-astra-cal-ck/p?idsku=2056
" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Calha de 1 m</td>
                <td style="height:40px;width:15%">CAL/CK1</td>
                <td style="height:40px;width:15%"><%= B %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/barra-da-calha-1m-branca-astra-cal-ck1/p?idsku=2057" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Bocal de sa�da 75 mm</td>
                <td style="height:40px;width:15%">CAL/BOC</td>
                <td style="height:40px;width:15%"><%= C %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/bocal-de-saida-da-calha-de-75mm-branco-astra/p?idsku=2053
" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Anti-folha para 75 mm</td>
                <td style="height:40px;width:15%">CAL/AF</td>
                <td style="height:40px;width:15%"><%= C %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/anti-folha-para-bocal-de-saida-de-calha-120x135mm-astra/p?idsku=2051" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Emenda com veda��o</td>
                <td style="height:40px;width:15%">CAL/EMC</td>
                <td style="height:40px;width:15%"><%= (A+B)-1 %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/emenda-da-calha-com-vedacao-branco-astra/p?idsku=2059" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">Op��o (com ou sem veda��o)</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Suporte fixador</td>
                <td style="height:40px;width:15%">CAL/SU</td>
                <td style="height:40px;width:15%"><%= A*5+B*2 %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/suporte-de-fixacao-de-calha-branco-astra/p?idsku=2065" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Condutor de 3 m</td>
                <td style="height:40px;width:15%">CAL/CDT</td>
                <td style="height:40px;width:15%">



                      <%
                                                                                   
                    ' in�cio (ok)
                    if resto=0 then 
                        D = alturaDoBeiral/3*C
                        response.write D
                    else 

                        '1 (ok)
                        if resto>1.5 then
                        D = roundUp(round(alturaDoBeiral/3)*C)
                        response.write D  
                                                
                        else 
                        
                            '2 (ok)
                            if resto>1 then
                            D = roundUp((round(alturaDoBeiral/3)+0.5)*C)
                            response.write D       
                        
                            else

                                '3 (ok)
                                if resto>0.5 then
                                D = roundUp((round(alturaDoBeiral/3)+1/3)*C)
                                response.write D              
                                                                              
                                    'final (ok)
                                    else
                                    D = roundUp(((alturaDoBeiral/3)+0.17)*C)
                                    response.write D
                                    end if

                            end if
                        end if
                  end if 
                       
                  %>





                </td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/tubo-condutor-de-calha-de-3m-branco-astra/p
" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Conector do condutor</td>
                <td style="height:40px;width:15%">CAL/CN</td>
                <td style="height:40px;width:15%"><%= E %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/conector-do-condutor-de-calha-branco-astra/p?idsku=2058" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Abra�adeira do condutor</td>
                <td style="height:40px;width:15%">CAL/ABC</td>
                <td style="height:40px;width:15%"><%= F %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/abracadeira-para-condutor-de-calha-branco-astra/p?idsku=2049" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Cabeceira (par)</td>
                <td style="height:40px;width:15%">CAL/CAB </td>
                <td style="height:40px;width:15%">1</td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/cabeceira-para-calha--par--branco-astra/p?idsku=2054" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">M�nimo � um</td>
            </tr>
            </table>

           

            <% end if %>



            
            <% if tipo=3 then 

            'mais cidades -------------------

            'Rio Branco	
            if cidade=1 then
                precipitacao =129
            end if

            'Sena Madureira
            if cidade=2 then    	
                precipitacao = 112
            end if

            'Macei�	
            if cidade=3 then    	
                precipitacao = 147
            end if

            'Juaret�	
            if cidade=4 then
                precipitacao = 75
            end if

            'Manaus
            if cidade=5 then
                precipitacao = 100
            end if

            'Paratins
            if cidade=6 then
                precipitacao = 90
            end if

            'Uaupes	
            if cidade=7 then
                precipitacao = 88
            end if

            'Salvador
            if cidade=8 then    	
                precipitacao = 147
            end if

            'Fortaleza	
            if cidade=9 then
                precipitacao = 115
            end if

            'Guaramiranga	
            if cidade=10 then
                precipitacao = 142
            end if

            'Quixeramobim	
            if cidade=11 then
                precipitacao = 148
            end if

            'Vit�ria	
            if cidade=12 then
                precipitacao = 115
            end if

            'Fernando de Noronha	
            if cidade=13 then
                precipitacao = 150
            end if

            'Catal�o	
            if cidade=14 then
                precipitacao = 103
            end if

            'Formosa	
            if cidade=15 then
                precipitacao =102
            end if

            'Goi�nia
            if cidade=16 then    	
                precipitacao = 101
            end if

            'Barra do Corda	
            if cidade=17 then
                precipitacao = 140
            end if

            'S�o Luiz	
            if cidade=18 then
                precipitacao = 142
            end if

            'Barbacena	
            if cidade=19 then
                precipitacao = 81
            end if

            'Belo Horizonte	
            if cidade=20 then
                precipitacao = 79
            end if

            'Bonsucesso	
            if cidade=21 then
                precipitacao = 91
            end if

            'Caxambu	
            if cidade=22 then
                precipitacao = 131
            end if

            'Ouro Preto	
            if cidade=23 then
                precipitacao = 85
            end if

            'Paracatu	
            if cidade=24 then
                precipitacao = 77
             end if

            'Passa Quatro	
            if cidade=25 then
                precipitacao = 100
            end if

            'Sete Lagoas	
            if cidade=26 then
                precipitacao = 98
            end if

            'Te�filo Otoni	
            if cidade=27 then
                precipitacao = 148
            end if

            'Turia�u
            if cidade=28 then      	
                precipitacao = 111
            end if

            'Corumb�	
            if cidade=29 then
                precipitacao = 137
            end if

            'Cuiab�	
            if cidade=30 then
                precipitacao = 94
            end if

            'Alto Tapaj�s	
            if cidade=31 then
                precipitacao = 78
            end if

            'Bel�m	
            if cidade=32 then
                precipitacao = 114
            end if

            'Soure	
            if cidade=33 then
                precipitacao = 111
            end if

            'Taperinha	
            if cidade=34 then
                precipitacao = 89
            end if

            'Jo�o Pessoa	
            if cidade=35 then
                precipitacao = 128
            end if

            'S�o Gon�alo	
            if cidade=36 then
                precipitacao = 145
            end if

            'Nazar�	
            if cidade=37 then
                precipitacao = 134
            end if

            'Olinda	
            if cidade=38 then
                precipitacao = 107
            end if

            'Teresina	
            if cidade=39 then
                precipitacao = 75
            end if

            'Curitiba	
            if cidade=40 then
                precipitacao = 88
            end if

            'Jacarezinho	
            if cidade=41 then
                precipitacao = 147
            end if

            'Paranagu�	
            if cidade=42 then
                precipitacao = 96
            end if

            'Ponta Grossa	
            if cidade=43 then
                precipitacao = 142
            end if

            'Alto Itatiaia	
            if cidade=44 then
                precipitacao = 109
            end if

            'Alto Teres�polis	
            if cidade=45 then
                precipitacao = 131
            end if

            'Cabo Frio	
            if cidade=46 then
                precipitacao = 123
            end if

            'Campos	
            if cidade=47 then
                precipitacao = 87
            end if

            'km 47 - Rodovia Presidente Dutra	
            if cidade=48 then
                precipitacao = 109
            end if

            'Niter�i	
            if cidade=49 then
                precipitacao = 98
            end if

            'Nova Friburgo	
            if cidade=50 then
                precipitacao = 145
            end if

            'Petr�polis	
            if cidade=51 then
                precipitacao = 142
            end if

            'Pinheiral	
            if cidade=52 then
                precipitacao = 84
            end if

            'Resende	
            if cidade=53 then
                precipitacao = 88
            end if

            'Rio de Janeiro (Bangu)	
            if cidade=54 then
                precipitacao = 115
            end if

            'Rio de Janeiro (Ipanema)	
            if cidade=55 then
                precipitacao = 144
            end if

            'Rio de Janeiro (Jacarepagu�)	
            if cidade=56 then
                precipitacao = 126
            end if

            'Rio de Janeiro (Jardim Bot�nico)	
            if cidade=57 then
                precipitacao = 107
            end if

            'Rio de Janeiro (Pra�a Saenz Pe�a)	
            if cidade=58 then
                precipitacao = 129
            end if

            'Rio de Janeiro (Pra�a XV)	
            if cidade=59 then
                precipitacao = 103
            end if

            'Rio de Janeiro (Santa Cruz)	
            if cidade=60 then
                precipitacao = 136
            end if

            'Santa Maria Madalena	
            if cidade=61 then
                precipitacao = 142
            end if

            'Teres�polis	
            if cidade=62 then
                precipitacao = 120
            end if

            'Vassouras	
            if cidade=63 then
                precipitacao = 100
            end if

            'Volta Redonda	
            if cidade=64 then
                precipitacao = 83
            end if

            'Natal	
            if cidade=65 then
                precipitacao = 150
            end if

            'Porto Velho	
             if cidade=66 then
                precipitacao = 107
            end if

            'Alegrete	
            if cidade=67 then
                precipitacao = 75
            end if

            'Bag�	
            if cidade=68 then
                precipitacao = 88
            end if

            'Caxias do Sul	
            if cidade=69 then
                precipitacao = 141
            end if

            'Cruz Alta	
            if cidade=70 then
                precipitacao = 73
            end if

            'Encruzilhada	
            if cidade=71 then
                precipitacao = 142
            end if

            'Ira�	
            if cidade=72 then
                precipitacao = 90
            end if

            'Passo Fundo	
            if cidade=73 then
                precipitacao = 144
            end if

            'Porto Alegre	
            if cidade=74 then
                precipitacao = 123
            end if

            'Rio Grande	
            if cidade=75 then
                precipitacao = 88
            end if

            'Santa Maria	
            if cidade=76 then
                precipitacao = 147
            end if

            'Santa Vit�ria do Palmar	
            if cidade=77 then
                precipitacao = 142
            end if

            'S�o Luiz Gonzaga	
            if cidade=78 then
                precipitacao = 86
            end if

            'Uruguaiana	
            if cidade=79 then
                precipitacao = 126
            end if

            'Viam�o	
            if cidade=80 then
                precipitacao = 142
            end if

            'Blumenau	
            if cidade=81 then
                precipitacao = 144
            end if

            'Florian�polis	
            if cidade=82 then
                precipitacao = 150
            end if

            'S�o Francisco do Sul	
            if cidade=83 then
                precipitacao = 136
            end if

            'Aracaju	
            if cidade=84 then
                precipitacao = 147
            end if

            'Avar�	
            if cidade=85 then
                precipitacao = 125
            end if

            'Bauru	
            if cidade=86 then
                precipitacao = 150
            end if

            'Campos do Jord�o	
            if cidade=87 then
                precipitacao = 125
            end if

            'Lins	
            if cidade=88 then
                precipitacao = 147
            end if

            'Piracicaba	
            if cidade=89 then
                precipitacao = 147
            end if

            'Santos	
            if cidade=90 then
                precipitacao = 90
            end if

            'Santos - Itapema	
            if cidade=91 then
                precipitacao = 103
            end if

            'S�o Carlos	
            if cidade=92 then
                precipitacao = 101
            end if

            'S�o Paulo (Congonhas)	
            if cidade=93 then
                precipitacao = 136
            end if

            'S�o Paulo (Mirante Santana)	
            if cidade=94 then
                precipitacao = 104
            end if

            'S�o Sim�o	
            if cidade=95 then
                precipitacao = 121
            end if

            'Taubat�	
            if cidade=96 then
                precipitacao = 104
            end if

            'Tupi	
            if cidade=97 then
                precipitacao = 116
            end if

            'Ubatuba	
            if cidade=98 then
                precipitacao =  120
            end if



            '-------------------------------

            %>

            <%
                
            A = FormatNumber((comprimento/3),0)
            B = FormatNumber((area/precipitacao),0)

            %>

        

            <table style="width:100%;margin-top:10px">
            <tr style="text-align:center;font-size:1.1em;font-weight:bold;background-color:#efefef">
                <td style="height:40px;width:30%">Item</td>
                <td style="height:40px;width:15%">C�digo</td>
                <td style="height:40px;width:15%">Quantidade</td>
                <td style="height:40px;width:20%">Link</td>
                <td style="height:40px;width:20%">Observa��o</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Calha de 3 m</td>
                <td style="height:40px;width:15%">CAL/CK</td>
                <td style="height:40px;width:15%"><%= A %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/barra-da-calha-3m-branca-astra-cal-ck/p?idsku=2056" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Bocal de sa�da 100 mm</td>
                <td style="height:40px;width:15%">CAL/B100 </td>
                <td style="height:40px;width:15%">

                    <% if B=0 then %>
                    1
                    <% else %>
                    <%= B %>
                    <% end if %>

                </td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/bocal-de-saida-da-calha-de-100mm-branco-astra/p" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Anti-folha para 100 mm</td>
                <td style="height:40px;width:15%">CAL/AF</td>
                <td style="height:40px;width:15%">

                    <% if B=0 then %>
                    1
                    <% else %>
                    <%= B %>
                    <% end if %>

                </td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/anti-folha-para-bocal-de-saida-de-calha-120x135mm-astra/p?idsku=2051
" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Emenda com veda��o</td>
                <td style="height:40px;width:15%">CAL/EMC</td>
                <td style="height:40px;width:15%"><%= A-1 %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/emenda-da-calha-com-vedacao-branco-astra/p?idsku=2059" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">Op��o (com ou sem veda��o)</td>
            </tr>
            </table>

           
            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Suporte fixador</td>
                <td style="height:40px;width:15%">CAL/SU</td>
                <td style="height:40px;width:15%"><%= A*5 %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/suporte-de-fixacao-de-calha-branco-astra/p?idsku=2065" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

        

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Cabeceira (par)</td>
                <td style="height:40px;width:15%">CAL/CAB</td>
                <td style="height:40px;width:15%">1</td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/cabeceira-para-calha--par--branco-astra/p?idsku=2054" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">M�nimo � 1 (um)</td>
            </tr>
            </table>

           
         

         
            <% end if %>




            
            <% if tipo=4 then 
      
             'mais cidades -------------------

            'Rio Branco	
            if cidade=1 then
                precipitacao =129
            end if

            'Sena Madureira
            if cidade=2 then    	
                precipitacao = 112
            end if

            'Macei�	
            if cidade=3 then    	
                precipitacao = 147
            end if

            'Juaret�	
            if cidade=4 then
                precipitacao = 75
            end if

            'Manaus
            if cidade=5 then
                precipitacao = 100
            end if

            'Paratins
            if cidade=6 then
                precipitacao = 90
            end if

            'Uaupes	
            if cidade=7 then
                precipitacao = 88
            end if

            'Salvador
            if cidade=8 then    	
                precipitacao = 147
            end if

            'Fortaleza	
            if cidade=9 then
                precipitacao = 115
            end if

            'Guaramiranga	
            if cidade=10 then
                precipitacao = 142
            end if

            'Quixeramobim	
            if cidade=11 then
                precipitacao = 148
            end if

            'Vit�ria	
            if cidade=12 then
                precipitacao = 115
            end if

            'Fernando de Noronha	
            if cidade=13 then
                precipitacao = 150
            end if

            'Catal�o	
            if cidade=14 then
                precipitacao = 103
            end if

            'Formosa	
            if cidade=15 then
                precipitacao =102
            end if

            'Goi�nia
            if cidade=16 then    	
                precipitacao = 101
            end if

            'Barra do Corda	
            if cidade=17 then
                precipitacao = 140
            end if

            'S�o Luiz	
            if cidade=18 then
                precipitacao = 142
            end if

            'Barbacena	
            if cidade=19 then
                precipitacao = 81
            end if

            'Belo Horizonte	
            if cidade=20 then
                precipitacao = 79
            end if

            'Bonsucesso	
            if cidade=21 then
                precipitacao = 91
            end if

            'Caxambu	
            if cidade=22 then
                precipitacao = 131
            end if

            'Ouro Preto	
            if cidade=23 then
                precipitacao = 85
            end if

            'Paracatu	
            if cidade=24 then
                precipitacao = 77
             end if

            'Passa Quatro	
            if cidade=25 then
                precipitacao = 100
            end if

            'Sete Lagoas	
            if cidade=26 then
                precipitacao = 98
            end if

            'Te�filo Otoni	
            if cidade=27 then
                precipitacao = 148
            end if

            'Turia�u
            if cidade=28 then      	
                precipitacao = 111
            end if

            'Corumb�	
            if cidade=29 then
                precipitacao = 137
            end if

            'Cuiab�	
            if cidade=30 then
                precipitacao = 94
            end if

            'Alto Tapaj�s	
            if cidade=31 then
                precipitacao = 78
            end if

            'Bel�m	
            if cidade=32 then
                precipitacao = 114
            end if

            'Soure	
            if cidade=33 then
                precipitacao = 111
            end if

            'Taperinha	
            if cidade=34 then
                precipitacao = 89
            end if

            'Jo�o Pessoa	
            if cidade=35 then
                precipitacao = 128
            end if

            'S�o Gon�alo	
            if cidade=36 then
                precipitacao = 145
            end if

            'Nazar�	
            if cidade=37 then
                precipitacao = 134
            end if

            'Olinda	
            if cidade=38 then
                precipitacao = 107
            end if

            'Teresina	
            if cidade=39 then
                precipitacao = 75
            end if

            'Curitiba	
            if cidade=40 then
                precipitacao = 88
            end if

            'Jacarezinho	
            if cidade=41 then
                precipitacao = 147
            end if

            'Paranagu�	
            if cidade=42 then
                precipitacao = 96
            end if

            'Ponta Grossa	
            if cidade=43 then
                precipitacao = 142
            end if

            'Alto Itatiaia	
            if cidade=44 then
                precipitacao = 109
            end if

            'Alto Teres�polis	
            if cidade=45 then
                precipitacao = 131
            end if

            'Cabo Frio	
            if cidade=46 then
                precipitacao = 123
            end if

            'Campos	
            if cidade=47 then
                precipitacao = 87
            end if

            'km 47 - Rodovia Presidente Dutra	
            if cidade=48 then
                precipitacao = 109
            end if

            'Niter�i	
            if cidade=49 then
                precipitacao = 98
            end if

            'Nova Friburgo	
            if cidade=50 then
                precipitacao = 145
            end if

            'Petr�polis	
            if cidade=51 then
                precipitacao = 142
            end if

            'Pinheiral	
            if cidade=52 then
                precipitacao = 84
            end if

            'Resende	
            if cidade=53 then
                precipitacao = 88
            end if

            'Rio de Janeiro (Bangu)	
            if cidade=54 then
                precipitacao = 115
            end if

            'Rio de Janeiro (Ipanema)	
            if cidade=55 then
                precipitacao = 144
            end if

            'Rio de Janeiro (Jacarepagu�)	
            if cidade=56 then
                precipitacao = 126
            end if

            'Rio de Janeiro (Jardim Bot�nico)	
            if cidade=57 then
                precipitacao = 107
            end if

            'Rio de Janeiro (Pra�a Saenz Pe�a)	
            if cidade=58 then
                precipitacao = 129
            end if

            'Rio de Janeiro (Pra�a XV)	
            if cidade=59 then
                precipitacao = 103
            end if

            'Rio de Janeiro (Santa Cruz)	
            if cidade=60 then
                precipitacao = 136
            end if

            'Santa Maria Madalena	
            if cidade=61 then
                precipitacao = 142
            end if

            'Teres�polis	
            if cidade=62 then
                precipitacao = 120
            end if

            'Vassouras	
            if cidade=63 then
                precipitacao = 100
            end if

            'Volta Redonda	
            if cidade=64 then
                precipitacao = 83
            end if

            'Natal	
            if cidade=65 then
                precipitacao = 150
            end if

            'Porto Velho	
             if cidade=66 then
                precipitacao = 107
            end if

            'Alegrete	
            if cidade=67 then
                precipitacao = 75
            end if

            'Bag�	
            if cidade=68 then
                precipitacao = 88
            end if

            'Caxias do Sul	
            if cidade=69 then
                precipitacao = 141
            end if

            'Cruz Alta	
            if cidade=70 then
                precipitacao = 73
            end if

            'Encruzilhada	
            if cidade=71 then
                precipitacao = 142
            end if

            'Ira�	
            if cidade=72 then
                precipitacao = 90
            end if

            'Passo Fundo	
            if cidade=73 then
                precipitacao = 144
            end if

            'Porto Alegre	
            if cidade=74 then
                precipitacao = 123
            end if

            'Rio Grande	
            if cidade=75 then
                precipitacao = 88
            end if

            'Santa Maria	
            if cidade=76 then
                precipitacao = 147
            end if

            'Santa Vit�ria do Palmar	
            if cidade=77 then
                precipitacao = 142
            end if

            'S�o Luiz Gonzaga	
            if cidade=78 then
                precipitacao = 86
            end if

            'Uruguaiana	
            if cidade=79 then
                precipitacao = 126
            end if

            'Viam�o	
            if cidade=80 then
                precipitacao = 142
            end if

            'Blumenau	
            if cidade=81 then
                precipitacao = 144
            end if

            'Florian�polis	
            if cidade=82 then
                precipitacao = 150
            end if

            'S�o Francisco do Sul	
            if cidade=83 then
                precipitacao = 136
            end if

            'Aracaju	
            if cidade=84 then
                precipitacao = 147
            end if

            'Avar�	
            if cidade=85 then
                precipitacao = 125
            end if

            'Bauru	
            if cidade=86 then
                precipitacao = 150
            end if

            'Campos do Jord�o	
            if cidade=87 then
                precipitacao = 125
            end if

            'Lins	
            if cidade=88 then
                precipitacao = 147
            end if

            'Piracicaba	
            if cidade=89 then
                precipitacao = 147
            end if

            'Santos	
            if cidade=90 then
                precipitacao = 90
            end if

            'Santos - Itapema	
            if cidade=91 then
                precipitacao = 103
            end if

            'S�o Carlos	
            if cidade=92 then
                precipitacao = 101
            end if

            'S�o Paulo (Congonhas)	
            if cidade=93 then
                precipitacao = 136
            end if

            'S�o Paulo (Mirante Santana)	
            if cidade=94 then
                precipitacao = 104
            end if

            'S�o Sim�o	
            if cidade=95 then
                precipitacao = 121
            end if

            'Taubat�	
            if cidade=96 then
                precipitacao = 104
            end if

            'Tupi	
            if cidade=97 then
                precipitacao = 116
            end if

            'Ubatuba	
            if cidade=98 then
                precipitacao =  120
            end if



            '-------------------------------    
                
            %>

            <%

            A = Int(comprimento/3)
            B = roundUp((comprimento-(A*3)))   
            C = FormatNumber((area/precipitacao),0)

            %>


            <table style="width:100%;margin-top:10px">
            <tr style="text-align:center;font-size:1.1em;font-weight:bold;background-color:#efefef">
                <td style="height:40px;width:30%">Item</td>
                <td style="height:40px;width:15%">C�digo</td>
                <td style="height:40px;width:15%">Quantidade</td>
                <td style="height:40px;width:20%">Link</td>
                <td style="height:40px;width:20%">Observa��o</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Calha de 3 m</td>
                <td style="height:40px;width:15%">CAL/CK</td>
                <td style="height:40px;width:15%"><%= A %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/barra-da-calha-3m-branca-astra-cal-ck/p?idsku=2056" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>


            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Calha de 1 m</td>
                <td style="height:40px;width:15%">CAL/CK1</td>
                <td style="height:40px;width:15%"><%= B %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/barra-da-calha-1m-branca-astra-cal-ck1/p?idsku=2057" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Bocal de sa�da 100 mm</td>
                <td style="height:40px;width:15%">CAL/B100</td>
                <td style="height:40px;width:15%">

                    <% if C=0 then %>
                    1
                    <% else %>
                    <%= C %>
                    <% end if %>

                </td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/bocal-de-saida-da-calha-de-100mm-branco-astra/p" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Anti-folha para 100 mm</td>
                <td style="height:40px;width:15%">CAL/AF</td>
                <td style="height:40px;width:15%">


                    <% if C=0 then %>
                    1
                    <% else %>
                    <%= C %>
                    <% end if %>

                </td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/anti-folha-para-bocal-de-saida-de-calha-120x135mm-astra/p?idsku=2051" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">&nbsp;</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Emenda com veda��o</td>
                <td style="height:40px;width:15%">CAL/EMC</td>
                <td style="height:40px;width:15%"><%= A+B-1 %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/emenda-da-calha-com-vedacao-branco-astra/p?idsku=2059" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">Op��o (com ou sem veda��o)</td>
            </tr>
            </table>


            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Suporte fixador</td>
                <td style="height:40px;width:15%">CAL/SU</td>
                <td style="height:40px;width:15%"><%= A*5+B*2 %></td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/suporte-de-fixacao-de-calha-branco-astra/p?idsku=2065
" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">Op��o (com ou sem veda��o)</td>
            </tr>
            </table>

            <table style="width:100%;border-bottom:1px #ccc dotted">
            <tr style="text-align:center;font-size:1.1em;color:#000">
                <td style="height:40px;width:30%">Cabeceira (par)</td>
                <td style="height:40px;width:15%">CAL/CAB</td>
                <td style="height:40px;width:15%">1</td>
                <td style="height:40px;width:20%"><a href="https://loja.astra-sa.com/cabeceira-para-calha--par--branco-astra/p?idsku=2054" style="font-weight:bold">Loja</a> <img src="images/glifo.gif" alt="imagem Glifo" /></td>
                <td style="height:40px;width:20%">M�nimo � 1 (um)</td>
            </tr>
            </table>


          

          
            <% end if %>


           
            <!-- topo -->	
			<div class="top"><a href="javascript:scrollToTop()"><img alt="seta Topo" src="images/seta-topo.png" /></a></div>




            <h2 style="margin-top:30px">Considera��es:</h2>		
                
            <table style="font-size:1.1em">
            <tr style="vertical-align:top">
                <td style="font-weight:bold;width:30px;text-align:center">1.</td>
                <td>

                    <div style="font-weight:bold">Instala��o</div>

                    <div>A Astra � fabricante dos produtos que formam o sistema de calha. Para instala��o,  � necess�rio  contratar um profissional especializado. Caso pretenda instalar a calha por conta pr�pria, consulte o manual de instala��o.</div>

                            

                </td>
            </tr>
            </table>	

 <table style="font-size:1.1em;margin-top:30px">
            <tr style="vertical-align:top">
                <td style="font-weight:bold;width:30px;text-align:center">2.</td>
                <td>

                    <div style="font-weight:bold">Onde Comprar</div>

                    <div>A Astra n�o comercializa seus produtos diretamente para o consumidor final. Para saber o ponto de venda mais pr�ximo de sua
resid�ncia, preencha o <a href="calhas.html#4">formul�rio</a> ou entre em contato atrav�s do 0800 160 5051 ou <a href="mailto:sac@astra-sa.com">sac@astra-sa.com</a>.</div>
        

                </td>
            </tr>
            </table>



            <table style="font-size:1.1em;margin-top:30px">
            <tr style="vertical-align:top">
                <td style="font-weight:bold;width:30px;text-align:center">3.</td>
                <td>

                    <div style="font-weight:bold">Para telhados de 1 queda</div>

                    <div>O c�lculo da Astra baseia-se em um telhado com queda simples. Caso tenha mais de uma queda, fazer o c�lculo para cada queda d��gua. <a href="https://youtu.be/8WgzypzbQNQ" target="_blank" rel="nofollow">Assista ao v�deo</a> <img src="images/icone-glifo.gif" alt="" /> para saber como calcular.</div>
        

                </td>
            </tr>
            </table>



                

            <!-- 4 /////////////////////// -->
            <table style="font-size:1.1em;margin-top:30px" border="0">
            <tr style="vertical-align:top">
                <td style="font-weight:bold;width:30px;text-align:center">4.</td>
                <td>

                    <div style="font-weight:bold">Suportes</div>
                    <div>Quando se usa o suporte prolongador torcido (1) ou o reto (2):</div>


                   
                    <table>
                    <tr style="vertical-align:top">
                        <td style="width:50%">


                                <!-- 1 -->
                                <div style="margin:30px 0"><img src="images/calhas-prologandor-torcido.png" alt="Suporte Prologador Torcido" style="width:385px;height:289px"/></div>

                              

                        </td>


                        <td style="width:50%">


                                <!-- 2 -->
                                <div style="margin:30px 0"><img src="images/calhas-prolongador-reto.png" alt="Suporte Prologador Reto" style="width:385px;height:289px"/></div>

                               

                        </td>
                    </tr>
                    </table>
                    
                  


                    <div><strong>Prolongador torcido:</strong> deve ser usado para fixa��o na lateral do caibro  e preso na calha atrav�s do suporte fixador.</div>

                    <div style="padding-top:20px"><strong>Prolongador reto:</strong> deve ser usado para fixa��o na telha (consultar fabricante da telha) ou em estruturas que n�o possuem beiral (tabeira), e preso na calha atrav�s do suporte fixador.</div>


                    <div style="padding-top:20px"><strong>Suporte fixador:</strong> nos casos de utiliza��o do suporte prolongador reto ou torcido, a quantidade de suporte fixador � a mesma. Vale destacar que dificilmente ser�o utilizados os dois tipos de suporte prolongadores para o mesmo telhado. </div>


                </td>
            </tr>
            </table>


            <!-- 5 ////////////////////// -->

            <table style="font-size:1.1em;margin-top:30px" border="0">
            <tr style="vertical-align:top">
                <td style="font-weight:bold;width:30px;text-align:center">5.</td>
                <td>

                    <div style="font-weight:bold">Itens Adicionais:</div>

                   
                    <div>O c�lculo da Astra baseia-se em um telhado com queda simples e n�o considera telhado com beiral. Dependendo do projeto, voc� vai precisar tamb�m de: esquadro interno (1), esquadro externo (2), joelho frontal (3), joelho lateral (4), adaptador para condutor (5). Recomenda-se utilizar o joelho frontal no condutor para direcionar o fluxo de �gua. Estes itens n�o s�o considerados neste c�lculo.</div>



                    <table>
                    <tr style="vertical-align:top">
                        <td style="width:50%">


                                <!-- 1 -->
                                <div style="margin:30px 0"><img src="images/calhas-esquadro-interno.png" alt="Esquadro Interno" style="width:385px;height:289px"/></div>

                              

                        </td>


                        <td style="width:50%">


                                <!-- 2 -->
                                <div style="margin:30px 0"><img src="images/calhas-esquadro-externo.png" alt="Esquadro Externo" style="width:385px;height:289px"/></div>

                               

                        </td>
                    </tr>
                    </table>




                    <div style="font-weight:bold">Joelho frontal e lateral</div>


                    <table>
                    <tr style="vertical-align:top">
                        <td style="width:50%">


                                <!-- 1 -->
                                <div style="margin:30px 0"><img src="images/calhas-joelho-frontal.png" alt="Joelho Frontal" style="width:385px;height:289px"/></div>

                              

                        </td>


                        <td style="width:50%">


                                <!-- 2 -->
                                <div style="margin:30px 0"><img src="images/calhas-joelho-lateral.png" alt="Joelho Lateral" style="width:385px;height:289px"/><</div>

                               

                        </td>
                    </tr>
                    </table>




                    <div style="font-weight:bold">Adaptador</div>

                    <div>O adaptador tem a fun��o de adaptar o condutor  para um tubo de � 75 mm ou  para o condutor:</div>

                    <table>
                    <tr style="vertical-align:top">
                        <td style="width:50%">


                                <!-- 1 -->
                                <div style="margin:30px 0"><img src="images/calhas-tubo-75mm.png" alt="Parafusos e Rebites" style="width:385px;height:289px"/></div>

                              

                        </td>


                        <td style="width:50%">
                            
                            &nbsp;                               

                        </td>
                    </tr>
                    </table>
                   

                

                </td>
            </tr>
            </table>	


                
            <table style="font-size:1.1em">
            <tr style="vertical-align:top">
                <td style="font-weight:bold;width:30px;text-align:center">6.</td>
                <td>

                    <div style="font-weight:bold">Bocal de Sa�da de 75 mm (Op��es):</div>

                    <div>Os itens condutor de 3 m, conector do condutor e abra�adeira do condutor podem ser substitu�dos por outros modelos do mercado.</div>

                    <div style="padding-top:20px">Para a descida do bocal de 75 mm pode-se usar:</div> 
                    <div>- condutor de 3 m, conector do condutor e abra�adeira do condutor</div>
                    <div>- tubo de esgoto PVC 75 mm (consultar outros fabricantes)</div>


                    <p>Os condutores de descida da Astra s�o calculados para ficarem sim�tricos no final da instala��o.</p>

                </td>
            </tr>
            </table>	



            <table style="font-size:1.1em;margin-top:30px">
            <tr style="vertical-align:top">
                <td style="font-weight:bold;width:30px;text-align:center">7.</td>
                <td>

                    <div style="font-weight:bold">Bocal de Sa�da de 100 mm (Op��es):</div>

                    <div>A Astra n�o possui  condutor de 3 m, conector do condutor e abra�adeira do condutor para  o bocal de sa�da de 100 mm. Neste caso,  procure por outros modelos existentes no mercado, como tubo de esgoto PVC 100 mm.</div>


                </td>
            </tr>
            </table>	



            <table style="font-size:1.1em;margin-top:30px">
            <tr style="vertical-align:top">
                <td style="font-weight:bold;width:30px;text-align:center">8.</td>
                <td>

                    <div style="font-weight:bold">Informa��es Adicionais:</div>

                    <div>N�o � necess�rio colocar um peda�o da barra da calha entre o bocal e a cabeceira quando o bocal de sa�da for instalado no final da calha, pois a cabeceira j� se adapta direto no bocal de sa�da:</div>

                    <div style="margin:30px 0 30px 0"><img src="images/calhas-cabeceira.png" alt="Cabeceira"/></div>

                    <div>� necess�ria a instala��o de um <strong>suporte fixador</strong> a cada 60 cm no m�ximo. Dist�ncias maiores podem comprometer a estabilidade da instala��o:</div>


                    <div style="margin:30px 0 30px 0"><img src="images/calhas-suporte-fixador.png" alt="Suporte fixador"/></div>


                    <div>� necess�ria a instala��o de uma <strong>abra�adeira</strong> a cada 1,5 m:</div> 

                    <div style="margin:30px 0 30px 0"><img src="images/calhas-abracadeiras.png" alt="Abra�adeiras"/></div>





                </td>
            </tr>
            </table>	
                
          

          
		

            <!-- topo -->	
			<div class="top"><a href="javascript:scrollToTop()"><img alt="seta Topo" src="images/seta-topo.png" /></a></div>


			</td>
			
	
		</tr>
		</table>

				
		
		
		
		</div> <!-- FIM DA TABELA -->


		
		</div>  <!-- FIM DA TEXTO -->


		
	</div>  <!-- FIM DA CONTEUDO -->

	

	
	</div> <!-- FIM DO CONTEINER -->

	
		
	
		
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/24397813.js"></script>
<!-- End of HubSpot Embed Code -->
<script src="https://plugin.handtalk.me/web/latest/handtalk.min.js"></script>
<script>
 var ht = new HT({
 token: "7b1d69a64d10ed3af5b16cfbb9129c7e",
 avatar: "MAYA",
 });
</script>

</body>
</html>