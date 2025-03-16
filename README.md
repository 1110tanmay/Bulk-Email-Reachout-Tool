Hey folks,

As a Master's student, I understand how difficult and time-consuming it is to email multiple recruiters for different job profiles. To streamline this process, I built a simple Bulk Email Reach-Out Tool.

This tool helps you automate your email outreach by sending personalized emails to multiple recruiters while keeping track of the status of each email.

If you want an easy life, make a copy of this sheet: https://docs.google.com/spreadsheets/d/1swmclZ73s7Gfci2UjI1BMMxrQTgq4D0Tt1hgYVbKbGk/edit?gid=0#gid=0 
Now you only need to add Body and subject. 

If you are a daredevil, follow the instructions below. 

How do you use it:

1. Open Google Sheets, create columns in this format:

![image](https://github.com/user-attachments/assets/a2862491-084f-4834-896a-1e94e88dac4b)

2. Under the status button, create a dropdown with two options: 
a. sent
b. not sent 

3. Go to Extensions>App Script> Paste the code there.

Every you run the script, it checks for that field if the field says sent, it would skip that row, and move forward. After it sends an email, it updates the field to sent. 

4. Next you need to add body and subject by yourself, you can create multiple subjects and bodies as dropdown under the columns listed. 

5. Since we would want the email to be formatted well, after each break (in your email template), add "<br>". This is a HTML element that adds a break to your line (for those of you who do not know). 

6. Next you update the Linkedin link to your Linkedin profile's link. 

7. For Resume attachment:
a. Upload your resume to your Google drive. 
b. Update the accessibility to "Anyone with the link" (Keep it to viewer).
c. Copy the link, the alphanumeric number you see in the link is the ID, copy and paste it in the script where it says "Enter your resume ID". 

Save everything and you're all set to use.

Ping me at 1110tanmay@gmail.com in case you guys face issues.

Thank you!
