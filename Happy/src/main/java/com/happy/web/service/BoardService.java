package com.happy.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.happy.web.dao.BoardDAO;
import com.happy.web.vo.BoardVO;

@Service
public class BoardService {
	
	@Autowired BoardDAO boardDAO;

	public void boardInsert(BoardVO vo) {
		boardDAO.boardInsert(vo);
	}

	public List<BoardVO> boardSelectAll() {
		return boardDAO.boardSelectAll();
	}

	public BoardVO boardSelectOne(int no) {
		return boardDAO.boardSelectOne(no);
	}

	public void boardUpdate(BoardVO vo) {
		boardDAO.boardUpdate(vo);
	}

	public void boardDelete(int no) {
		boardDAO.boardDelete(no);
	}

}
