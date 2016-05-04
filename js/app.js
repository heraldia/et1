/*
 * Copyright © 2012-2015, Intel Corporation. All rights reserved.
 * Please see the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
//
/*
   function doJSON1() {
            $.getJSON('http://127.0.0.1:9000/test', function (data) {
                alert(JSON.stringify(data));
            });
        }
    function doJSON2() {
            $.getJSON('http://time.jsontest.com/?alloworigin=true', function (data) {
                alert(JSON.stringify(data));
            });
        }
        function doJSON3() {
            $.getJSON('http://time.jsontest.com/?alloworigin=false', function (data) {
                alert(JSON.stringify(data));
            });
        }
*/

/*  
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"xresult.txt",
            success:function(result){
                $("#testDiv").html(result);
            }});    
    });
});
 *   */


//$.each(data, function (index, item) {
//     var eachrow = "<tr>"
//                 + "<td>" + item[1] + "</td>"
//                 + "<td>" + item[2] + "</td>"
//                 + "<td>" + item[3] + "</td>"
//                 + "<td>" + item[4] + "</td>"
//                 + "</tr>";
//     $('#tbody').append(eachrow);
//});
//
//        $(document).ready(function(){
//        });
function show3(){
    $("button").click(function(){
    $.ajax({url:"http://www.w3schools.com/json/myTutorials.txt",
            success:function(result){
                $("#testDiv").html(result);
            }});    
    });
}

function show2(){
    /*  
var jArr = [
{
    id : "001",
    name : "apple",
    category : "fruit",
    color : "red"
},
{
    id : "002",
    name : "melon",
    category : "fruit",
    color : "green"
},
{
    id : "003",
    name : "banana",
    category : "fruit",
    color : "yellow"
}
]
     *   */

$.ajax({url:"xresult.txt",
    success:function(jArr){
        var i = 1;
        var tableData = '' ; //'<table><tr><td>Id</td><td>Name</td><td>Category</td><td>Color</td></tr>';
        $.each(jArr, function(index, data) {
            tableData += '<tr><td>'+i+'</td><td>'+data["action"]+'</td><td>'+data["time"]+'</td></tr>';
            i = i + 1;
        });

        $('#tbody').html(tableData);
    }});    
}

function show1(){
$.get(
    //'http://www.w3schools.com/json/myTutorials.txt',
    'http://web.cs.iastate.edu/~yunfei/sue.txt',
    function(data){                     
        var i = 1;
        
        var tableData = ' <thead> <tr> <th>Id</th> <th>Action</th> <th>Time</th> </tr> </thead> ' ;
        $.each(data, function(index, data) {
            tableData += '<tr><td>'+i+'</td><td>'+data["action"]+'</td><td>'+data["time"]+'</td></tr>';
            i = i + 1;
        });

        $('#tbody').html(tableData);
        
    },
    'json'
);
}
