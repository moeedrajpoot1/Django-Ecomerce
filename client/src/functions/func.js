



export const sale_cal=(price,onSale,discount)=>{
  let salePrice=0
  if(onSale){
    salePrice=(price * discount /100)
    salePrice=price-salePrice
    return salePrice.toFixed(2)
  }

}

export const addComma=(amount)=>{
return amount.toLocaleString()
}

export const rs_to_dollar=(price)=>{
 const dollar_rate=278.58
 const dollar=(price/dollar_rate)*100
 return dollar.toFixed(2)
}


