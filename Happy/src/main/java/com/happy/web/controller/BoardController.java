package com.happy.web.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@PostMapping("update")
	public String boardUpdate(BoardVO vo, HttpSession session) {
		UserVO user = (UserVO) session.getAttribute("user");
		if(user == null) {
			return "fail";
		}
		vo.setWriter(user.getNo());
		boardService.boardUpdate(vo);
		
		return "ok";
	}
	
	@PostMapping("delete")
	public String boardDelete(int no, HttpSession session) {
		UserVO user = (UserVO) session.getAttribute("user");
		if(user == null) {
			return "fail";
		}
		boardService.boardDelete(no);
		
		return "ok";
	}
	
	@GetMapping("read")
	public List<BoardVO> boardSelectAll(){
		return boardService.boardSelectAll();
	}
	
	@GetMapping("read/{no}")
	public BoardVO boardSelectOne(@PathVariable("no") int no) {
		return boardService.boardSelectOne(no);
	}
}
