const browserversion="chrome";


function getbrowserVersion()
    {
      var b=50;
    if(browserversion==="chrome"){

         let browserversion="edge";  
         var a=12;
        console.log('accessing var inside block:',browserversion);     
        //console.log(a);  

    }
   console.log('accessing var outside block:',browserversion);
   console.log(b); 
   console.log(a); 
  

}

getbrowserVersion();

