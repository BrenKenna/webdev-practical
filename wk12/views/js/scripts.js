/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function draw(){
    $('#results').empty();
    $.getHTML = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
                output = html;
            }
        });

    };
    $.getHTML("/get");

}

function name(){
    alert("test");
    $.ajax({
        type: "POST",
        url: '/post',
        dataType: 'json',
        contenType: 'application/json',
        data: '{"name":"' + $("#input").val() + '"}',
        async: false,
        success: setTimeout(draw(), 1000)

    });

};

$(document).ready(function(){
    draw();
})