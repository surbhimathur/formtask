


function display()
{
   
   var first_name=document.getElementById("myform").elements.namedItem("firstname").value;
    document.getElementById("fname").innerHTML=first_name;
    
    var last_name=document.getElementById("myform").elements.namedItem("lastname").value;
    document.getElementById("lname").innerHTML=last_name;
    
    var address=document.getElementById("myform").elements.namedItem("address").value;
    document.getElementById("add").innerHTML=address;
    
    
   
    if(isNaN(document.getElementById("myform").elements.namedItem("pincode").value))
    {
        document.getElementById("numloc").innerHTML="enter only numeric value";
    }
    else{
        var pincode=document.getElementById("myform").elements.namedItem("pincode").value;
    document.getElementById("pin").innerHTML=pincode;
    }
    
    var state=document.getElementById("myform").elements.namedItem("state").value;
    document.getElementById("sta").innerHTML=state;
    
    var country=document.getElementById("myform").elements.namedItem("country").value;
    document.getElementById("coun").innerHTML=country;
    
    var gender=document.getElementById("myform").elements.namedItem("gender").value;
    document.getElementById("gen").innerHTML=gender;
    var data=[];
    var cake=document.getElementById("cake");
    var pasta=document.getElementById("pasta");
    var pizza=document.getElementById("pizza");
    var icecream=document.getElementById("ice-cream");
    var cookies=document.getElementById("cookies");
    if(cake.checked)
    {
        data.push(cake.value);
        console.log(data);
    }
    if(pasta.checked)
    {
        data.push(pasta.value);
    }
    if(pizza.checked)
    {
        data.push(pizza.value);
    }
    if(cookies.checked)
    {
        data.push(cookies.value);
    }
    if(icecream.checked)
    {
        data.push(icecream.value);
    }
    if(data.length>0)
    {
        document.getElementById("foo").innerHTML=data;
    }
    document.getElementById("myform").reset();
    
}
display();
