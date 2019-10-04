console.log('js', $);
let numberOfMeetups = 0;

$(document).ready(readyNow);

function addMeetupClick(){
    numberOfMeetups ++;
    console.log('I was clicked!');
    $('#meetupCounter').text(numberOfMeetups);
}







function readyNow() {
    console.log('we in here!');
    $('#meetupCounter').text(numberOfMeetups);
    $('#addMeetup').on('click', addMeetupClick)
}