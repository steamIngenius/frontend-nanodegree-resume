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
	],
	display: function() {
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
	} // end of display function
};

var projectData = {
	projects: [
		{
			"title" : "Dev Portfolio",
			"dates" : "Oct 2014",
			"description" : "Examples of projects I've built",
			"images" : ['http://www.fillmurray.com/300/300']
		},
		{
			"title" : "Living Resume",
			"dates" : "Oct 2014",
			"description" : "My Resume",
			"images" : ['http://www.stevensegallery.com/300/300']
		}
	],
	display: function() { // display these projects!!
		for ( project in this.projects ) {
			// to $('#projects')
			// .append an HTMLprojectStart
			$('#projects').append(HTMLprojectStart);
			// .append all the rest of the project data to the last project-entry class element
			$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', this.projects[project].title));
			$('.project-entry:last').append(HTMLprojectDates.replace('%data%', this.projects[project].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', this.projects[project].description));
			$('.project-entry:last').append(HTMLprojectImage.replace('%data%', this.projects[project].images));
		}
	}
};

var bio = {
	"name" : "Micah Hawkins",
	"role" : "Web Developer",
	"contacts" : { "email" : "micahbhawkins@gmail.com",
			"mobile" : "",
			"github" : "",
			"twitter" : ""
		},
	"pictureURL" : "http://www.fillmurray.com/200/200",
	"welcomeMessage" : "Greetings!",
	"skills" : [ "Troubleshooting", "WebDev", "Whatever OS", "Goobling Stuff", "RTFM" ],

	// function to internationalize our name - moved to the bio object for encapsulation
	inName: function() {
		name = bio.name;
		spaceIndex = name.indexOf(' ');
		var interName = name[0].toUpperCase() + name.slice(1, spaceIndex).toLowerCase() + name.slice(spaceIndex).toUpperCase();
		return interName;
	},

	// display function for our bio object
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.inName(bio.name));
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		// this adds my name/role to the beginnging of the page, before any other sections
		$("#main").prepend(formattedName + formattedRole);

		// the rest of our bio information will go into #header
		$("#header").append(HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage));
		$("#header").append(HTMLemail.replace('%data%', bio.contact));
		$("#header").append(HTMLbioPic.replace('%data%', bio.pictureURL));
		// $("#main").append(bio.skills);
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
	} // end of display function
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


// $("#main").append(internationalizeButton);


// display resume information
bio.display();
work.display();
projectData.display();

// add our map!
$('#mapDiv').append(googleMap);