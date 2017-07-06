/*
 * Ajax Post method
 */

//JSON Format
var toSer = {  //Data that need to be send to server
  "venue": venue, 
  "startDate": newStartdate, 
  "endDate": newEnddate
  }
		  
$.ajax({
  type: "Post", //Method Used
  
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
