function submit() {
	var name1 = document.getElementById("name1").multiple;
    var done = document.getElementById("done");
    done.innerHTML = "Document uploaded";
            
     }
     
function validateForm() {
    

    var name = document.forms["myForm"]["fname"].value;
    var place = document.getElementById('place').value;
    if (name == "" ||place=="" ) {
        alert("Details need  to be filled out");
        return false;
    }
}        