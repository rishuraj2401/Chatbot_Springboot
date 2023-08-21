package com.javatechie.model;

import jakarta.persistence.*;
@Entity
public class login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String emailId;
	private String password;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getemailId() {
		return emailId;
	}
	public void setemailId(String email_Id) {
		this.emailId = email_Id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password= password;
	}

}

