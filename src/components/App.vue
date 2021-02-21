
<template>
  <div> 
   		        
	<nav class="navbar navbar-expand-lg navbar-light">
		 		  
		   <router-link to="/">
              <img width="50px" alt="Webpack" src="../../src/images/favicon.png" >
           </router-link>&nbsp;&nbsp;
		  
          <button style="background-color:white" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
		 
         <div class="collapse navbar-collapse" id="navbarNav">
		
		 <div class="navbar-nav">
         		 
             <router-link to="/">Home</router-link>&nbsp;&nbsp;
          	
             <router-link to="/about">About</router-link>&nbsp;&nbsp;
           	
             <router-link to="/myinfo">Per Steen Olsen</router-link>&nbsp;&nbsp;
		   		   
             <router-link to="/employee">Web API</router-link>&nbsp;&nbsp;
			 
			 <router-link to="/error">Secret</router-link>

		 </div>
       </div>
      </nav>
	  
		 
    <router-view />
	
	<br />
	 A demo of a single page application made in Vue.js, PostCSS and Bootstrap 
	 
  </div>
</template>
