console.log('js', $);
let numberOfMeetups = 0;

$(document).ready(readyNow);

function addMeetupClick(){
    numberOfMeetups ++;
    //console.log('I was clicked!');
    $('#meetupCount').text(numberOfMeetups);
    addRow();
    //$('table').append('<tr></tr>');

}

function addRow(){
    $('tbody').append('<tr></tr>');

}





function readyNow() {
    //console.log('we in here!');
    $('#meetupCount').text(numberOfMeetups);
    $('#addMeetup').on('click', addMeetupClick)
}