var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productModel=document.getElementById("productModel");
var productDec=document.getElementById("productDec");
var productList=[];
var UpdateProductBtn = document.getElementById("UpdateProductBtn");
var AddProductBtn = document.getElementById("AddProductBtn");
var indexProduct;
if(localStorage.getItem("ProductList")!=null){

  productList= JSON.parse(localStorage.getItem("ProductList"))
  display(productList)
  console.log(productList)
}




 function addproduct(){

  if(validateProductName() && validateProductPrice() &&  validateProductModel() && validateProductDec() ==true){
   var product ={
   name:productName.value,
   price:productPrice.value,
   model:productModel.value,
   dec:productDec.value,
   }
  
   productList.push(product)
   localStorage.setItem("ProductList",JSON.stringify(productList))
   display(productList)
  

   clearForm()
  }
}

function display(products){
var cartona = ``;
for(var i= 0 ;i< products.length;i++){
 cartona+=`<td>${i+1}</td>
 <td>${products[i].name}</td>
 <td>${products[i].price}</td>
 <td>${products[i].model}</td>
 <td>${products[i].dec}</td>
 <td><button onclick="deleteProduct(${i})" class=" btn btn-warning ">Delete</button></td>
 <td><button onclick="getUpdateProduct(${i})" class=" btn btn-danger ">Update</button></td>
 </tr>
 
`
}
document.getElementById("Tbody").innerHTML=cartona
}


function clearForm(){

  productName.value='';
productPrice.value='';
  productModel.value='';
productDec.value='';

}


function deleteProduct(index){
productList.splice(index,1)
localStorage.setItem("ProductList",JSON.stringify(productList))
display(productList)

}




function searchItem(term){
var foundeditem=[];
for(var i=0 ;i<productList.length;i++){
if(productList[i].name.toLowerCase().includes(term.toLowerCase())==true){
foundeditem.push(productList[i])
}

}

display(foundeditem)

}



function getUpdateProduct(term){
indexProduct=term;

  AddProductBtn.classList.add("d-none")
  UpdateProductBtn.classList.replace("d-none","d-block")
productName.value=productList[term].name;
productPrice.value=productList[term].price;
productModel.value=productList[term].model;
productDec.value=productList[term].dec;


}


function Updateproduct(){

 
  
  productList[ indexProduct].name = productName.value;
  productList[ indexProduct].price = productPrice.value;
  productList[ indexProduct].model = productModel.value;
  productList[ indexProduct].dec = productDec.value;
 localStorage.getItem("Productlist",JSON.stringify(productList))
display(productList)
clearForm()
AddProductBtn.classList.remove("d-none")
UpdateProductBtn.classList.replace("d-block","d-none")

}




function validateProductName(){
var regex=/^[A-Z][a-z]{3,10}$/;

if(regex.test(productName.value)==true){
  productName.style.border="none";
  document.getElementById("checkName").classList.add("d-none")

  return true;
}else{
  productName.style.border="5px solid red";
document.getElementById("checkName").classList.remove("d-none")

  return false;
}
}


function validateProductModel(){
  var regex=/^(tv|laptop|mobile)$/i;
  
  if(regex.test(productModel.value)==true){
    productModel.style.border="none";
    document.getElementById("checkModel").classList.add("d-none")
  
    return true;
  }else{
    productModel.style.border="5px solid red";
  document.getElementById("checkModel").classList.remove("d-none")
  
    return false;
  }
  }
  
function validateProductDec(){
  var regex=/^[a-zA-Z0-9 $-_]{50,}$/i;
  
  if(regex.test(productDec.value)==true){
    productDec.style.border="none";
    document.getElementById("checkDec").classList.add("d-none")
  
    return true;
  }else{
    productDec.style.border="5px solid red";
  document.getElementById("checkDec").classList.remove("d-none")
                          
    return false;
  }
  }



  function validateProductPrice(){
    var regex=/^([1-9][0-9]{3}|1000)$/i;
    
    if(regex.test(productPrice.value)==true){
      productPrice.style.border="none";
      document.getElementById("checkPrice").classList.add("d-none")
    
      return true;
    }else{
      productPrice.style.border="5px solid red";
    document.getElementById("checkPrice").classList.remove("d-none")
    
      return false;
    }
    }