<template>
  <div>
   
                <h1>Description</h1>
  
                - This Vue single page application was made with a Webpack 5 configuration
                <br/> <br/>
				
                
                <div class="test"><b>Last Updated: </b></div>
                - 07-05-2025 <br /> <br />
                				
                <b>Main functionality</b> <br />
                
                - Upgrading Node from 12.16 => 14.21.3 => 20.18.1 => 22.15.0<br />				
			    - Showing some of the power of Webpack<br />
				- Using Hot Reload / HMR by Webpack Dev Server <br />
                - Showing routing by Vue.js <br />
				- Partly support for older Browsers <br />
				- Custom 404 Error Page. Click the Secret menu link for a demo <br />
			    - Serving static assets like images, styles and fonts <br />
			    - Simulate GET, POST, PUT and DELETE towards a test Web API <br /> <br />
               
			   
                <b>Module Bundler</b> <br />
                
                - Manuel configuration of the Webpack 5 from scratch <br /> <br />
				
                 <b>Node Version Management</b> <br />

                
                - Volta <br /> <br /> 

				<b>The Vue single page application - The frontend</b> <br />
            
               
                - Mainly Vue.js<br />
                - Bootstrap 4 by CDN for the responsive design <br /> <br />

            
                <b>The Web API - The backend</b> <br />
 
                - The Web API is jsonplaceholder used for testing frontends <br /> <br />

                				
                <b>Security</b> <br />
             
                - The only security is the use of HTTPS because it is a demo only <br /> <br />
				
				
				<b>Hosting</b> <br />
                - The application is hosted at a traditionel Webhotel <br /> <br />
             

                <b>Text Editor</b> <br />
             
			    - Visual Studio Code <br />
            			 
	
  </div>
</template>

<script>
export default {
    name: 'AppAbout'
};
</script>

<style lang="scss" scoped>
    .title {
        h1 {
            color: blue;
        }
    }
</style>