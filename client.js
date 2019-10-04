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
    //addRow();
    //$('table').append('<tr></tr>');
    let group = $('#groupInput').val();
    let date = $('#dateInput').val();
    $('tbody').append('<tr> <th> ' + group + '</th> <th>' + date + '</th> <th>' + '<button class="delete">DELETE!</button>' + '</th> </tr>');
    //let deleteButton = $('#deleteColumn').attr()
    console.log(group, date);
    $('#groupInput').val('')
    $('#dateInput').val('')
}

/*function addRow(){
    $('tbody').append('<tr></tr>');
}*/





function readyNow() {
    //console.log('we in here!');
    $('#meetupCount').text(numberOfMeetups);
    $('#addMeetup').on('click', addMeetupClick)
}