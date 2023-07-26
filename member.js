function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var contactBtn = document.getElementById("contactBtn");
    var memberIcon = document.getElementById("memberIcon");
    var skillsIcon = document.getElementById("skillsIcon");
    var contactIcon = document.getElementById("contactIcon");
    var memberText = document.getElementById("memberText");
    var skillsText = document.getElementById("skillsText");
    var contactText = document.getElementById("contactText");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    memberBtn.style.backgroundColor = "#F5F5F5";
    skillsBtn.style.backgroundColor = "#FFFFFF";
    contactBtn.style.backgroundColor = "#FFFFFF";
    memberIcon.style.color = "#000000";
    skillsIcon.style.color = "#BDBDBD";
    contactIcon.style.color = "#BDBDBD";
    memberText.style.color = "#000000";
    skillsText.style.color = "#BDBDBD";
    contactText.style.color = "#BDBDBD";
}