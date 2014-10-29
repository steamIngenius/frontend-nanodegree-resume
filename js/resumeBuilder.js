var work = {
	"jobs" : [
		{
			"employer" : "Extensis",
			"title" : "Priority Technical Support",
			"location" : "Portland, OR",
			"dates" : "Dec 13th 2012 - Present",
			"description" : "Provide technical support for Enterprise software installations."
	    },
	    {
	    	"employer" : "Columbia Care Services",
			"title" : "Mac Specialist",
			"location" : "Medford, OR",
			"dates" : "Something - Dec 7th 2012",
			"description" : "Support, Training, Technology Systems Implementation"
	    }
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Dev Portfolio",
			"dates" : "Oct 2014",
			"description" : "Examples of projects I've built",
			"images" : []
		},
		{
			"title" : "Living Resume",
			"dates" : "Oct 2014",
			"description" : "My Resume",
			"images" : []
		}
	]
};

var bio = {
	"name" : "Micah Hawkins",
	"role" : "Web Developer",
	"contact" : "micahbhawkins@gmail.com",
	"pictureURL" : "",
	"welcomeMessage" : "Greetings!",
	"skills" : [ "Troubleshooting", "WebDev", "Whatever OS", "Goobling Stuff", "RTFM" ]
};

var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"location" : "The Internet",
			"degree" : "Front End Web Developer Nanodegree",
			"majors" : [ "HTML", "CSS", "JavaScript", "Git", "GitHub" ],
			"dates" : "Oct 2014",
			"url" : "http://www.udacity.com"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#main").prepend(formattedName + formattedRole);
/*
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
*/

// if there are skills to be added
if ( bio.skills.length > 0 ) {
	// set up the page to receive skills
	$("#header").append(HTMLskillsStart);

	// add skills
	for ( i in bio.skills ) {
		var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

// if there are jobs to be added
if ( work.jobs.length > 0 ) {
	// add dem jobs to workExperience
	for ( i in work.jobs ) {
		// add HTMLworkStart to workExperience for each job
		// format each employer with HTMLworkEmployer and each job title with HTMLjobTitle
		// use the :last selector to add the info to the correct .work-entry element (the last one appended)
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		$("#workExperience").append(HTMLworkStart);
		$('.work-entry:last').append(formattedEmployer + formattedWorkTitle);
	}
}
