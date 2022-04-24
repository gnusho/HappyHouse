$(document).ready(function() {
	const name = $.cookie("name");

	if(name){
		logoutBtn = name + "님 반갑습니다. " + "<input type='button' value='LogOut' id='logoutBtn' class='btn btn-primary'>";	
		$("#loginDiv").html(logoutBtn);
		$(".navbar-nav").append(`<li id="userBtn" class="nav-item"><a class="nav-link" href="/userInfo.html";">User</a></li>`)
	}
	
	$("#loginBtn").click(function(){
		
		const id = $("#loginId").val();
		const password = $("#loginPw").val();
		$.post("../user/login", {
			id, password
		}, function(data, status) {
			if(data=="fail"){
				alert(data);
			} else {
				$.cookie("name", data);
			}
			
			location.reload();
		});
		
	});
	
	$(document).on("click", "#logoutBtn", function(){
		$.post("../user/logout", {
		}, function(data){
			$.removeCookie("name");
			location.reload();
		});
	});
	
	$("#userJoinBtn").click(function() {// 회원 가입 처리
		
		const no = -1;
		const name = $("#name").val();
		const id = $("#id").val();
		const password = $("#pw").val();
		const phone = $("#phone").val();
		const email = $("#email").val();
		const type = "normal";
		
		$.post("../../user/join", {
			no, name, id, password, phone, email, type
		}, function(data, status) {
			alert(data);
			window.close();
		});

	});

});