$(document).ready(function(){
   $("#syncTabButton").click(function(){
        $("#headbar").collapse('hide');
        $("#syncDiv").slideDown();
        $("#submitDiv1").slideUp();
        $("#recentDiv").slideUp();
        $("#submitDiv2").slideUp();
        $("#submitDiv3").slideUp();
        $("#submitDiv4").slideUp();
   });
   $("#submitTabButton").click(function(){
        $("#headbar").collapse('hide');
        $("#syncDiv").slideUp();
        $("#submitDiv1").slideDown();
        $("#recentDiv").slideUp();
        $("#submitDiv3").slideUp();
        $("#submitDiv4").slideUp();
   });
   $("#recentTabButton").click(function(){
        $("#headbar").collapse('hide');
        $("#syncDiv").slideUp();
        $("#submitDiv1").slideUp();
        $("#submitDiv2").slideUp();
        $("#submitDiv3").slideUp();
        $("#recentDiv").slideDown();
        $("#submitDiv4").slideUp();
   });
   $("#submitDiv1Next").click(function(){
      var checkJson = validateInput(["picture-input","addr","cid"]);

      if(checkJson.check){
        $("#alert1").hide();
        $("#headbar").collapse('hide');
        $("#syncDiv").slideUp();
        $("#recentDiv").slideUp();
        $("#submitDiv1").toggle('slide',{direction:'left'},500,function(){
            $("#submitDiv2").slideDown();
        });
      }else{
          $("#alert1").show();
      }
   });
   $("#submitDiv2Next").click(function(){
       var cause = $(".failureColor").html();
       //alert(cause);
       if(typeof(cause)=="undefined")
       {
           $("#alert2").show();
       }else{
           $("#alert2").hide();
            $("#headbar").collapse('hide');
            $("#syncDiv").slideUp();
            $("#recentDiv").slideUp();
            $("#submitDiv2").toggle('slide',{direction:'left'},500,function(){
                $("#submitDiv3").slideDown();
            });
       }
   });
   $("#submitDiv3Next").click(function(){
      if(finalSpecies==""||finalSpecies==null){
        $("#alert3").show();
      }else{
        $("#alert3").hide();
        $("#headbar").collapse('hide');
        $("#syncDiv").slideUp();
        $("#recentDiv").slideUp();
        $("#submitDiv3").toggle('slide',{direction:'left'},500,function(){
          $("#submitDiv4").slideDown();
        });
      }
   });
   $("#submitDiv2Prev").click(function(){
      $("#headbar").collapse('hide');
        $("#syncDiv").slideUp();
        $("#recentDiv").slideUp();
        $("#submitDiv2").toggle('slide',{direction:'right'},500,function(){
            $("#submitDiv1").slideDown();
        });
   });
   $("#submitDiv3Prev").click(function(){
       $("#headbar").collapse('hide');
        $("#syncDiv").slideUp();
        $("#recentDiv").slideUp();
        $("#submitDiv3").toggle('slide',{direction:'right'},500,function(){
            $("#submitDiv2").slideDown();
        });
   });
   $("#submitDiv4Prev").click(function(){
       $("#headbar").collapse('hide');
        $("#syncDiv").slideUp();
        $("#recentDiv").slideUp();
        $("#submitDiv4").toggle('slide',{direction:'right'},500,function(){
            $("#submitDiv3").slideDown();
        });
   });
});
