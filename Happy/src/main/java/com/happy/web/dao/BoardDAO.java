package com.happy.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.happy.web.vo.BoardVO;

@Mapper
@Repository
public interface BoardDAO {

	void boardInsert(BoardVO vo) throws DataAccessException;

	List<BoardVO> boardSelectAll() throws DataAccessException;

}
