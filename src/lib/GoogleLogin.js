import { useEffect, useState } from 'react';

const GoogleLogin = ({children}) => {
  
  const loadScript = () => {
    
        //loads the Google JavaScript Library and makes
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); 
            js.id = id;
            js.async = true;
            js.defer = true;
            js.src = "https://apis.google.com/js/platform.js";
            js.onload = window.onGoogleLoad; 
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-api'));    
        
        
  }
  
  
  useEffect(() => {
    loadScript();
  }, []);
  
  return (
    <>
      {children}
    </>
    
  );
  
  
}

export default GoogleLogin;