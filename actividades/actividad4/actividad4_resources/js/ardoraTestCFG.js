//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=3;
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
var timeOnMessage=2; messageOk="Excelente"; messageTime="Se acabó el tiempo"; messageError="No ha completado todas las preguntas"; messageErrorG="No ha completado todas las preguntas"; messageAttempts="Se acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. Si se va a asignar un valor numérico a una variable, este se debe encerrar entre comillas","2. No es necesario usar un punto y coma para cerrar la última línea de un bloque de PHP","3. No hay manera de incluir código PHP dentro de un documento HTML","4. PHP requiere de un servidor web que interprete este código","5. El tipo de cada variable se determina teniendo en cuenta la información que esta contiene","6. Para declarar una variable en PHP se establece el tipo y nombre de variable","7. Un bloque de código PHP siempre va entre <!php y ¡>","8. Las instrucciones en PHP se separan con punto y coma (;)","9. PHP requiere de programas especiales para su programación","10. PHP es un lenguaje de programación de código abierto"];
var answers1=["MWEuIEZhbHNv","MGIuIFZlcmRhZGVybw"];
var answers2=["MWIuIFZlcmRhZGVybw","MGEuIEZhbHNv"];
var answers3=["MWEuIEZhbHNv","MGIuIFZlcmRhZGVybw"];
var answers4=["MWIuIFZlcmRhZGVybw","MGEuIEZhbHNv"];
var answers5=["MWIuIFZlcmRhZGVybw","MGEuIEZhbHNv"];
var answers6=["MWEuIEZhbHNv","MGIuIFZlcmRhZGVybw"];
var answers7=["MWEuIEZhbHNv","MGIuIFZlcmRhZGVybw"];
var answers8=["MWIuIFZlcmRhZGVybw","MGEuIEZhbHNv"];
var answers9=["MWEuIEZhbHNv","MGIuIFZlcmRhZGVybw"];
var answers10=["MWIuIFZlcmRhZGVybw","MGEuIEZhbHNv"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10];
var err=["","","","","","","","","",""];
var ima=["","","","","","","","","",""];
var mp4=["","","","","","","","","",""];
var ogv=["","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad4_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
var r_ans=[];var r_pos=[];var r_checks=[];var minSuccesses=10;
