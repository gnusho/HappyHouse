package com.happy.web.vo;

public class TestVO {
	private int no;

	public TestVO(int no) {
		setNo(no);
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		if(no < 0) return;
		this.no = no;
	}
}
