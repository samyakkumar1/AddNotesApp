console.log("Import successful!")
const arr = [];
showData();
let addButton = document.getElementById("addBtn");
addButton.addEventListener('click', function () {
    let inputText = document.getElementById("note");
    let text = inputText.value;

    arr.push(text);
    localStorage.setItem("notes", JSON.stringify(arr));
    document.getElementById("note").value = "";
    showData();
});

function showData() {
    let Notes = JSON.parse(localStorage.getItem("notes"))
    console.log(Notes);
    str = "";
    Notes.forEach(function (element, index) {
        str +=
        `
        <div class="card my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Note ${index+1}</h5>
                      <p class="card-text">${element}</p>
                      <button id="btnDelete" class="btn btn-primary" onclick="deleted(${index})">Delete</button>
                    </div>
        </div>
        `
    });
    document.getElementById("showNotes").innerHTML = str;
}


function deleted(ind){
    arr.splice(ind,1);
    localStorage.setItem("notes", JSON.stringify(arr));
    showData();

}

searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener('input',function(){
    inputval=searchTxt.value;
    let notecards=document.getElementsByClassName('card');
    Array.from(notecards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

    

 });