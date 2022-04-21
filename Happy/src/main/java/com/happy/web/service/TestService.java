package com.happy.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.happy.web.dao.TestDAO;
import com.happy.web.vo.TestVO;

@Service
public class TestService {
	
	@Autowired TestDAO testDAO;
	public List<TestVO> test() {
		return testDAO.test();
	}
	
}
