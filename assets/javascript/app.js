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
    var option = $("<option>");
    option.text(node["text"]);
    option.val(node["value"])
    $("#stateSearch").append(option);
})

var getInformation = function () {
    // Google Civic API QueryURL
    var civicBaseURL = "https://www.googleapis.com/civicinfo/v2/representatives?key=",
    civicKey = "AIzaSyD9croCTK4cWvy6I2Zz6VAllN_cufOQkp8",
    params = "&address=",
    name = $('#nameSearch').val().trim(),
    address = $('#addressSearch').val().trim(),
    zipCode = $('#zipCodeSearch').val().trim(),
    stateParams = $("#stateSearch").val();
    var representatives = $("#representatives");
    //append address parameters if field has input in them.
    if(address) {
        params += address + " ";
    }
    if(zipCode) {
        params += zipCode + " ";
    }
    if(stateParams) {
        params += stateParams;
    }

    var civicURL = civicBaseURL + civicKey + params;

    console.log(civicURL);

    // Creates local "temporary" object for holding person's data
    var newPerson = {
        name: name,
        address: address,
        state: stateParams,
        zipCode: zipCode
    }

    //Uploads person's data to the database
    database.ref().push(newPerson);

    console.log(newPerson.name);
    console.log(newPerson.address);
    console.log(newPerson.state);
    console.log(newPerson.zipCode);

    // Clears all of the text-boxes
    $('#nameSearch').val('');
    $('#addressSearch').val('');
    $('#zipCodeSearch').val('');
        
    $.ajax({
        url: civicURL,
        method: "GET"
    }).then(function (civicResponse) {
        for(var i = 0; i < 10; i++) {
            var panelGroup = $('<div class="panel-group rep-results">');
            representatives.append(panelGroup);
            var panelDefault = $('<div class="panel panel-default">');
            panelGroup.append(panelDefault);
            //Panel Heading
            var panelHeading = $('<div class="panel-heading">');
            panelDefault.append(panelHeading);
            //Panel Title
           var panelTitle = $('<div class="panel-title">');
           //Content inside of panel title
           var nameStrong = $('<strong>');
           nameStrong.text("John Adams");
           panelTitle.append(nameStrong);
           var spanIcon = $('<span class="pull-right">');
           panelTitle.append(spanIcon);
           var chevronDown = $('<i class="fa fa-chevron-down article-chevron">');
           chevronDown.attr("href", "#collapse" + i);
           chevronDown.attr("data-toggle", "collapse");
           chevronDown.attr("data-search-term", "John Adams");
           spanIcon.append(chevronDown);
           //Append Panel Title to Panel Heading
           panelHeading.append(panelTitle);
           //Append panel heading to panel title
           panelDefault.append(panelHeading);
           //Expandable Header
           var panelCollaspe = $('<div class="panel-collapse collapse">');
           panelCollaspe.attr("id", "collapse" + i);
           panelDefault.append(panelCollaspe)
           var panelBody = $('<div class="panel-body">');
           panelBody.text("Panel Body");
           panelCollaspe.append(panelBody)
        }
     
        console.log(civicResponse);
        console.log(civicResponse.normalizedInput.state);
        console.log(civicResponse.officials[0].name);
    });
}
$(document.body).on("click", ".article-chevron", function(event){
    // News API queryURL
    var newsBaseURL = "https://newsapi.org/v2/everything?q=",
    stateParams = $("#stateSearch").val(),
    repParams, // need to determine how we get this to work. 
    newsKey = "&apiKey=672f8d40b47842c3bd2ac11a4f688a15";

    var newsURL = newsBaseURL + stateParams + repParams + newsKey;

    console.log(newsURL);

    $.ajax({
    url: newsURL,
    method: "GET"
    }).then(function (newsResponse) {

        console.log(newsResponse);
    });
})

$("#runSearch").on("click", function(event){
    event.preventDefault();
    getInformation();
    return;
})