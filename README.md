# Demo using IISNode with multiple servers in same application

Joe Kampschmidt

## Features

 - Two different servers (server1.js and server2.js) side by side (in same directory and same app pool)
 - Demonstrates the use of **nodeProcessCountPerApplication** setting in web.config
 

## To Run

 1. Setup IISNode <https://github.com/tjanczuk/iisnode>
 2. Deploy the following files to a new application in IIS
  - index.html (client to watch node processes)
  - server1.js
  - server2.js
  - web.config

### web.config settings

    
    <handlers>
      <add name="iisnode-nfxplanner1" path="server*.js" verb="*" modules="iisnode" />
    </handlers>
    
    <iisnode  
        nodeProcessCommandLine=""%programfiles%\nodejs\node.exe""   
        interceptor=""%programfiles%\iisnode\interceptor.js"" 
        nodeProcessCountPerApplication="2"
    />

### Issues

 - Sometimes the IISNode file watching wouldn't always successfully watch and restart IIS when server1.js and server2.js files changed. Just force an iis reset.

### Resources

 - <http://www.iis.net/learn/get-started/introduction-to-iis/introduction-to-iis-architecture#HTTP>
 - <http://tomasz.janczuk.org/2011/10/architecture-of-iisnode.html>

