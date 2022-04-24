package com.happy.web.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.happy.web.vo.UserVO;

@Mapper
@Repository
public interface UserDAO {

	void userInsert(UserVO vo) throws DataAccessException;

	UserVO userLogin(UserVO vo) throws DataAccessException;

	void userUpdate(UserVO vo) throws DataAccessException;

	void userDelete(UserVO vo) throws DataAccessException;
	
}
