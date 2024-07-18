
function addNewWEField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById('we');
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV()
{
    //name
    let namefield = document.getElementById("nameField").value;
    
    let nameT1 = document.getElementById("nameT1");
    let nameT2 = document.getElementById("nameT2");

    nameT1.innerHTML=namefield;
    nameT2.innerHTML=namefield;

    //contact
    let contactfield = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");

    contactT.innerHTML=contactfield;


    //address
    let addfield = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");

    addressT.innerHTML=addfield;

    //hobbies
    let hobbiefield = document.getElementById("hobbieField").value;
    let hobbieT = document.getElementById("hobbieT");

    hobbieT.innerHTML=hobbiefield;

    //links
    let linkedfield = document.getElementById("linkedField").value;
    let liT = document.getElementById("liT");

    liT.innerHTML=linkedfield;

    document.getElementById("iT").innerHTML=document.getElementById("instaField").value;

    //Objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectField").value;

    //Work Experience

    let wes=document.getElementsByClassName("weField");

    let str="";

    for(let e of wes)
    {
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //Academic Qualification
    let aqs=document.getElementsByClassName("aqField");
    let str1="";
    for(let q of aqs)
        {
            str1 = str1 +`<li> ${q.value}</li>`;
        }
    document.getElementById("aqT").innerHTML = str1;



    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-template").style.display="block"



}

//PrintCV
function printCV()
{
    window.print();
}

