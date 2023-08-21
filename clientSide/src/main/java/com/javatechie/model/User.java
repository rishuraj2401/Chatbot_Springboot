package com.javatechie.model;

//import javax.persistence.*;
import jakarta.persistence.*;
@Entity
//@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = "email"))

public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Id;
	private String name;
	@Column(nullable = false, unique = true)
	private String emailId;
	private String password;
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
