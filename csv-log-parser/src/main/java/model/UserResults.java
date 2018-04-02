package main.java.model;

import java.util.ArrayList;
import java.util.List;

public class UserResults {
	
	private final String userID;
	private String passwordScheme;
	private final List<LoginAttempt> loginAttempts = new ArrayList<>();	

	public UserResults(final String userID) {
		this.userID = userID;
	}
	
	public String getUserID() {
		return userID;
	}
	
	public String getPasswordScheme() {
		return passwordScheme;
	}
	
	public void setPasswordScheme(final String passwordScheme) {
		this.passwordScheme = passwordScheme;
	}
	
	public void addLoginAttempt(final LoginAttempt loginAttempt) {
		loginAttempts.add(loginAttempt);
	}
	
	public LoginAttempt getLoginAttempt(final int attempt) {
		return loginAttempts.get(attempt);
	}
	
	public int getNumberOfLoginAttempts() {
		return loginAttempts.size();
	}
	
	public int getNumberOfSuccessfulLoginAttempts() {
		return (int) loginAttempts.stream().filter(a -> a.getLoginResult() == LoginResult.SUCCESS).count();
	}
	
	public int getNumberOfFailureLoginAttempts() {
		return (int) loginAttempts.stream().filter(a -> a.getLoginResult() == LoginResult.FAIL).count();
	}
	
}
