window.onload = function() {
    document.getElementById("infoG").onclick = infoGeral;
    document.getElementById("despM").onclick = infoPredio;
    document.getElementById("despA").onclick = infoAp;
    document.getElementById("despS").onclick = saidaEntrada;
    document.getElementById("h1").onclick = infoAp;
    
}
function infoGeral() {;
    var prop = document.getElementById("prop");
    var ap = document.getElementById("ap");
    var mes = document.getElementById("mes");
    
    var p = prompt("Nome do Proprietadio: ");
    prop.innerText = p;

    var a = prompt("Apartamento: ");
    ap.innerText = a; 

    var m = prompt("Periodo Mes: ");
    mes.innerText = m;
};

function infoPredio() {
    var despDiaria = document.getElementById("despDiaria");
    var despGas = document.getElementById("despGas");
    var despAgua = document.getElementById("despAgua");
    var despLuz = document.getElementById("despLuz");
    var totdesp = document.getElementById("totdesp");

    var desD = parseFloat(prompt("Diaria do predio: "));
    despDiaria.innerText = "R$ " + desD.toFixed(2);

    var desG = parseFloat(prompt("Gasto de gas Predio: "));
    despGas.innerText = "R$ " + desG.toFixed(2);

    var desA = parseFloat(prompt("Gasto de agua Predio:"));
    despAgua.innerText = "R$ " + desA.toFixed(2);

    var desL = parseFloat(prompt("Gasto de Luz Predio: "));
    despLuz.innerText = "R$ " + desL.toFixed(2);

    var totd = (desD + desG + desA + desL).toFixed(2);
    totdesp.innerText = "R$ " + totd;
};
function infoAp() {
    var despDiariaAp = document.getElementById("despDiariaAp");
    var despGasAp = document.getElementById("despGasAp");
    var despAguaAp = document.getElementById("despAguaAp");
    var despLuzAp = document.getElementById("despLuzAp");
    var despReservaAp = document.getElementById("despReservaAp");
    var totdespAp = document.getElementById("totdespAp");

    var desDAp = parseFloat(prompt("Gasto com Diaria do Ap: "));
    despDiariaAp.innerText = "R$ " + desDAp.toFixed(2);

    var despGAp = parseFloat(prompt("Gasto com Gaz do Ap: "));
    despGasAp.innerText = "R$ " + despGAp.toFixed(2);

    var despAAp = parseFloat(prompt("Gasto com Agua do Ap: "));
    despAguaAp.innerText = "R$ " + despAAp.toFixed(2);

    var despLAp = parseFloat(prompt("Gasto com Luz do Ap: "));
    despLuzAp.innerText = "R$ " + despLAp.toFixed(2);

    var despRAp = parseFloat(prompt("Reserva do Ap: "));
    var totdAp = (desDAp + despGAp + despAAp + despLAp + despRAp).toFixed(2);
    totdespAp.innerText = "R$ " + totdAp ;
};
function saidaEntrada() {
    var precoLim = document.getElementById("prodLimp");
    var produto2 = document.getElementById("produto2");
    var precopro2= document.getElementById("precoprod2");
    var produto3 = document.getElementById("produto3");
    var precopro3= document.getElementById("precoprod3");
    var produto4 = document.getElementById("produto4");
    var precopro4= document.getElementById("precoprod4");
    var produto5 = document.getElementById("produto5");
    var precopro5= document.getElementById("precoprod5");
    var totSaida = document.getElementById("totSaida");

    var precoL = parseFloat(prompt("valor produto de limpeza: "));
    precoLim.innerText += precoL.toFixed(2);

    var x = precoL;
    var prod2 = prompt("Informe o produto 2");
    produto2.innerText = prod2;
    if(prod2 != ""){
        var precoP2 = parseFloat(prompt("valor produto 2: "));
        precopro2.innerText += precoP2.toFixed(2);
        x += precoP2;
    }

    var prod3 = prompt("Informe o produto 3");
    produto3.innerText = prod3;
    if(prod3 != ""){
        var precoP3 = parseFloat(prompt("valor produto 3: "));
        precopro3.innerText += precoP3.toFixed(2);
        x += precoP3;
    }
    
    var prod4 = prompt("Informe o produto 4");
    produto4.innerText = prod4;
    if(prod4 != "") {
        var precoP4 = parseFloat(prompt("valor produto 4: "));
        precopro4.innerText += precoP4.toFixed(2);
        x += precoP4;
    }
    var prod5 = prompt("Informe o produto 5");
    produto5.innerText = prod5;
    if(prod5 != "") {
        var precoP5 = parseFloat(prompt("valor produto 5: "));
        precopro5.innerText += precoP5.toFixed(2);
        x += precoP5;
    }

    var totS = x.toFixed(2);
    totSaida.innerText = "R$ " + totS;



    var resMesAnt = document.getElementById("resMesAnt");
    var entrada = document.getElementById("entrada");
    var saida = document.getElementById("saida");
    var totEntrada = document.getElementById("totEntrada");

    var resM = parseFloat(prompt("Saldo Reserva Mes Anterior: "));
    resMesAnt.innerText += resM.toFixed(2);
    
    saida.innerText += totS;

    var totEnt = (resM + 240)- totS;
    totEntrada.innerText += totEnt.toFixed(2);
    };