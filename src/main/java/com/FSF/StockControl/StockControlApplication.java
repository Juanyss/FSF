package com.FSF.StockControl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.Query;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Calendar;


@SpringBootApplication
public class StockControlApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockControlApplication.class, args);

		try
		{
			// create a mysql database connection
			String myUrl = "jdbc:mysql://localhost:3306/FSF_db?useTimezone=true&serverTimezone=UTC&useSSL=false&allowPublicKeyRetrieval=true";

			Connection conn = DriverManager.getConnection(myUrl, "Juany", "440036Cu");

			// create a sql date object so we can use it in our INSERT statement
			Calendar calendar = Calendar.getInstance();
			java.sql.Date startDate = new java.sql.Date(calendar.getTime().getTime());

			// the mysql insert statement
			String role = " insert into role (role_id,role)"
					+ " values (?, ?)";

			String user = " insert into user (user_id,active,last_name,name,password)"
					+ " values (?, ?, ?, ?, ?)";

			String user_role = "insert into user_role (user_id,role_id)"
					+ " values (?, ?)";

			// create the mysql insert preparedstatement
			PreparedStatement preparedStmt = conn.prepareStatement(role);
			preparedStmt.setInt (1, 1);
			preparedStmt.setString (2, "ADMIN");

			PreparedStatement preparedStmtUser = conn.prepareStatement(user);
			preparedStmtUser.setInt (1, 1);
			preparedStmtUser.setInt (2, 1);
			preparedStmtUser.setString (3, "");
			preparedStmtUser.setString (4, "admin");
			preparedStmtUser.setString (5, "admin");

			PreparedStatement preparedStmtUserRole = conn.prepareStatement(user_role);
			preparedStmtUserRole.setInt (1, 1);
			preparedStmtUserRole.setInt (2, 1);



			// execute the preparedstatement
			preparedStmt.execute();
			preparedStmtUser.execute();
			preparedStmtUserRole.execute();

			conn.close();
		}
		catch (Exception e)
		{
			System.err.println("Got an exception!");
			System.err.println(e.getMessage());
		}
	}


}


