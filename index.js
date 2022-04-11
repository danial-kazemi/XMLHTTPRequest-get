"use strict";

function getData(url){
    return new Promise((resolve, reject) => {
        let getRequest = new XMLHttpRequest();
        getRequest.open('GET',url);
      // OR getRequest.onload                             
        getRequest.onreadystatechange = function(){   
             
            if(this.status === 200){                          
                if(this.readyState === XMLHttpRequest.DONE){
                    let response = this.responseText;                            
                    resolve( response );
                }
            }else{                
                reject( new Error(`Error Num = ${this.status}`));
            }
        }        
        getRequest.send();
    });
}
getData('https://randomuser.me/api')

    .then( function(resolve){
        let JSONText = JSON.parse(resolve);
        console.log(JSONText.results[0])
        let name = `${JSONText.results[0].name.first} ${JSONText.results[0].name.last}`; 
        let imageSRC = JSONText.results[0].picture.large; 
        let nameTag = document.createElement('h1');
        nameTag.setAttribute('style', 'display: block; margin-bottom: 1rem ; text-align: center');
        nameTag.innerText = name;
        document.body.appendChild(nameTag);               
        let imageElemet = document.createElement('img');
        imageElemet.setAttribute('src',imageSRC);
        imageElemet.setAttribute('style','display: block; margin: 0 auto; border-radius: 50%');
        document.body.appendChild(imageElemet);
    })
    .catch((error) =>{
        console.log(error);
    })