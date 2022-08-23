//TO DO
//Crud operations
//getallbirthdates
should i create all this on client side ??



/////////////////////////////////////////////////
// SMTP NODE MAILER

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Birthdays Today',
  text: 'Here are friends that have a birthday today'
  html: '<h1>Welcome</h1><p>That was easy!</p>' // test this out 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//////////////////////////////////////////////////
//function to check if there is any birthdays today or tommrow and returns the name and age

function checkbirthday (){
// code to get data from database
let birthdaytoday = [] 
let birthdaytommrow = []
let datafromDB = [{
name:'Kevin', day: 1, month:6, year: 1997
},{name:'Kevin', day: 23, month:8, year: 1999}]
let currentDate = new Date();
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
datafromDB.forEach(index =>{
    if(index.month === cMonth & index.day === cDay){
        let age = getCurrentAge(index.year)
        birthdaytoday.push({Name:index.name,Age:age})
    }
    if(index.month === cMonth & index.day === cDay + 1){
        let age = getCurrentAge(index.year)
        birthdaytommrow.push({Name:index.name,Age:age})
    }
});
  return [birthdaytoday,birthdaytommrow]
}

function getCurrentAge(year){
    let currentDate = new Date();
    let cYear = currentDate.getFullYear()
    let age = cYear - year
    return age
}

//////////////////////////////////////////////////
let Data schema = {
ObjectID: ID
Email: email
Password : Hash
Birthday: [{
name:'Kevin', day: 01, month:08, year: 1999
},{name:'Kevin', day: 01, month:08, year: 1999}]
}

//////////////////////////////////////////////////
var scheduler = require('node-schedule');

// setting rule set (later can be done in a config file
var rule = new scheduler.RecurrenceRule();
rule.hour = 00;
rule.minute = 15;
rule.second = 00;
rule.dayOfWeek = new scheduler.Range(0,6);

var dailyJob = scheduler.scheduleJob(rule, function(){

// code for the job
//…
//…
console.log('this will run everyday at 12:15 AM');

});


//this code is used to run the job to check if there is any birthday today and send a mail to the user
// Code ref: https://buildcoding.com/how-to-schedule-a-job-everyday/#:~:text=When%20you%20have%20a%20few%20jobs%20that%20needs,hour%20or%20day%20or%20once%20in%20a%20week.



