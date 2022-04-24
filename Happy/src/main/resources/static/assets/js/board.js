$(document).ready(function(){
	$("#boardCreateBtn").click(function(){
		const title = $("#boardTitle").val();
		const content = $("#boardContent").val();
		
		$.post("../board/create",{
			title,content
		},function(data, status){
			if(data == "fail"){
				alert(data);
			} else {
				alert(data);
				location.replace("/");
			}
		});
	});
})