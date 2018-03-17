
/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  "name": "Jiahao Luo",
  "role": "Student",
  "skills": ["Programming on python, HTML, CSS, JavaScript"],
  "welcomeMessage": "I am currently completing a BEng in Chemical Engineering at the University of Nottingham. The programme is a four-year 2+2 programme, with the first two years on Nottingham’s Ningbo, China campus, and the next two years on Nottingham UK campus. I am on target to comfortably achieve FIRST CLASS HONOURS, and have maintained high grades throughout my studies. My most recent year’s grade average is 81%, with 76% and 78% in previous 2 years, where 70% is a first-class grade.",
  "biopic": "",
  "contacts": {
    "mobile": "0044 07729797411",
    "email": "enyjl7@nottingham.ac.uk",
    "github": "zy15662UNUK",
    "location": "L005 Rutland hall, University of Nottingham, Nottingham, NG7 2QZ",
  }
};

var education = {
  "schools": [
    {"name" : "University of Nottingham, Ningbo, China",
    "location" : "Ningbo, China",
    "dates" : "Sep 2014 - June 2016",
    "degree": "bachelor",
    "url": "https://www.nottingham.edu.cn",
    "majors": ["Chemical Engineering"]
  },
    {"name" : "University of Nottingham",
    "location" : "Nottingham, UK ",
    "dates" : "Sep 2016 - May 2018",
    "degree": "bachelor",
    "url": "https://www.nottingham.ac.uk",
    "majors": ["Chemical Engineering"]
  }
],
 "onlineCourses": [
   {
     "title" : "Introduction to Computer Science and Programming Using Python (94/100)",
     "school" : "MIT",
     "dates" : "2017.2-2017.4",
     "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11"
   },
   {
     "title" : "Introduction to Computational Thinking and Data Science (96/100)",
     "school" : "MIT",
     "dates" : "2017.4-2017.5",
     "url": "https://www.edx.org/course/introduction-computational-thinking-data-mitx-6-00-2x-6"
   },
   {
     "title" : "Front-End Web Developer Nanodegree",
     "school" : "Udacity",
     "dates" : "2017.10-till now",
     "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   }
 ],
};

var work = {
  "jobs": [
    {
      "employer": "Urban Environment Observation and Research Station, Ningbo, China",
      "title": "Research Assistant",
      "location": "Ningbo, China",
      "dates": "June 2016 – Aug 2016",
      "description": "Formulated enhanced adsorption performance of Kaolin clay and biochar for phosphate removal by impregnating material into sea water to load Ca2+ and Mg2+ onto material surface.\nAssisted post doctor research candidate to perform daily experiments; developed safe operating lab skills; performed literature research in databases"
    },
    {
      "employer": "University of Nottingham, Ningbo China",
      "title": "Laboratory Assistant",
      "location": "Ningbo, China",
      "dates": "June 2017 - Aug 2017",
      "description": "Applied a crawler application called “Octopus” to collect data online\nAssisted in building up a credit score system for a P2P website in construction industry\nTried to identify potential clients for a decoration company\nRecognized the importance of big data and programming skills",
    },
  ]
};

var projects = {
  "projects": [
    {
      "title": "mock-up-to-article",
      "dates": "2017.10",
      "description": "tb5ynyn",
      "images": ["images\\fry.jpg"]
    },
    {"title": "animal-trading-card",
    "dates": "2017.10",
    "description": "fregv4tb",
    "images": ["images\\fry.jpg",]
  },
    {"title": "design-mockup-portfolio",
    "dates": "2017.10",
    "description": "by5n6",
    "images": ["images\\fry.jpg"]
  },
  ],

};
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("\"%data%\"", "images\\fry.jpg");
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmails = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmails);
  $("#footerContacts").append(formattedEmails);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);
  $(".clear-fix").append(formattedBioPic);
  $("#header").append(formattedWelcomeMessage);
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++){
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
};
bio.display();

education.display = function() {
  var formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor;
  for(var i = 0; i < education.schools.length; i++) {
    formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    $(".education-entry:last").children("a").attr('href', education.schools[i].url);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    for (var j = 0; j < education.schools[i].majors.length; j++) {
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
    }

  }
  $(".education-entry:last").append(HTMLonlineClasses);
  var formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL;
  for(i = 0; i < education.onlineCourses.length; i++) {
    formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append("<div class = onlineCourses-content></div>");
    $(".onlineCourses-content:last").append(formattedOnlineDates);
    $(".onlineCourses-content:last").append(formattedOnlineTitle + formattedOnlineSchool);
    $(".onlineCourses-content:last").children("a:last").attr('href', education.onlineCourses[i].url);
    $(".onlineCourses-content:last").children("a:last").attr('class', "onlineCourses-title");
  }

};
education.display();


work.display = function() { for (var i = 0; i < work.jobs.length; i++){
  $("#workExperience").append(HTMLworkStart);
  var formatWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
  var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
  var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
  var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
  $(".work-entry:last").append(formatWorkEmployer+formattedWorkTitle);
  $(".work-entry:last").append(formattedWorkDates);
  $(".work-entry:last").append(formattedWorkLocation);
  $(".work-entry:last").append(formattedWorkDescription);
}
};
work.display();

projects.display = function(){
  $("#projects").append("<div class = 'project-content'></div>");
  for (var i = 0; i <projects.projects.length; i++){
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-content").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    for (var j = 0; j < projects.projects[i].images.length; j++) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[i].images[j]));
      $(".project-entry:last").children("img").attr('class', 'project-img');
    }
  }
};
projects.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
