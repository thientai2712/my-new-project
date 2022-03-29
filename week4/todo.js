var jobs = [
    "Quét nhà lần 1",
    "Lau nhà lần 1",
    "Quét nhà lần 2",
    "Lau nhà lần 2",
]

function renderJob(){
    let tbJob = document.querySelector('.table>tbody');
    let htmls = jobs.map(function(job, index){
        return `
                <tr id = "${index}">
                    <td>${index + 1}</td>
                    <td>${job}</td>
                    <td>
                        <a href="#" id = "btnDone" onclick = 'idDone(${index})' >Done</a>
                        <a href="#" id = "btnEdit" onclick = 'idEdit(${index})' >Edit</a>
                        <a href="#" id = "btnRomve" onclick = 'idRemove(${index})' >Remove</a>
                        
                    </td>
                </tr>
                `
    })  
    tbJob.innerHTML = htmls.join("");
}

renderJob();
function idRemove(index){
   // let confirm = confirm();
    if (confirm("Bạn có muốn xóa?")){
        jobs.splice(index, 1)
    renderJob();
    }
}
function idDone(index1){ 
    document.getElementById(index1).style.textDecoration = 'line-through';
}
function addjob(){
    let inputValue = document.getElementById("jobname").value
    if (inputValue == "" ){
        alert("You must write something")
    }else{
        jobs.unshift(inputValue);
        document.getElementById("jobname").value = "";
        renderJob();
    } 
}
function idEdit(index2){
        let elementInput = document.getElementById("jobname");

        elementInput.value = jobs[index2];
        renderJob();
}