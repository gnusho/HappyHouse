$(document).ready(function() {
	const name = $.cookie("name");

	if(name){
		logoutBtn = name + "님 반갑습니다. " + "<input type='button' value='LogOut' id='logoutBtn' class='btn btn-primary'>";	
		$("#loginDiv").html(logoutBtn);
		$(".navbar-nav").append(`<li id="userBtn" class="nav-item"><a class="nav-link" href="/userInfo.html";">User</a></li>`)
		$(".navbar-nav").append(`<li id="boardEditBtn" class="nav-item"><a class="nav-link" href="/boardEdit.html";">Board</a></li>`)
	
		$.get("../board/read", {
			
		}, function(data, status){
			if(data == "fail"){
				
			} else {
				let board=`<center><table class="table table-hover"><tr><th>글번호</th><th>제목</th><th>작성자</th></tr>`;
				data.forEach(function(item){
					 board += `<tr><td>${item.no}</td><td>${item.title}</td><td>${item.writerName}</td></tr>`;
				});
				board += `</table>`;
				board +=`</center>`;
				console.log(board);
				
				$("#boardDiv").html(board);
			}
		});
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