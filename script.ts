const Form= document.getElementById('resume-form') as HTMLFormElement;
const ResumeOutput = document.getElementById('resume-output') as HTMLDivElement;

const personalOutput = document.getElementById('personal-info-output') as HTMLElement;
const educationOutputs= document.getElementById('education-output') as HTMLElement;
const experienceOutputs = document.getElementById('work-experience-output') as HTMLElement;
const skillsOutputs = document.getElementById('skills-output') as HTMLElement;

Form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];
  Form.classList.remove('hidden');
  ResumeOutput.classList.add('hidden');
  if (profilePic) {
    const reader = new FileReader();
    reader.onload = function () {
      const imgElement = document.createElement('img');
      imgElement.src = reader.result as string;
      personalOutput.innerHTML = '';
      personalOutput.appendChild(imgElement);
    };
    reader.readAsDataURL(profilePic);
  }

  personalOutput.innerHTML += `<h2>Personal Information</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>`;

  educationOutputs.innerHTML = `<h2>Education</h2>
  <p>${education}</p>`;

  experienceOutputs.innerHTML = `<h2>Work Experience</h2>
   <p>${workExperience}</p>`;

  skillsOutputs.innerHTML = `<h2>Skills</h2>
   <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>`;

  ResumeOutput.classList.remove('hidden');

Form.classList.add('hidden');

  // Add edit buttons for each section
  addEditButtons();


// Function to add edit buttons and handle editing
function addEditButtons() {
  personalOutput.innerHTML += `<button id="edit-personal-info" class="edit-button">Edit Personal Info</button>`;
  educationOutputs.innerHTML += `<button id="edit-education" class="edit-button">Edit Education</button>`;
  experienceOutputs.innerHTML += `<button id="edit-experience" class="edit-button">Edit Work Experience</button>`;
  skillsOutputs.innerHTML += `<button id="edit-skills" class="edit-button">Edit Skills</button>`;}

  // Event listener for editing personal info
  document.getElementById('edit-personal-info')?.addEventListener('click', () => {
    const name = (personalOutput.querySelector('p:nth-of-type(1)')?.textContent || '').replace('Name: ', '');
    const email = (personalOutput.querySelector('p:nth-of-type(2)')?.textContent || '').replace('Email: ', '');
    const phone = (personalOutput.querySelector('p:nth-of-type(3)')?.textContent || '').replace('Phone: ', '');

    (document.getElementById('name') as HTMLInputElement).value = name;
    (document.getElementById('email') as HTMLInputElement).value = email;
    (document.getElementById('phone') as HTMLInputElement).value = phone;

    Form.classList.remove('hidden');
    ResumeOutput.classList.add('hidden');
  });

  // Event listener for editing education
  document.getElementById('edit-education')?.addEventListener('click', () => {
    const education = educationOutputs.querySelector('p')?.textContent || '';

    (document.getElementById('education') as HTMLInputElement).value = education;

    Form.classList.remove('hidden');
    ResumeOutput.classList.add('hidden');
  });

  // Event listener for editing work experience
  document.getElementById('edit-experience')?.addEventListener('click', () => {
    const workExperience = experienceOutputs.querySelector('p')?.textContent || '';

    (document.getElementById('work-experience') as HTMLTextAreaElement).value = workExperience;

    Form.classList.remove('hidden');
    ResumeOutput.classList.add('hidden');
  });

  // Event listener for editing skills
  document.getElementById('edit-skills')?.addEventListener('click', () => {
    const skills = Array.from(skillsOutputs.querySelectorAll('li')).map(li => li.textContent).join(',');

    (document.getElementById('skills') as HTMLInputElement).value = skills;
Form.classList.remove('hidden');
    ResumeOutput.classList.add('hidden');
  }
  )}
)
