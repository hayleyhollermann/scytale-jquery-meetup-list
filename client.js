console.log('js', $);
let numberOfMeetups = 0;

$(document).ready(readyNow);


function deleteButtonClick(){
    console.log('delete'); 
    $(this).closest('tr').remove();
    // or $(this).parent().parent().remove();
}

function addMeetupClick(){
    numberOfMeetups ++;
    //console.log('I was clicked!');
    $('#meetupCount').text(numberOfMeetups);
    let group = $('#groupInput').val();
    let date = $('#dateInput').val();
    //appends new row of input to the table
    //$('tbody').append('<tr> <td> ' + group + '</td> <td>' + date + '</td> <td>' + '<button class="deleteButton">DELETE!</button>' + '</td> </tr>');
    $('tbody').append(`
        <tr> 
            <td> ${group} </td>
            <td> ${date} </td>
            <td> <button class="deleteButton">DELETE!</button> </td>`);
    //console.log(group, date);
    $('#groupInput').val('') //clears input field
    $('#dateInput').val('') //clears input field
}



function readyNow() {
    //console.log('we in here!');
    $('#meetupCount').text(numberOfMeetups);
    $('#addMeetup').on('click', addMeetupClick);
    $('tbody').on('click','.deleteButton', deleteButtonClick); //descendant selector
}