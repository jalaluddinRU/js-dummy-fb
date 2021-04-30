var database = [
	{
		username: "potol",
		password: "supersecret"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from todays work"
	},
	{
		username: "Sally",
		timeline: "Javascript is cool!"
	}	
];

var userNamePrompt = prompt("GIB USERNAME OwO");
var passwordPrompt = prompt("GIB PASSWORD UwU");

function signIn(user, pass) {
	if(user=== database[0].username && 
		pass===database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry user NOT recognized TwT");
	}
}

signIn(userNamePrompt, passwordPrompt);