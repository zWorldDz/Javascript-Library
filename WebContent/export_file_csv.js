/*
 * Function for Export File from webservice into .csv
 */
 
$(document).ready(function(){
	$(" ").click(function(){ //Button ID which ready for click
    
    //JSON Format
	var toSer = { //Data that need to be send to server
		"venue": venue, 
		"startDate": newStartdate, 
		"endDate": newEnddate
		}
        
	$.ajax({
		type: "GET",  //Method Used
        
		url:"getexportreportAPI.tss", //API Path
        
		data:toSer , //Data that need to be send to server
        
		success:function(data) {
		    window.location = 'getexportreportAPI.tss?venue='+venue+'&startDate='+newStartdate+'&endDate='+newEnddate;
            //Start downloading the .csv
		},
		error:function(textStatus, errorThrown) {
		    console.log(textStatus); //Display error in console log
		}
		});
	});
});
//End 