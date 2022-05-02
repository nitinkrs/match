// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matchSubmit);
var matchArr=JSON.parse(localStorage.getItem("schedule")) || []
function matchSubmit(){
    event.preventDefault()
    var Obj={
     Number: masaiForm.matchNum.value,
     Team1: masaiForm.teamA.value,
     Team2: masaiForm.teamB.value,
     Date: masaiForm.date.value,
     Venue: masaiForm.venue.value,
    };
    matchArr.push(Obj);
    localStorage.setItem("schedule",JSON.stringify(matchArr));
}