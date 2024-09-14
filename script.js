var Form = document.getElementById('resume-form');
var ResumeOutput = document.getElementById('resume-output');
var personalOutput = document.getElementById('personal-info-output');
var educationOutputs = document.getElementById('education-output');
var experienceOutputs = document.getElementById('work-experience-output');
var skillsOutputs = document.getElementById('skills-output');
Form.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    var profilePic = (_a = document.getElementById('profile-pic').files) === null || _a === void 0 ? void 0 : _a[0];
    Form.classList.remove('hidden');
    ResumeOutput.classList.add('hidden');
    if (profilePic) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var imgElement = document.createElement('img');
            imgElement.src = reader_1.result;
            personalOutput.innerHTML = '';
            personalOutput.appendChild(imgElement);
        };
        reader_1.readAsDataURL(profilePic);
    }
    personalOutput.innerHTML += "<h2>Personal Information</h2>\n  <p><strong>Name:</strong> ".concat(name, "</p>\n  <p><strong>Email:</strong> ").concat(email, "</p>\n  <p><strong>Phone:</strong> ").concat(phone, "</p>");
    educationOutputs.innerHTML = "<h2>Education</h2>\n  <p>".concat(education, "</p>");
    experienceOutputs.innerHTML = "<h2>Work Experience</h2>\n   <p>".concat(workExperience, "</p>");
    skillsOutputs.innerHTML = "<h2>Skills</h2>\n   <ul>".concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>");
    ResumeOutput.classList.remove('hidden');
    Form.classList.add('hidden');
    // Add edit buttons for each section
    addEditButtons();
    // Function to add edit buttons and handle editing
    function addEditButtons() {
        personalOutput.innerHTML += "<button id=\"edit-personal-info\" class=\"edit-button\">Edit Personal Info</button>";
        educationOutputs.innerHTML += "<button id=\"edit-education\" class=\"edit-button\">Edit Education</button>";
        experienceOutputs.innerHTML += "<button id=\"edit-experience\" class=\"edit-button\">Edit Work Experience</button>";
        skillsOutputs.innerHTML += "<button id=\"edit-skills\" class=\"edit-button\">Edit Skills</button>";
    }
    // Event listener for editing personal info
    (_b = document.getElementById('edit-personal-info')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var _a, _b, _c;
        var name = (((_a = personalOutput.querySelector('p:nth-of-type(1)')) === null || _a === void 0 ? void 0 : _a.textContent) || '').replace('Name: ', '');
        var email = (((_b = personalOutput.querySelector('p:nth-of-type(2)')) === null || _b === void 0 ? void 0 : _b.textContent) || '').replace('Email: ', '');
        var phone = (((_c = personalOutput.querySelector('p:nth-of-type(3)')) === null || _c === void 0 ? void 0 : _c.textContent) || '').replace('Phone: ', '');
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('phone').value = phone;
        Form.classList.remove('hidden');
        ResumeOutput.classList.add('hidden');
    });
    // Event listener for editing education
    (_c = document.getElementById('edit-education')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var _a;
        var education = ((_a = educationOutputs.querySelector('p')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
        document.getElementById('education').value = education;
        Form.classList.remove('hidden');
        ResumeOutput.classList.add('hidden');
    });
    // Event listener for editing work experience
    (_d = document.getElementById('edit-experience')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
        var _a;
        var workExperience = ((_a = experienceOutputs.querySelector('p')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
        document.getElementById('work-experience').value = workExperience;
        Form.classList.remove('hidden');
        ResumeOutput.classList.add('hidden');
    });
    // Event listener for editing skills
    (_e = document.getElementById('edit-skills')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
        var skills = Array.from(skillsOutputs.querySelectorAll('li')).map(function (li) { return li.textContent; }).join(',');
        document.getElementById('skills').value = skills;
        Form.classList.remove('hidden');
        ResumeOutput.classList.add('hidden');
    });
});
