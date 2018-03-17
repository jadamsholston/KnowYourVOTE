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

//COO add an array of states with their abbreviations (value) and their full names (text)
var usStates = [
    { text: 'ALABAMA', value: 'AL'},
    { text: 'ALASKA', value: 'AK'},
    { text: 'AMERICAN SAMOA', value: 'AS'},
    { text: 'ARIZONA', value: 'AZ'},
    { text: 'ARKANSAS', value: 'AR'},
    { text: 'CALIFORNIA', value: 'CA'},
    { text: 'COLORADO', value: 'CO'},
    { text: 'CONNECTICUT', value: 'CT'},
    { text: 'DELAWARE', value: 'DE'},
    { text: 'DISTRICT OF COLUMBIA', value: 'DC'},
    { text: 'FEDERATED STATES OF MICRONESIA', value: 'FM'},
    { text: 'FLORIDA', value: 'FL'},
    { text: 'GEORGIA', value: 'GA'},
    { text: 'GUAM', value: 'GU'},
    { text: 'HAWAII', value: 'HI'},
    { text: 'IDAHO', value: 'ID'},
    { text: 'ILLINOIS', value: 'IL'},
    { text: 'INDIANA', value: 'IN'},
    { text: 'IOWA', value: 'IA'},
    { text: 'KANSAS', value: 'KS'},
    { text: 'KENTUCKY', value: 'KY'},
    { text: 'LOUISIANA', value: 'LA'},
    { text: 'MAINE', value: 'ME'},
    { text: 'MARSHALL ISLANDS', value: 'MH'},
    { text: 'MARYLAND', value: 'MD'},
    { text: 'MASSACHUSETTS', value: 'MA'},
    { text: 'MICHIGAN', value: 'MI'},
    { text: 'MINNESOTA', value: 'MN'},
    { text: 'MISSISSIPPI', value: 'MS'},
    { text: 'MISSOURI', value: 'MO'},
    { text: 'MONTANA', value: 'MT'},
    { text: 'NEBRASKA', value: 'NE'},
    { text: 'NEVADA', value: 'NV'},
    { text: 'NEW HAMPSHIRE', value: 'NH'},
    { text: 'NEW JERSEY', value: 'NJ'},
    { text: 'NEW MEXICO', value: 'NM'},
    { text: 'NEW YORK', value: 'NY'},
    { text: 'NORTH CAROLINA', value: 'NC'},
    { text: 'NORTH DAKOTA', value: 'ND'},
    { text: 'NORTHERN MARIANA ISLANDS', value: 'MP'},
    { text: 'OHIO', value: 'OH'},
    { text: 'OKLAHOMA', value: 'OK'},
    { text: 'OREGON', value: 'OR'},
    { text: 'PALAU', value: 'PW'},
    { text: 'PENNSYLVANIA', value: 'PA'},
    { text: 'PUERTO RICO', value: 'PR'},
    { text: 'RHODE ISLAND', value: 'RI'},
    { text: 'SOUTH CAROLINA', value: 'SC'},
    { text: 'SOUTH DAKOTA', value: 'SD'},
    { text: 'TENNESSEE', value: 'TN'},
    { text: 'TEXAS', value: 'TX'},
    { text: 'UTAH', value: 'UT'},
    { text: 'VERMONT', value: 'VT'},
    { text: 'VIRGIN ISLANDS', value: 'VI'},
    { text: 'VIRGINIA', value: 'VA'},
    { text: 'WASHINGTON', value: 'WA'},
    { text: 'WEST VIRGINIA', value: 'WV'},
    { text: 'WISCONSIN', value: 'WI'},
    { text: 'WYOMING', value: 'WY' }
];
usStates.forEach(function(node){
    //COO - populate state ddlb here.
    console.log(node["text"]);
    console.log(node["value"])
})

// GOVTRACKS queryURL
var govURL = "https://www.govtrack.us/api/v2/role?current=true";   

// News API queryURL
var newsBaseURL = "https://newsapi.org/v2/everything?q=", 
    stateParams = usStates[0]["value"], 
    repParams ; // need to determine



