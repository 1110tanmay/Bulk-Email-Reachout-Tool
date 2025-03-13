Hi folks,

I understand how difficult it is to email multiple recruiter for different job profiles, being a Master's student, I felt it to be a very time consuming process.
To tackle this problem, I built a Bulk email reach out Tool. It is very simple to use yet very effective to use as well. 

How do you use it:

1. Open Google Sheets, create columns in this format:

![image](https://github.com/user-attachments/assets/a2862491-084f-4834-896a-1e94e88dac4b)

Under the status button, create a dropdown with two options: 
a. sent
b. not sent 

Go to Extensions>App Script> Paste the code there.

Every you run the script, it checks for that field if the field says sent, it would skip that row, and move forward. After it sends an email, it updates the field to sent. 

Next you need to add body and subject by yourself, you can create multiple subjects and bodies as dropdown under the columns listed. 

Since we would want the email to be formatted well, after each break (in your email template), add "<br>". This is a HTML element that adds a break to your line (for those of you who do not know). 

Next you update the Linkedin link to your Linkedin profile's link. 

For Resume attachment:
a. Upload your resume to your Google drive. 
b. Update the accessibility to "Anyone with the link" (Keep it to viewer).
c. Copy the link, the alphanumeric number you see in the link is the ID, copy and paste it in the script where it says "Enter your resume ID". 

Save everything and you're all set to use.

Ping me at 1110tanmay@gmail.com in case you guys face issues.
