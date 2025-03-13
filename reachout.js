function sendEmails() {
    const ui = SpreadsheetApp.getUi();
    const response = ui.alert(
      "Confirm",
      "Do you want to send emails to all 'Not Sent' recipients?",
      ui.ButtonSet.YES_NO
    );
  
    if (response === ui.Button.NO) return; 
  
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
  
    const nameIndex = headers.indexOf("First Name");
    const lastNameIndex = headers.indexOf("Last Name");
    const emailIndex = headers.indexOf("Email");
    const positionIndex = headers.indexOf("Position Name");
    const companyIndex = headers.indexOf("Company Name");
    const subjectIndex = headers.indexOf("Subject");
    const bodyIndex = headers.indexOf("Body");
    const statusIndex = headers.indexOf("Status");
  
    if (emailIndex === -1 || subjectIndex === -1 || bodyIndex === -1 || statusIndex === -1) {
      ui.alert("Error", "Missing required columns in the sheet!", ui.ButtonSet.OK);
      return;
    }
  
    const resumeFileId = "Enter your resume ID"; // Paste your Resume File ID
    const resumeFile = DriveApp.getFileById(resumeFileId).getAs(MimeType.PDF); 
  
    let sentCount = 0;
  
    for (let i = 1; i < data.length; i++) {
      let status = data[i][statusIndex]?.toString().trim().toLowerCase(); 
  
      if (status !== "not sent") {
        Logger.log(`Skipping row ${i + 1}: Already Sent`);
        continue;
      }
  
      let email = data[i][emailIndex]?.toString().trim();
      let subject = data[i][subjectIndex]?.toString().trim();
      let bodyTemplate = data[i][bodyIndex]?.toString().trim();
  
      if (!email || !email.includes("@") || !email.includes(".")) {
        Logger.log(`Skipping row ${i + 1}: Invalid email (${email})`);
        continue;
      }
  
     
      if (!subject || !bodyTemplate) {
        Logger.log(`Skipping row ${i + 1}: Empty subject or body`);
        continue;
      }
  
      let body = bodyTemplate
        .replace("{name}", data[i][nameIndex] || "")
        .replace("{lastName}", data[i][lastNameIndex] || "")
        .replace("{position}", data[i][positionIndex] || "")
        .replace("{company}", data[i][companyIndex] || "");
  
      // HTML Email with LinkedIn Button
      let htmlBody = `
        <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; align:center;">
          <p>${body}</p>
          <br>
          <a href="https://www.linkedin.com/in/tanmay-shelar/" target="_blank" 
            style="display: inline-block; background-color: #0073b1; color: white; text-decoration: none;
            padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Connect on LinkedIn
          </a>
          <br><br>
        </div>
      `;
  
      try {
        GmailApp.sendEmail(email, subject, "", {
          htmlBody: htmlBody,
          attachments: [resumeFile]
        });
  
        sheet.getRange(i + 1, statusIndex + 1).setValue("Sent"); // Updating Status to "Sent"
        sentCount++;
        Logger.log(`Email sent to ${email} with resume attachment`);
      } catch (error) {
        Logger.log(`Failed to send email to ${email}: ${error.message}`);
      }
    }
  
    ui.alert("Email Status", `${sentCount} emails sent successfully with resume attached!`, ui.ButtonSet.OK);
  }
  
