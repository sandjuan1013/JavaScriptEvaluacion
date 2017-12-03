var display = document.getElementById("display")
var operandos = {
            operador: "",
            operadorAnt: "",
            numAnt: 0
        }
//objeto global//
var calculadora = {
  init: function(){
    var self = this

    var on = document.getElementById('on')
      on.addEventListener("click",function(){
        display.innerHTML = "0"
        operandos.numAnt = 0
        operandos.operador = ""
        operandos.operadorAnt = ""
      })
      on.addEventListener("mousedown", function(){
        on.setAttribute("style","transform:scale(0.95,0.95)");
      })
      on.addEventListener("mouseup", function(){
        on.setAttribute("style","transform:scale(1.0)");
      })
    var sign = document.getElementById('sign')
      sign.addEventListener("click", function(){
        self.signo()
      })
      sign.addEventListener("mousedown", function(){
        sign.setAttribute("style","transform:scale(0.95,0.95)");
      })
      sign.addEventListener("mouseup", function(){
        sign.setAttribute("style","transform:scale(1.0)");
      })
    var raiz = document.getElementById('raiz')
      raiz.addEventListener("click", function(){
        display.innerHTML= Math.sqrt(parseFloat(display.innerHTML))
        acomodarDisplay()

      })
      function formatoNumero(numero){
        var redondeo = 0
          }

      raiz.addEventListener("mousedown",function(){
        raiz.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      raiz.addEventListener("mouseup",function(){
        raiz.setAttribute("style", "transform:scale(1.0)")
      })
    var div = document.getElementById('dividido')
      div.addEventListener("click",function(){
        self.operandos("/")
      })
      div.addEventListener("mousedown",function(){
        div.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      div.addEventListener("mouseup",function(){
        div.setAttribute("style", "transform:scale(1.0)")
      })
    var siete = document.getElementById('7')
      siete.addEventListener("click",function(){
        self.numero('7')
      })
      siete.addEventListener("mousedown", function(){
        siete.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      siete.addEventListener("mouseup", function(){
        siete.setAttribute("style", "transform:scale(1.0)")
      })
    var ocho = document.getElementById('8')
      ocho.addEventListener("click",function(){
        self.numero("8")
      })
      ocho.addEventListener("mousedown",function(){
        ocho.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      ocho.addEventListener("mouseup",function(){
        ocho.setAttribute("style", "transform:scale(1.0)")
      })
    var nueve = document.getElementById('9')
      nueve.addEventListener("click",function(){
        self.numero("9")
      })
      nueve.addEventListener("mousedown",function(){
        nueve.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      nueve.addEventListener("mouseup",function(){
        nueve.setAttribute("style", "transform:scale(1.0)")
      })
    var por = document.getElementById('por')
      por.addEventListener("click",function(){
        self.operandos("*")
      })
      por.addEventListener("mousedown",function(){
        por.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      por.addEventListener("mouseup",function(){
        por.setAttribute("style", "transform:scale(1.0)")
      })
    var cuatro = document.getElementById('4')
      cuatro.addEventListener("click",function(){
        self.numero("4")
      })
      cuatro.addEventListener("mousedown",function(){
        cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      cuatro.addEventListener("mouseup",function(){
        cuatro.setAttribute("style", "transform:scale(1.0)")
      })
    var cinco = document.getElementById('5')
      cinco.addEventListener("click",function(){
        self.numero("5")
      })
      cinco.addEventListener("mousedown",function(){
        cinco.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      cinco.addEventListener("mouseup",function(){
        cinco.setAttribute("style", "transform:scale(1.0)")
      })
    var seis = document.getElementById('6')
      seis.addEventListener("click",function(){
        self.numero("6")
      })
      seis.addEventListener("mousedown",function(){
        seis.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      seis.addEventListener("mouseup",function(){
        seis.setAttribute("style", "transform:scale(1.0)")
      })
    var menos = document.getElementById('menos')
      menos.addEventListener("click",function(){
        self.operandos("-")
      })
      menos.addEventListener("mousedown",function(){
        menos.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      menos.addEventListener("mouseup",function(){
        menos.setAttribute("style", "transform:scale(1.0)")
      })
    var uno = document.getElementById('1')
      uno.addEventListener("click",function(){
        self.numero("1")
      })
      uno.addEventListener("mousedown",function(){
        uno.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      uno.addEventListener("mouseup",function(){
        uno.setAttribute("style", "transform:scale(1.0)")
      })
    var dos = document.getElementById('2')
      dos.addEventListener("click",function(){
        self.numero("2")
      })
      dos.addEventListener("mousedown",function(){
        dos.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      dos.addEventListener("mouseup",function(){
        dos.setAttribute("style", "transform:scale(1.0)")
      })
    var tres = document.getElementById('3')
      tres.addEventListener("click",function(){
        self.numero("3")
      })
      tres.addEventListener("mousedown",function(){
        tres.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      tres.addEventListener("mouseup",function(){
        tres.setAttribute("style", "transform:scale(1.0)")
      })
    var cero = document.getElementById('0')
      cero.addEventListener("click",function(){
        self.numero("0")
      })
      cero.addEventListener("mousedown",function(){
        cero.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      cero.addEventListener("mouseup",function(){
        cero.setAttribute("style", "transform:scale(1.0)")
      })
    var punto = document.getElementById('punto')
      punto.addEventListener("click",function(){
        self.numero(".")
      })
      punto.addEventListener("mousedown",function(){
        punto.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      punto.addEventListener("mouseup",function(){
        punto.setAttribute("style", "transform:scale(1.0)")
      })
    var igual = document.getElementById('igual')
      igual.addEventListener("click",function(){
        self.operandos("=")
      })
      igual.addEventListener("mousedown",function(){
        igual.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      igual.addEventListener("mouseup",function(){
        igual.setAttribute("style", "transform:scale(1.0)")
      })
    var mas = document.getElementById('mas')
      mas.addEventListener("click",function(){
        self.operandos("+")
      })
      mas.addEventListener("mousedown",function(){
        mas.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      mas.addEventListener("mouseup",function(){
        mas.setAttribute("style", "transform:scale(1.0)")
      })
  },
}

calculadora.init()
