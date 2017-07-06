/*
 * Ajax Get method
 */

$(function ajaxGet(){

//JSON Format
var toSer = {  //Data that need to be send to server
  "venue": venue, 
  "startDate": newStartdate, 
  "endDate": newEnddate
  }

//Declare loading div (id) to variable loading
var loading = $("#loading"); 

//Display the loading div when when ajax started
$(document).ajaxStart(function () {
    loading.show(); 
});

//Hide the loading div when when ajax result received
$(document).ajaxStop(function () {
    loading.hide(); 
});	  

$.ajax({
  type: "GET", //Method Used
  
  url:"", //API Path
  
  data:toSer, //Data that need to be send to server
  
  success:function(data) {
    alert("Success"); /*
                       * What to do if it is connected succescfully
                       * -> data.key (JSON Format)
                       */
  },
  error:function(textStatus, errorThrown) {
    console.log(textStatus);//Display error in console log
  }
});
});