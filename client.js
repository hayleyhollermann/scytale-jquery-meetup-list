console.log('js', $);
let numberOfMeetups = 0;

$(document).ready(readyNow);

function readyNow() {
    //console.log('we in here!');
    $('#meetupCount').text(numberOfMeetups);
    $('#addMeetup').on('click', addMeetupClick)
}

function addMeetupClick(){
    numberOfMeetups ++;
    //console.log('I was clicked!');
    $('#meetupCount').text(numberOfMeetups);
    let group = $('#groupInput').val();
    let date = $('#dateInput').val();
    //appends new row of input to the table
    $('tbody').append('<tr> <th> ' + group + '</th> <th>' + date + '</th> <th>' + '<button class="delete">DELETE!</button>' + '</th> </tr>');
    //console.log(group, date);
    $('#groupInput').val('') //clears input field
    $('#dateInput').val('') //clears input field
}





function readyNow() {
    //console.log('we in here!');
    $('#meetupCount').text(numberOfMeetups);
    $('#addMeetup').on('click', addMeetupClick)
}