function myfunction(){
  document.getElementById("mydropdown").classList.toggle("show");
}
window.onclick=function(event){
  if(!event.target.matches('.dropbutton')){
     var dropdowns=document.getElementsByClassName('.contentdrop');
     var i;
     for(i=0;i<dropdowns.length;i++)
     {
      var opendropdown=dropdowns[i]; 
       if(opendropdown.classList.contains('show')){
        opendropdown.classList.remove('show');
       }
      }
    }
  }
  function myfunction2(){
    document.getElementById("mydropdown2").classList.toggle("show");
  }
  window.onclick=function(event){
    if(!event.target.matches('.dropbutton')){
       var dropdowns=document.getElementsByClassName('.contentdrop');
       var i;
       for(i=0;i<dropdowns.length;i++)
       {
        var opendropdown=dropdowns[i]; 
         if(opendropdown.classList.contains('show')){
          opendropdown.classList.remove('show');
         }
        }
      }
    }
    function myfunction3(){
      document.getElementById("mydropdown3").classList.toggle("show");
    }
    window.onclick=function(event){
      if(!event.target.matches('.dropbutton')){
         var dropdowns=document.getElementsByClassName('.contentdrop');
         var i;
         for(i=0;i<dropdowns.length;i++)
         {
          var opendropdown=dropdowns[i]; 
           if(opendropdown.classList.contains('show')){
            opendropdown.classList.remove('show');
           }
          }
        }
      }
      function myfunction4(){
        document.getElementById("mydropdown4").classList.toggle("show");
      }
      window.onclick=function(event){
        if(!event.target.matches('.dropbutton')){
           var dropdowns=document.getElementsByClassName('.contentdrop');
           var i;
           for(i=0;i<dropdowns.length;i++)
           {
            var opendropdown=dropdowns[i]; 
             if(opendropdown.classList.contains('show')){
              opendropdown.classList.remove('show');
             }
            }
          }
        }
      

  
