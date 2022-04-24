package com.happy.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.happy.web.dao.UserDAO;
import com.happy.web.vo.UserVO;

@Service
public class UserService {
	@Autowired UserDAO userDAO;

	public void userInsert(UserVO vo) {
		userDAO.userInsert(vo);
	}

	public UserVO userLogin(UserVO vo) {
		return userDAO.userLogin(vo);
	}

	public void userUpdate(UserVO vo) {
		userDAO.userUpdate(vo);
	}

	public void userDelete(UserVO vo) {
		userDAO.userDelete(vo);
	}
	
	
}
