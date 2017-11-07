//Load Images To src
function callBannerImages(){
	
$.ajax({
  type: "GET", //Method Used

  url:"", //API Path

  success:function(data) {
	  
    //Loading Images from provided api and insert into position  
    $('img').attr('src',data.panels[0].image_src);
      
    //Loading url from provided api and insert into image  
    $('a').attr('href',data.url);
      
	},error:function(textStatus, errorThrown) {
	    console.log(textStatus);//Display error in console log
  }
  });
}