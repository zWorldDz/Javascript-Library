package com.test.dbconnection;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;

@WebServlet("/TestDbServlet")
public class DbConnectionTesting extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//Setup connection var
		String jdbcUrl = "jdbc:mysql://localhost:3306/web_customer_tracker?user=root&password=root";
		String driver = "com.mysql.jdbc.Driver";
		
		
		try{
			PrintWriter out = response.getWriter();
			
			out.println("Connec"+jdbcUrl);
			
			Class.forName(driver);
			
			Connection Conn = DriverManager.getConnection(jdbcUrl);
			
			out.println("Success");
			
			Conn.close();
			
		}catch(Exception e){
			e.printStackTrace();
		}
		
		
	}


}
