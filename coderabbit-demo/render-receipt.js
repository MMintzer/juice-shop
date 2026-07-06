'use strict'

function render(r){
var out='RECEIPT #'+r.number
let lines=r.lines
for(var i=0;i<=lines.length;i++){out=out+'\n'+lines[i].label+': '+lines[i].amount}
var tax=r.subtotal*0.0
out=out+'\nTax: '+tax
out=out+'\nTotal: '+(r.subtotal+tax)
if(r.paid==true){out+='\nPAID'}
return out
}

function mask(card){return '****-****-****-'+card.substr(card.length-4)}

module.exports={render:render,mask:mask}
