function saluto(){ /*parola chiave function+nome funzione+attributi da passare*/
    a=5; /*la si può non definire, la dichiara lui in automatico*/
    b="ciao solo ad alcuni";
    alert("Ciao!"); /*alla fine di ogni riga ; . Finchè non si dà ok non carica la pagina*/
    alert(b);
}
function sopra(obj){
    obj.innerHTML="MOuse sopra l'intestazione"; /*mettere nel tag html quello che gli dico di scrivere*/
    document.getElementById("r1").innerHTML="Riga A";
    document.getElementById("r2").innerHTML="Riga B";
}
function ripristino(obj){
    obj.innerHTML="Introduzione Javascript"; /*rimettere nel tag html il titolo di prima*/
    document.getElementById("r1").innerHTML="Riga 1";
    document.getElementById("r2").innerHTML="Riga 2";
}
function saluta(){
    var nome=document.getElementById("name").value;
    var cognome=document.getElementById("surname").value;
    var data=document.getElementById("birth").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var number=document.getElementById("number").value;
    alert("ciao "+nome+" "+cognome+" "+" nato il "+data+" con email "+email);
}
function verificapassword(){
    var passwordattesa=nome+"."+cognome;
    var password =document.getElementById("password").value;
    if(password==passwordattesa){
        alert("password corretta");
    }else{
        alert("password non e nome.cognome");
    }
}
function soprasopra(obj){
    obj.style.color="red";
}
function cambiafoto(obj){
    obj.src="./perry_parte2.webp";
}
function ripristinafoto(obj){
    obj.src="./Perry_the_Platypus.png";
}
function cambiareimm(obj){
    if(obj.src.includes("./Perry_the_Platypus.png")){
        obj.src="./perry_parte2.webp";
    }else{
        obj.src=="./Perry_the_Platypus.png"
    }
}
function stampasesso(){
    if(document.getElementById("sessoM").checked){
        alert("sei un maschio");
    }else if(document.getElementById("sessoF").checked){
        alert("sei una femmina");
    }else{
        alert("sei niente");
    }
}
function stampasport(){
    sport="";
    if(document.getElementById("calcio").checked){
        sport=sport+" calcio";
    }else if(document.getElementById("basket").checked){
        sport=sport+" basket";
    }if(document.getElementById("pallavolo").checked){
        sport=sport+" pallavolo";
    }
    alert(sport);
}
function stampacibo(aa){
    if(aa==1){
        alert(document.getElementById("selection").value);
        alert(document.getElementById("numerino").value);
    }else{
        document.getElementById("r1").innerHTML=document.getElementById("numerino").value;
    }
    
}