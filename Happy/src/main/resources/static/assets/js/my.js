$(document).ready(function() {
	const name = $.cookie("name");
	let no = -1;
	if(name){
		logoutBtn = name + "님 반갑습니다. " + "<input type='button' value='LogOut' id='logoutBtn' class='btn btn-primary'>";	
		$("#loginDiv").html(logoutBtn);
		$(".navbar-nav").append(`<li id="userBtn" class="nav-item"><a class="nav-link" href="/userInfo.html";">User</a></li>`)
		$(".navbar-nav").append(`<li id="boardListBtn" class="nav-item"><a class="nav-link" href="/boardList.html";">Board</a></li>`)
		$("#boardWriteBtnDiv").html(`<button id='boardWriteBtn' class='btn btn-primary' onclick="location.href='/boardEdit.html'" >글쓰기</button>`);
		
		$.get("../board/read", {
			
		}, function(data, status){
			if(data == "fail"){
				alert(data)
			} else {
				a(data);
			}
		});
	}
	
	$(document).on("click", "#boardUpdateBtn", function(){
		location.href = "/boardEdit.html?no=" + no;
	});
	
	$(document).on("click", "#boardDeleteBtn", function(){
		$.post("../board/delete",{
			no
		},function(data){
			if(data == "fail"){
				alert(data);
			} else {
				alert(data);
				location.reload();
			}
		});
	});
	
	
	$(document).on("click", ".board", function(){
		no = this.id;
		$.get("../board/read/" + no, {}, function(data){
			let board = `<div class="contentBox"><div class="contentBox_header"><div class="header_info">`;
            board += `<h2 class="title">${data.title}</h2>`;
            board += `<h5 class="author">${data.writerName}</h5> </div>`;
            if(data.writerName == name){
            	board += `<div class="updateBtns"><button id="boardUpdateBtn" class='btn btn-secondary'>Modify</button><button id="boardDeleteBtn" class='btn btn-danger'>Delete</button></div>`
            }
            board += `</div>`;
            board += `<div class="contentBox_body"> <p>${data.content}</p></div></div>`;
			$("#boardDetailDiv").html(board);
		});
	});
	
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

function a(data){
	let index = 1;
	let board=`<center><table class="table table-hover"><tr><th>글번호</th><th>제목</th><th>작성자</th></tr>`;
	data.forEach(function(item){
		 board += `<tr class = "board" id = "${item.no}"><td>${index++}</td><td>${item.title}</td><td>${item.writerName}</td></tr>`;
	});
	board += `</table>`;
	board +=`</center>`;
	
	$("#boardDiv").html(board);
}