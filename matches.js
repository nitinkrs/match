var matchArr= JSON.parse(localStorage.getItem("schedule"));
displayData(matchArr);
var favouritesArr=JSON.parse(localStorage.getItem("favourites")) || []
function displayData(data){
    data.forEach(function(elem) {
        var tr = document.createElement("tr")

        var td1=document.createElement("td");
        td1.innerText=elem.Number

        var td2=document.createElement("td");
        td2.innerText=elem.Team1

        var td3=document.createElement("td");
        td3.innerText=elem.Team2

        var td4=document.createElement("td");
        td4.innerText=elem.Date

        var td5=document.createElement("td");
        td5.innerText=elem.Venue

        var td6=document.createElement("td");
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            favouritesFunction(elem);
        })
     tr.append(td1,td2,td3,td4,td5,td6);

     document.querySelector("tbody").append(tr);
        
    })
}
function favouritesFunction(elem){
    favouritesArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favouritesArr))
}


function handleFilter(){
    var selected=document.getElementById("filterVenue").value;
    var filteredList=matchArr.filter(function(elem){
        return elem.Venue==selected;
    })
    displayData(filteredList)
}
    // write js code here corresponding to matches.html