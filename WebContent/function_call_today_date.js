//call Today Date
function callTodayDate(){
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; //January is 0!
          var yyyy = today.getFullYear();
          if(dd<10){
              dd='0'+dd;
          } 
          if(mm<10){
              mm='0'+mm;
          } 
          today = dd+'/'+mm+'/'+yyyy;
          return today; //can change to return MM
      }

//Change Number in MM to Char
function changeNumtoCharMonth(mm){
	if(mm == 1){
		mm = "January";
	}else if(mm == 2){
		mm = "February";
	}else if(mm == 3){
		mm = "March";
	}else if(mm == 4){
		mm = "April";
	}else if(mm == 5){
		mm = "May";
	}else if(mm == 6){
		mm = "June";
	}else if(mm == 7){
		mm = "July";
	}else if(mm == 8){
		mm = "August";
	}else if(mm == 9){
		mm = "September";
	}else if(mm == 10){
		mm = "October";
	}else if(mm == 11){
		mm = "November";
	}else if(mm == 12){
		mm = "December";
	}
	return mm;
}