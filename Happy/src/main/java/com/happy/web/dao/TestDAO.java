package com.happy.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.happy.web.vo.TestVO;

@Mapper
@Repository
public interface TestDAO {
	
	public List<TestVO> test() throws DataAccessException;
}
