//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=2;
var score=0; scoreMax=6; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=100;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien"; messageTime="Fin del tiempo"; messageError="Error"; messageErrorG="Error"; messageAttempts="Sin intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkNQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Es un sistema de gestión de bases de datos incluido en el paquete ofimático de Microsofto Office</p>","<p>Gestor de base de datos cuya sigla en ingles se traslada a My Structured Query Language o Lenguaje de Consulta Estructurado</p>","<p>Es uno de los sistemas de bases de datos más completos, destacando el soporte de transacciones, estabilidad, escalabilidad, etc</p>","<p>Este es un ejemplo de representación de un diagrama lógico</p>","<p>Es un proyecto de código abierto el cual no es manejado por una empresa y/o persona, sino que es dirigido por una comunidad de desarrolladores</p>","<p>Este es un ejemplo de representación de un diagrama conceptual</p>"];
var iL=["","","","","",""];
var order=["","","","","",""]; orderR=["","","","","",""];indexR=0; indexL=0;
var cR=["","","","","",""]; ansRL=["Mg","NA","MA","NQ","MQ","Mw"];
var iR=["<div  align='center'><img src='actividad5_resources/media/emparejamiento-drag3.png'></div>","<div  align='center'><img src='actividad5_resources/media/emparejamiento-drag5.png'></div>","<div  align='center'><img src='actividad5_resources/media/emparejamiento-drag1.png'></div>","<div  align='center'><img src='actividad5_resources/media/emparejamiento-drag6.png'></div>","<div  align='center'><img src='actividad5_resources/media/emparejamiento-drag2.png'></div>","<div  align='center'><img src='actividad5_resources/media/emparejamiento-drag4.png'></div>"];
var auR=[3,5,1,6,2,4];
