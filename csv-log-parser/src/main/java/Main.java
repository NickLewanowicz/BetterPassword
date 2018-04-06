package main.java;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

import main.java.model.LoginAttempt;
import main.java.model.LoginResult;
import main.java.model.UserResults;

/**
 * This file contains the all the code for our log parser, including
 * the main method of the application
 * 
 * To run correctly the Eclipse lunch configuration must provide
 * the absolute path to the CSV file with the log data as an argument
 */
public class Main {
	
	/** Delimiter separating each row field */
	private static final String delimeter = ",";

	// Indices for each column in each entry
	private static final int timestampIndex = 0;
	private static final int userIndex = 1;
	private static final int schemeIndex = 3;
	private static final int eventIndex = 5;
	private static final int dataIndex = 6;
	private static final int data2Index = 7;
	
	// Event tags
	private static final String registerEvent = "register";
	private static final String createEvent = "create";
	private static final String enterEvent = "enter";
	private static final String loginEvent = "login";
	
	// Constants for Text21
	private static final String start = "start";
	private static final String passwordSubmitted = "passwordSubmitted";
	private static final String success = "success";
	private static final String failure = "failure";

	// Constants for Imagept21 
	private static final String orderInputPwd = "order inputPwd";
	private static final String goodLogin = "goodLogin";
	private static final String badLogin = "badLogin";
	
	// For representing a number has not been set/found in the log yet
	private static final long NULL = -1;

	/**
	 * @param args Arguments of the application (arg 0 should be absolute path of CSV file)
	 * @throws IOException
	 */
	public static void main(final String[] args) throws IOException {
		// Open the CSV file
		final FileInputStream fstream = new FileInputStream(args[0]);
		final BufferedReader br = new BufferedReader(new InputStreamReader(fstream));
		
		// Map for storing users
		final Map<String, UserResults> users = new TreeMap<>();

		UserResults user;
		String strLine;
		long startTime = NULL;
		long endTime = NULL;
		
		// Read each line from CSV file, one at a time
		while ((strLine = br.readLine()) != null)   {
			// Break log entry into an array
			final String[] lineData = strLine.replaceAll("\"", "").split(delimeter);
			switch (lineData[eventIndex]) {
			
			// On "register" event
		  	case registerEvent:
		  		// Record user ID
		  		user = new UserResults(lineData[userIndex]);
		  		if (!users.containsKey(user.getUserID())) {
			  		users.put(user.getUserID(), user);
		  		}
		  		break;
		  		
		  	// On "create" event
		  	case createEvent:
		  		// Ignore
		  		break;
		  	
		  	// On "enter" event
		  	case enterEvent:
		  		user = users.get(lineData[userIndex]);
		  		if (user != null) {
		  			// Record scheme
		  			user.setPasswordScheme(lineData[schemeIndex]);
		  			
		  			// Record start time of login attempt for both schemes
		  			if (lineData[dataIndex].equals(start)) {
	  					startTime = getTime(lineData[timestampIndex]);
	  					
	  				// Record end time of login attempt for both schemes
		  			} else if (lineData[dataIndex].equals(orderInputPwd) || lineData[dataIndex].equals(passwordSubmitted)) {
		  				endTime = getTime(lineData[timestampIndex]);			  			
			  			
			  		// Result of Imagept21 submission 
		  			} else if (lineData[dataIndex].equals(goodLogin) || lineData[dataIndex].equals(badLogin)) {
				  		if (user != null && startTime != NULL && endTime != NULL) {
				  			user.addLoginAttempt(new LoginAttempt(lineData[userIndex], lineData[data2Index],
				  					lineData[dataIndex].equals(goodLogin) ? LoginResult.SUCCESS : LoginResult.FAIL, startTime, endTime));
			  				startTime = NULL;
			  				endTime = NULL;
				  		}
		  			}
		  		}
		  		break;
		  	
		  	// On "login" event
		  	case loginEvent:
		  		// Record success/failure of Text21 login attempt
		  		user = users.get(lineData[userIndex]);
		  		if (user != null) {
	  				if (startTime != NULL && endTime != NULL) {
	  					LoginResult result = null;
		  				if (lineData[dataIndex].equals(success)) {
		  					result = LoginResult.SUCCESS;
		  				} else if (lineData[dataIndex].equals(failure)) {
		  					result = LoginResult.FAIL; 
		  				}
			  			user.addLoginAttempt(new LoginAttempt(lineData[userIndex], lineData[data2Index], result, startTime, endTime));
	  					startTime = NULL;
		  				endTime = NULL;
	  				}
		  		}
		  		break;
		  	default:
		  		break;
		  }
		}
		br.close();
		writeResultsToFile(users);
	}

	/**
	 * @param timestamp Timestamp string in yyyy-MM-dd hh:mm:ss format 
	 * @return the time in ms since epoch
	 */
	private static long getTime(final String timestamp) {
	    try {
			final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			final Date parsedDate = dateFormat.parse(timestamp);
			return parsedDate.getTime();
		} catch (ParseException e) {
			return NULL;
		}
	}
	
	/**
	 * Writes the processed data results to a file named "results.csv" in the project folder
	 * 
	 * @param parsed log data, grouped by used
	 * @throws FileNotFoundException
	 */
	private static void writeResultsToFile(final Map<String, UserResults> users) throws FileNotFoundException {
		final PrintWriter out = new PrintWriter("results.csv");
		for (final Entry<String, UserResults> entry : users.entrySet()) {
			final UserResults user = entry.getValue();
			for (int i = 0; i < user.getNumberOfLoginAttempts(); ++i) {
				final LoginAttempt attempt = user.getLoginAttempt(i);
				// Ignore unfinished attempts
				if (attempt.getLoginResult() != null) {
					out.println(String.format("\"%s\",\"%s\",\"%d\",\"%s\"", user.getUserID(), user.getPasswordScheme(), attempt.getDuration(),
						(attempt.getLoginResult() == LoginResult.SUCCESS ? "T" : "F")));
				}
			}
		}
		out.flush();
		out.close();
	}
}
