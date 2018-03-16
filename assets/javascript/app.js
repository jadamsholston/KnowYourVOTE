// Initialize Firebase
var config = {
    apiKey: "AIzaSyD-nzMOw1jGbJ97WX7VQG4CGSJRSSKTODs",
    authDomain: "represent-connect.firebaseapp.com",
    databaseURL: "https://represent-connect.firebaseio.com",
    projectId: "represent-connect",
    storageBucket: "represent-connect.appspot.com",
    messagingSenderId: "276903556955"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

//


// NYTIMES queryURL
var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    // add the api key parameter (the one we received when we registered)   
    baseURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    // grab text the user typed into the search input, add as parameter to url
var searchTerms;    

// GOVTRACKS queryURL

var govURL = "https://www.govtrack.us/api/v2/role?current=true";    