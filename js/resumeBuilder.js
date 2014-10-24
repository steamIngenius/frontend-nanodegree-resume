var name = "Micah Hawkins";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#main").prepend(formattedName + formattedRole);