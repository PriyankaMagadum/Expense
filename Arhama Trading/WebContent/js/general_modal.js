function viewProduct(id,pid,bid){
	
	document.getElementById(pid).style.display="block";
	document.getElementById(bid).style.display="none";
	//document.getElementById(imgid).style.display="none";
	var product=document.getElementById(id).innerHTML;
	
	document.getElementById("modalDiv").innerHTML=product;
	document.getElementById("modalDiv1").innerHTML=document.getElementById(pid).innerHTML;
	
	$('#myModal').modal('show') ; 
	
	document.getElementById(pid).style.display="none";
	document.getElementById(bid).style.display="block";
	//document.getElementById(imgid).style.display="block";
	
}

$(document).ready(function(){
	
	
        $("#loginModal").modal({
            backdrop: 'static',
            keyboard: false,
            autoOpen: false
        });
        
       
login();
	
	
	
});




function login()
{
	$('#loginModal').modal('show') ; 
	
	
	
}

function submit1()
{
	// $('#loginModal').modal('hide');
	//document.getElementById("myForm").submit();
	
	//$('#loginModal').modal('close');
	//window.location("index.html");
	
	var name=document.getElementById("name").value;
	var number=document.getElementById("number").value;
	
	
	 var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	
	 if(number.match(phoneno)) {
		 
		 $.ajax(
					{	type: "post",
						url: "emailSendServ",
						data: {name:document.getElementById("name").value,number:document.getElementById("number").value},
						success: function(response)
						{	if(response == "")
							{	 alert("Form submission Failed!");	
							}
							else
							{	
								
							}
						},
						error:function(response){		}
					});
		 
	 }
	 else{
		 alert("Please enter valid mobile number");
		 location.reload();
		
	 }
	
	
	
	
	
	
	
	
	
	
				
			
	
}
/*function click(name,number)
{
	$.ajax({
        type: 'POST',
        url: '../portal/curriculum.php',
        data: 'studentNumber='+$('#StudentID').val(),
        success: function(data)
        {
            $('#curriculum').html(data);
        }
    });

}
*/


/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        var data = xhr.responseText;
        alert(data);
    }
}
xhr.open('GET', 'myservlet', true);
xhr.send(null);*/


