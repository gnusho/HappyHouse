package com.happy.web.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.happy.web.service.UserService;
import com.happy.web.vo.UserVO;

@RestController
@RequestMapping("user")
public class UserController {

	@Autowired UserService userService;
	
	@PostMapping("")
	public UserVO user(HttpSession session) {
		return (UserVO) session.getAttribute("user");
	}
	
	@PostMapping("delete")
	public String userDelete(HttpSession session) {
		UserVO vo = (UserVO) session.getAttribute("user");
		if(vo == null) {
			return "fail";
		}
		userService.userDelete(vo);
		session.invalidate();
		return "ok";
	}
	
	@PostMapping("update")
	public String userUpdate(UserVO updateVO, HttpSession session) {
		UserVO nowVO = (UserVO) session.getAttribute("user");
		if(nowVO == null) {
			return "fail";
		}
		updateVO.setNo(nowVO.getNo());
		userService.userUpdate(updateVO);
		session.setAttribute("user", updateVO);
		return "ok!";
	}
	
	@PostMapping("join")
	public String userInsert(UserVO vo) {
		userService.userInsert(vo);
		return "ok";
	}
	
	@PostMapping("login")
	public String userLogin(UserVO vo, HttpSession session) {
		vo = userService.userLogin(vo);
		if(vo.getName() == null) {
			return "fail";
		}
		session.setAttribute("user", vo);
		return vo.getName();
	}
	
	@PostMapping("logout")
	public void userLogout(HttpSession session) {
		session.invalidate();
	}
}
