function SearchFunc(){
    let filter=document.getElementById('myinput').value.toUpperCase();
    let myTable=document.getElementById('mytable');
    let tr=myTable.getElementsByTagName('tr');
    for(var i=0;i<tr.length;i++) {
        let td= tr[i].getElementsByTagName('td')[1];
        if(td){
            let myText = td.textContent || td.innerHTML;
            if(myText.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
}

