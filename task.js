// To create own resume in JSON format

const resume = {
    "personal_information": {
      "name": "S Dhatchanamoorthy",
      "email": "dhatchxxx@gmail.com",
      "phone": "123-456-7890",
      "address": "123 Main Street, Cityville, Chennai, 600228"
    },
    "education": 
      {
        "degree": "Bachelor of Science in Computer Science",
        "university": "Pondicherry University",
        "location": "Pondicherry, Pondicherry",
        "graduation_year": "2018"
      }
    ,
    "experience": 
      {
        "position": "Software Engineer",
        "company": "US Bank",
        "location": "Chennai, Tamil Nadu",
        "start_date": "Nov 2020",
        "end_date": "Present",
        "responsibilities": [
          "Developing and maintaining software applications.",
          "Collaborating with team members to design and implement new features.",
          "Troubleshooting and debugging issues in existing codebase."
        ]
      }
    ,
    "skills": [
      "Programming Languages: Python, JavaScript",
      "Web Development: HTML, CSS",
      "Database Management: SQL",
      "Version Control: Git",
      "Problem Solving",
      "Team Collaboration"
    ],
    "languages":  [
      {
        "language": "Tamil",
        "fluency": "Native"
      },
      {
        "language": "English",
        "fluency": "Intermediate"
      }
    ]
  }


// 2 iterate the JSON using all for loops

// for loop
let keys = Object.keys(resume);

for(let i = 0; i < keys.length; i++){
  console.log(resume[keys[i]]);
}

console.log("-----------------------------------------------------------")

// using for of loop

for(let [key, value] of Object.entries(resume)){
  console.log(`${key}: ${JSON.stringify(value)}`);
}


console.log("-----------------------------------------------------------")


// using for in loop

for(let key in resume) {
  console.log(`${key}: ${JSON.stringify(resume[key])}`);
}

console.log("-----------------------------------------------------------")

// using for each loop

Object.entries(resume).forEach(([key, value]) => {
  console.log(`${key}: ${JSON.stringify(resume[key])}`);
});