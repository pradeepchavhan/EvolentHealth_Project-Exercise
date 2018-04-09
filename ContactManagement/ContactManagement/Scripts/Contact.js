//Load Data in Table when documents is ready
$(document).ready(function () {
    loadData();

    $("#PhoneNumber").keypress(function (e) {

        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#phoneno").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });

    $('#FirstName').keydown(function (e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });

    $('#LastName').keydown(function (e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });
});
//Load Data function
function loadData() {
    $.ajax({
        url: "/Contact/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            debugger;
            $.each(result, function (key, item) {
                html += '<tr>';
                
                html += '<td>' + item.FirstName + '</td>';
                html += '<td>' + item.LastName + '</td>';
                html += '<td>' + item.PhoneNumber + '</td>';
                html += '<td>' + item.EmailAddress + '</td>';
                html += '<td>' + item.IsActive + '</td>';
                html += '<td><a href="#" onclick="return getbyID(' + item.Id + ')">Edit</a> | <a href="#" onclick="Delele(' + item.Id + ')">Delete</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
//Add Data Function
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    debugger;

    var empObj = {
        FirstName: $('#FirstName').val(),
        LastName: $('#LastName').val(),
        EmailAddress: $('#EmailAddress').val(),
        PhoneNumber: $('#PhoneNumber').val(),
        Status: $("#IsActive").is(":checked")
        //Country: $('#Country').val()
    };
    $.ajax({
        url: "/Contact/Add",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
//Function for getting the Data Based upon contact ID
function getbyID(ID) {
    debugger;
    $('#FirstName').css('border-color', 'lightgrey');
    $('#LastName').css('border-color', 'lightgrey');
    $('#PhoneNumber').css('border-color', 'lightgrey');
    $('#EmailAddress').css('border-color', 'lightgrey');

    $.ajax({
        url: "/Contact/GetbyID/" + ID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#Id').val(result.Id);
            $('#FirstName').val(result.FirstName);
            $('#LastName').val(result.LastName);
            $('#PhoneNumber').val(result.PhoneNumber);
            $('#EmailAddress').val(result.EmailAddress);
            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}
//function for updating employee's record
function Update() {
    debugger;
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        Id: $('#Id').val(),
        FirstName: $('#FirstName').val(),
        LastName: $('#LastName').val(),
        PhoneNumber: $('#PhoneNumber').val(),
        EmailAddress: $('#EmailAddress').val(),
        Status: $("#IsActive").is(":checked")
    };
    $.ajax({
        url: "/Contact/Update",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
            $('#EmployeeID').val("");
            $('#FirstName').val("");
            $('#LastName').val("");
            $('#PhoneNumber').val("");
            $('#EmailAddress').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
//function for deleting employee's record
function Delele(ID) {
    var ans = confirm("Are you sure you want to delete this Record?");
    if (ans) {
        $.ajax({
            url: "/Contact/Delete/" + ID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                loadData();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}
//Function for clearing the textboxes
function clearTextBox() {

    $('#FirstName').val("");
    $('#LastName').val("");
    $('#PhoneNumber').val("");
    $('#EmailAddress').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#FirstName').css('border-color', 'lightgrey');
    $('#LastName').css('border-color', 'lightgrey');
    $('#PhoneNumber').css('border-color', 'lightgrey');
    $('#EmailAddress').css('border-color', 'lightgrey');

}
//Valdidation using jquery 
function validate() {
    debugger;
    var isValid = true;
    if ($('#FirstName').val().trim() == "") {
        $('#firstname').text("Please enter first name");
        $('#FirstName').css('border-color', 'Red');
        isValid = false;
    }
    else {
        var data = $('#FirstName').val();
        if (data.length > 50) {
            $('#firstname').text("First Name charachters length sholud not greater than 50 characters");
            isValid = false;
        }
        else {
            $('#FirstName').css('border-color', 'lightgrey');
            $('#firstname').text('');
        }
    }
    if ($('#LastName').val().trim() == "") {
        $('#LastName').css('border-color', 'Red');
        $('#lastname').text("Please enter last name");
        isValid = false;
    }
    else {
        var data = $('#LastName').val();
        if (data.length > 50) {
            $('#lastname').text("Last Name charachters length sholud not greater than 50 characters");
            isValid = false;
        }
        else {
            $('#LastName').css('border-color', 'lightgrey');
            $('#lastname').text('');
        }
    }
    if ($('#PhoneNumber').val().trim() == "") {
        $('#PhoneNumber').css('border-color', 'Red');
        $('#phoneno').text("Please enter phone number");
        isValid = false;
    }
    else {
        var data = $('#PhoneNumber').val().trim();
        if (data.length != 10) {
            $('#phoneno').text("Phone number should be 10 digit");
            isValid = false;
        }
        else {

            $('#PhoneNumber').css('border-color', 'lightgrey');
            $('#phoneno').text('');
        }
    }
    if ($('#EmailAddress').val().trim() == "") {
        $('#EmailAddress').css('border-color', 'Red');
        $('#email').text("Please enter email address");
        isValid = false;
    }
    else {
        var sEmail = $('#EmailAddress').val();
        var teste = validateEmail(sEmail)
        if (teste) {
            $('#EmailAddress').css('border-color', 'lightgrey');
            $('#email').text('');
        }
        else {
            $('#email').text("Please enter valid email address");
            isValid = false;
        }
    }

    //var r = $("#IsActive").is(":checked");
    //if (r==false) {
    //    $('#IsActive').css('border-color', 'Red');
    //    $('#email').text("Please enter email address");
    //    isValid = false;
    //}
    //else {
    //    $('#IsActive').css('border-color', 'lightgrey');
    //    $('#status').text('');
    //}
    return isValid;
}

function validateEmail(sEmail) {
    var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}