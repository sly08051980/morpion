console.log("hello");



let joueur=0;
let coupJouer=[];
let verifierCaseTouteCocher = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];

let active=true;

document.querySelector('tbody').addEventListener('click', function(event) {
   if (active===true){
    let cellule = event.target;
    let recupererCellule = event.target.id;

    if (coupJouer.length==0) {
        coupJouer.push(recupererCellule);
   console.log(coupJouer);

    }else if(coupJouer.length>0){
        verfierCase(recupererCellule,coupJouer);

    }


 

    if (joueur===0 && cellule.innerHTML!="X" && cellule.innerHTML!="O"){


        cellule.innerHTML="X"
        console.log(cellule.innerHTML);
        joueur++;
        console.log(joueur);
        verifierGagnerligne(cellule);
        }else if (joueur===1 && cellule.innerHTML!="X" && cellule.innerHTML!="O"){


    cellule.innerHTML="O"
   
    console.log(cellule.innerHTML);
        joueur--;
        console.log(joueur);
        verifierGagnerligne(cellule);
     
    }

}});


    function verfierCase(recupererCellule,coupJouer) {

 
        if (!coupJouer.includes(recupererCellule)) {
            coupJouer.push(recupererCellule);
            console.log("Cellule ajoutée : " + recupererCellule);
            console.log(coupJouer);
            // console.log("verification"+verifierCaseTouteCocher.filter(e => coupJouer.includes(e)));

            if (verifierCaseTouteCocher.length == coupJouer.length){
                let bouton=document.querySelector('button');
                bouton.addEventListener('click',rejouer);

            }
        return true;
       
       
    }
   
}

function verifierGagnerligne() {
    let maTable = document.querySelector('tbody');
    for (let index = 0; index < 3; index++) {
        if (maTable.rows[index].cells[0].innerHTML === "O" && maTable.rows[index].cells[1].innerHTML === "O" && maTable.rows[index].cells[2].innerHTML === "O") {
            maTable.rows[index].cells[0].style.backgroundColor="green";
            maTable.rows[index].cells[1].style.backgroundColor="green";
            maTable.rows[index].cells[2].style.backgroundColor="green";
           active=false;
           
            console.log("gagner");
           
        }else if (maTable.rows[index].cells[0].innerHTML === "X" && maTable.rows[index].cells[1].innerHTML === "X" && maTable.rows[index].cells[2].innerHTML === "X") {
            maTable.rows[index].cells[0].style.backgroundColor="green";
            maTable.rows[index].cells[1].style.backgroundColor="green";
            maTable.rows[index].cells[2].style.backgroundColor="green";
            active=false;
            console.log("gagner");
       
    } else if(maTable.rows[0].cells[index].innerHTML==="O"&& maTable.rows[1].cells[index].innerHTML==="O" && maTable.rows[2].cells[index].innerHTML==="O"){
        maTable.rows[0].cells[index].style.backgroundColor="green";
        maTable.rows[1].cells[index].style.backgroundColor="green";
        maTable.rows[2].cells[index].style.backgroundColor="green";
        active=false;
        console.log("gagner");
    }else if(maTable.rows[0].cells[index].innerHTML==="X"&& maTable.rows[1].cells[index].innerHTML==="X" && maTable.rows[2].cells[index].innerHTML==="X"){
        maTable.rows[0].cells[index].style.backgroundColor="green";
        maTable.rows[1].cells[index].style.backgroundColor="green";
        maTable.rows[2].cells[index].style.backgroundColor="green";
        active=false;
        console.log("gagner");
    }else if(maTable.rows[0].cells[0].innerHTML==="O"&& maTable.rows[1].cells[1].innerHTML==="O"&& maTable.rows[2].cells[2].innerHTML==="O"){
        maTable.rows[0].cells[0].style.backgroundColor="green";
        maTable.rows[1].cells[1].style.backgroundColor="green";
        maTable.rows[2].cells[2].style.backgroundColor="green";
        active=false;
        console.log("gagner");
    }else if(maTable.rows[0].cells[0].innerHTML==="X"&& maTable.rows[1].cells[1].innerHTML==="X"&& maTable.rows[2].cells[2].innerHTML==="X"){
        maTable.rows[0].cells[0].style.backgroundColor="green";
        maTable.rows[1].cells[1].style.backgroundColor="green";
        maTable.rows[2].cells[2].style.backgroundColor="green";
        active=false;
       
        console.log("gagner");
    }else if(maTable.rows[0].cells[2].innerHTML==="X"&& maTable.rows[1].cells[1].innerHTML==="X"&& maTable.rows[2].cells[0].innerHTML==="X"){
        maTable.rows[0].cells[2].style.backgroundColor="green";
        maTable.rows[1].cells[1].style.backgroundColor="green";
        maTable.rows[2].cells[0].style.backgroundColor="green";
        active=false;
        console.log("gagner");
}else if(maTable.rows[0].cells[2].innerHTML==="O"&& maTable.rows[1].cells[1].innerHTML==="O"&& maTable.rows[2].cells[0].innerHTML==="O"){
    maTable.rows[0].cells[2].style.backgroundColor="green";
    maTable.rows[1].cells[1].style.backgroundColor="green";
    maTable.rows[2].cells[0].style.backgroundColor="green";
    active=false;
    console.log("gagner");
}


    }

    if (active==false) {
        let bouton=document.querySelector('button');
        bouton.addEventListener('click',rejouer);
        
      }
}

function rejouer(){
    location.reload(),false;
}