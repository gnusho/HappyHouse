package com.happy.web.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.happy.web.service.BoardService;
import com.happy.web.vo.BoardVO;
import com.happy.web.vo.UserVO;

@RestController
@RequestMapping("board")
public class BoardController {

	@Autowired BoardService boardService;
	
	@PostMapping("create")
	public String boardInsert(BoardVO vo, HttpSession session) {
		UserVO user = (UserVO) session.getAttribute("user");
		if(user == null) {
			return "fail";
		}
		vo.setWriter(user.getNo());
		boardService.boardInsert(vo);
		
		return "ok";
	}
	
	@GetMapping("read")
	public List<BoardVO> boardSelectAll(){
		return boardService.boardSelectAll();
	}
}
