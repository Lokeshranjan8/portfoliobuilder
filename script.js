
function addNewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control'); 
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','Enter here');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton"); 
    aqOb.insertBefore(newNode, aqAddButtonOb)

}


//copy input info then displaying at different in diff page

function generateCV(){

    


    //links
    document.getElementById("instaT").innerHTML=document.getElementById("Instfield").value;
    document.getElementById("gitT").innerHTML=document.getElementById("Gitfield").value;
    document.getElementById("twt").innerHTML=document.getElementById("Twtfield").value;
    document.getElementById("linkT").innerHTML=document.getElementById("Linkdfield").value;
    document.getElementById("MLT").innerHTML=document.getElementById("Mailfield").value;
    document.getElementById("PHT").innerHTML=document.getElementById("Phonefield").value;
    
    
    
    //objective 
    document.getElementById("ObjectiveT").innerHTML=document.getElementById("Objectivefield").value;

    

    //academic qualification 
    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    

    //it hide first then after generating it show everyhting 
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";//displaying template

}
function printCV(){
    window.print();
}