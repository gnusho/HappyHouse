$(document).ready(function(){
	const no = searchParam("no");
	if(no && no > 0){
		$.get("../board/read/" + no, {}, function(data){
			$("#boardTitle").val(data.title);
			$("#boardContent").val(data.content);
		});
	}
	$("#boardCreateBtn").click(function(){
		const title = $("#boardTitle").val();
		const content = $("#boardContent").val();
		
		if(no && no > 0){
			$.post("../board/update", {
				no, title, content
			}, function(data){
				if(data == "fail"){
					alert(data);
				} else {
					alert(data);
					location.href = "/boardList.html";
				}
			})
		}
		else {
			$.post("../board/create",{
				title,content
			},function(data, status){
				if(data == "fail"){
					alert(data);
				} else {
					alert(data);
					location.href = "/boardList.html";
				}
			});
		}
	});
})

function searchParam(key) {
  return new URLSearchParams(location.search).get(key);
};