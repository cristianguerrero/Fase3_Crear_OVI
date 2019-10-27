//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=2;
var successes=0; successesMax=10; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar Actividad";
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
var goURLOk="_self"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. El modelo lógico es más entendible por una persona común","2. El modelo conceptual no depende de un sistema de gestión de base de datos en particular","3. La integridad es una característica que no es deseable en una base de datos","4. Es preferible administrar la información en un sistema de archivos en vez de un SGBD","5. La dificultad en el acceso a los datos tiene que ver principalmente con el hecho de que se puede presentar repetición de información","6. Una base de datos es similar a un almacén o bodega donde se almacena grandes cantidades de información","7. Las bases de datos son fáciles de implementar y poco costosas","8. La seguridad en los sistemas de bases de datos es necesaria para definir los usuarios que pueden acceder a la información.","9. Un SGBD es la Seguridad General en Bases de datos","10. Un sistema de información es la unidad mínima de información y además es atómico"];
var answers1=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers2=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers3=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers4=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers5=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers6=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers7=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers8=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers9=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers10=["MUZhbHNv","MFZlcmRhZGVybw"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10];
var err=["Incorrecto","Incorrecto","Incorrecto","Incorrecto","Incorrecto","Incorrecto","Incorrecto","Incorrecto","Incorrecto","Incorrecto"];
var ima=["","","","","","","","","",""];
var mp4=["","","","","","","","","",""];
var ogv=["","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad2_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
