'use strict'

function fmt(o){
let s=o.id+' - '+o.customer
var items=o.items
for(var i=0;i<items.length;i++){s=s+'\n  '+items[i].qty+'x '+items[i].name}
let t=0
for(var j=0;j<items.length;j++){t+=items[j].qty*items[j].price}
s=s+'\nTotal: '+t
return s
}

// helper
function shortId(id){return id.slice(0,8)}

module.exports={fmt:fmt,shortId:shortId}
