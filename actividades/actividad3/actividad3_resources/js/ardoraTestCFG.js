//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=5;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=50; scoreInc=5; scoreDec=2
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar actividad";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=100;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Excelente"; messageTime="Se acabo el tiempo"; messageError="Se acabaron los intentos"; messageErrorG="Se acabaron los intentos"; messageAttempts="Supero los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. Identificar la cardinalidad del enunciado: En un concurso de arte, cada artista participante ha creado una obra y a su vez cada obra ha sido creada por un solo artista","2. Identificar el atributo principal de la entidad Salón","3. Identificar el atributo principal de la entidad Empresa","4. Identificar el atributo principal de la entidad Casa","5. Identificar la cardinalidad del enunciado: Una persona tiene una sola nacionalidad pero la misma nacionalidad la pueden compartir varias personas","6. Identificar la cardinalidad del enunciado: Un actor de cine ha trabajado en una o más películas a lo largo de su carrera y en cada película han trabajado un reparto de actores","7. Identificar la cardinalidad del enunciado: Un cliente puede poseer diferentes cuentas de correo, pero cada cuenta de correo pertenece a un cliente específico","8. Identificar el atributo principal de la entidad Articulo","9. Identificar el atributo principal de la entidad Factura","10. Identificar la cardinalidad del enunciado: Un paciente puede ser atendido por un médico diferente cada vez que va a consulta, y a su vez un médico atiende uno o más paciente"];
var answers1=["MWEuIFVubyBhIFVubw","MGIuIFVubyBhIE11Y2hvcw","MGMuIE11Y2hvcyBhIE11Y2hvcw"];
var answers2=["MWIuIEPzZGlnbyBkZSBzYWzzbg","MGEuIFViaWNhY2nzbg","MGMuIENhcGFjaWRhZA"];
var answers3=["MWEuIE5JVA","MGIuIE5vbWJyZWRlIGVtcHJlc2E","MGMuIFRpcG8gZGUgZW1wcmVzYQ"];
var answers4=["MWMuIFJlZmVyZW5jaWEgY2F0YXN0cmFs","MGEuIERpcmVjY2nzbg","MGIuIE1ldHJvcyBjdWFkcmFkb3M"];
var answers5=["MWIuIFVubyBhIE11Y2hvcw","MGEuIFVubyBhIFVubw","MGMuIE11Y2hvcyBhIE11Y2hvcw"];
var answers6=["MWMuIE11Y2hvcyBhIE11Y2hvcw","MGEuIFVubyBhIFVubw","MGIuIFVubyBhIE11Y2hvcw"];
var answers7=["MWIuIFVubyBhIE11Y2hvcw","MGEuIFVubyBhIFVubw","MGMuIE11Y2hvcyBhIE11Y2hvcw"];
var answers8=["MWMuIEPzZGlnbyBkZSBiYXJyYXM","MGEuIERlc2NycGNp824","MGIuIFByZWNpbw"];
var answers9=["MWIuIE76bWVybyBmYWN0dXJh","MGEuIE5vbWJyZSBwcm9kdWN0bw","MGMuIENhbnRpZGFk"];
var answers10=["MWMuIE11Y2hvcyBhIE11Y2hvcw","MGEuIFVubyBhIFVubw","MGIuIFVubyBhIE11Y2hvcw"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10];
var err=["No es la respuesta","No es la respuesta","No es la respuesta","No es la respuesta","No es la respuesta","No es la respuesta","No es la respuesta","No es la respuesta","No es la respuesta","No es la respuesta"];
var ima=["","","","","","","","","",""];
var mp4=["","","","","","","","","",""];
var ogv=["","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad3_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
var r_ans=[];var r_pos=[];var r_checks=[];var minSuccesses=10;
