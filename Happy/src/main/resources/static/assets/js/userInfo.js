$(document).ready(function(){
	$.post("../user", {
		}, function(data){
			$("#userName").val(data.name);
			$("#userId").val(data.id);
			$("#userPw").val(data.password);
			$("#userPhone").val(data.phone);
			$("#userEmail").val(data.email);
		});
	
	$("#userUpdateBtn").click(function(){
		const name = $("#userName").val();
		const id = $("#userId").val();
		const password = $("#userPw").val();
		const phone = $("#userPhone").val();
		const email = $("#userEmail").val();
		
		$.post("../user/update", {
			name, id, password, phone, email
		}, function(data, status) {
			if(data == "fail"){
				alert(data);
			} else {
				alert(data);
				$.cookie("name", name);
				location.replace("/");
			}
		});
	});
	
	$("#userDeleteBtn").click(function(){
		
		$.post("../user/delete", {
		}, function(data, status) {
			if(data == "fail"){
				alert(data);
			} else {
				alert(data);
				$.removeCookie("name");
				location.replace("/");
			}
		});
	});
})
