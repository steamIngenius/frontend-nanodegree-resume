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

var projectData = {
	projects : [
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
	],
	display: function() {
		for ( project in this.projects ) {
			console.log(this.projects[project].title);
		}
	}
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

function inName() {
	name = bio.name;
	spaceIndex = name.indexOf(' ');
	var interName = name[0].toUpperCase() + name.slice(1, spaceIndex).toLowerCase() + name.slice(spaceIndex).toUpperCase();
	return interName;
}

var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#main").prepend(formattedName + formattedRole);
// $("#main").append(internationalizeButton);

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

var displayWork = function() {
	// if there are jobs to be added
	if ( work.jobs.length > 0 ) {
		// add dem jobs to workExperience
		for ( job in work.jobs ) {
			// add HTMLworkStart to workExperience for each job
			// format each employer with HTMLworkEmployer and each job title with HTMLjobTitle
			// use the :last selector to add the info to the correct .work-entry element (the last one appended)
			var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

			$("#workExperience").append(HTMLworkStart);
			$('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation
				+ formattedWorkDates + formattedWorkDescription);
		}
	}
}

displayWork();
