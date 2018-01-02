package com.testing.mail;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendMail {

	   public static void main(String [] args) {    
		  final String to = "";
	      final String from = "";
	      final String password ="";

	      //System Properties
	      Properties props = System.getProperties();
	      
	      //Mail Server
	      props.setProperty("mail.transport.protocol", "smtp");     
	      props.setProperty("mail.host", "smtp.gmail.com");  
	      props.put("mail.smtp.auth", "true");  
	      props.put("mail.smtp.port", "465");  
	      props.put("mail.debug", "true");  
	      props.put("mail.smtp.socketFactory.port", "465");  
	      props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");  
	      props.put("mail.smtp.socketFactory.fallback", "false");  
	      Session session = Session.getDefaultInstance(props,  
	      new javax.mail.Authenticator() {
	         protected PasswordAuthentication getPasswordAuthentication() {  
	         return new PasswordAuthentication(from,password);  
	     }  
	     });  
	      

	      try {
	         MimeMessage message = new MimeMessage(session);

	         message.setFrom(new InternetAddress(from));

	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

	         //Subject
	         message.setSubject("Subject Line");

	         //Message Content
	         message.setText("Actual Message");

	         // Send message
	         Transport.send(message);
	         System.out.println("Sent message successfully....");
	      } catch (MessagingException mex) {
	         mex.printStackTrace();
	      }
	   }
}
