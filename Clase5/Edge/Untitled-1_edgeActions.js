/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Logo}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var mySymbolObject = sym.getSymbol("Logo");
         
         mySymbolObject.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Logo'
   (function(symbolName) {   
   
   })("Logo");
   //Edge symbol end:'Logo'

})(jQuery, AdobeEdge, "EDGE-899028");