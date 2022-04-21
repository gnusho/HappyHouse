package com.happy.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.happy.web.service.TestService;
import com.happy.web.vo.TestVO;

@RestController
public class TestController {
	
	@Autowired TestService testService;
	
	@GetMapping("test")
	public List<TestVO> test() {
		return testService.test();
	}
}
