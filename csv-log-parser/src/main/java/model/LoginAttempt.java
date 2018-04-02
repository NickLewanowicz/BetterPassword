package main.java.model;

public class LoginAttempt {

	private final String userID;
	private final String password;
	private final LoginResult loginResult;
	private final long startTime;
	private final long endTime;
	
	public LoginAttempt(final String userID, final String password, final LoginResult loginResult, final long startTime, final long endTime) {
		this.userID = userID;
		this.password = password;
		this.loginResult = loginResult;
		this.startTime = startTime;
		this.endTime = endTime;
	}
	
	public String getUserID() {
		return userID;
	}
	
	public String getPassword() {
		return password;
	}
	
	public LoginResult getLoginResult() {
		return loginResult;
	}
	
	public long getStartTime() {
		return startTime;
	}
	
	public long getEndTime() {
		return endTime;
	}
	
	public long getDuration() {
		return endTime - startTime;
	}
	
}
