package com.happy.web.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	int no, writer;
	String writerName, title, content;
	Date create_at;
}
