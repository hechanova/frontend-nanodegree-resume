// $("#main").append("Laurel");

var formattedName = HTMLheaderName.replace("%data%","Laurel Hechanova");
var formattedRole = HTMLheaderRole.replace("%data%","UX/UI Designer");
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
