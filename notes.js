var id = 1;
const colour = ["red","blue"];
console.log(colour[0]);
function Save()
{
    
    let data = document.querySelector(".Editor").innerHTML;
    if(data==="")
    {
        console.log("Write Something");
    }
    else{
    console.log(data);
    localStorage.setItem(id,data);
    console.log(localStorage.getItem(id));
     
     display(id)
     id+=1;
     console.log(id);
    }
    console.log(id);
   
    
}



function display(id)
{
    let displayDiv=document.createElement("div");
    displayDiv.className="div3";
    displayDiv.id = id;
    displayDiv.innerHTML=`
    <h1>Note${id}</h1>
    <p>${localStorage.getItem(id)}</p>
    <button onclick=Remove(${id})>Remove</button>
    `;
    console.log(displayDiv);
    document.getElementById("div2").appendChild(displayDiv);
    colourChange(id);

    
}

function Del()
{
    document.querySelector(".Editor").innerHTML="";
}

function Remove(id)
{
    console.log(document.getElementById(id));
    document.getElementById(id).remove();
}

function colourChange(id)
{
    if(id%2==0)
    {
  document.getElementById(id).style.background= "#645dd7" ;
    }
    if(id%2==1)
    {
  document.getElementById(id).style.background="rgb(152, 206, 0)"; 
    }
  
}