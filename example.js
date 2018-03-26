const Nightmare = require('nightmare');
const Steps = require("./steps.class");
const fs = require("fs");
const Data = require("./data");
const password = password

let gmail = new Data("./data/gmail.txt");
let proxy = new Data("./data/proxy.txt");

let map  = [];
let counter = 0;

(function main() {
   //ended 
    process.stdout.write('\033c');
    console.log(`misc lengt ${map.size}`)

 

    map.forEach((e,index)=>{
        console.log(`foreach :  ${index}  `)
        if(index < (map.length - 1)){
            console.log(` index ${index} ${e}   `)
            if (e != null ){
                e.close();
                e == null;
            }
            
         
        }
    })

    if (counter % 10 == 0 && counter != 0 ){
        console.log(`clear proxy`);
        proxy.remove();
        proxy.save();
    }
    
    console.log(`${gmail.getfirst()} : ${proxy.getfirst()}`)
    let flag = false;

    let nightmare = Nightmare({
        switches: {'proxy-server': proxy.getfirst()},
        show: (counter % 5 == 0 ) ? true:  false,
        executionTimeout: 1000 * 45,
        waitTimeout :1000 * 45
    });

    async function login () {
        let result = await nightmare
          .goto('https://pinterest.com')
          .type('#email', gmail.getfirst())
          .type('#password', 'trance123')
          .click('.SignupButton')
          .wait('.NuxContainer',50000)
          .then(()=>{
              flag = true
          })
          .catch((err)=>{
              console.log(err)
              flag = false
            }) ;
    
          console.log(`after  logined ${flag}`);
    };


    let allstep = new Steps(nightmare);
    login().then(()=>{
        console.log(`promise resolved ${flag}`);
        if(flag){
           Make(allstep,nightmare);
           fs.appendFileSync("./data/result.txt",`${gmail.getfirst()}:${password} \n`);
           gmail.remove();
           gmail.save();
        }else{
           console.log(`this proxy suxs`);
           proxy.remove();
           proxy.save();

        }
        map.push(allstep);  
        counter++;
       
    })
  
    setTimeout(main, 70000);
})();

function clearMisc(){
    let smaller = misc.filter(x=>x.counter < (counter -1 ));
    if (smaller){
        smaller.forEach((element,index)=>{
            element.browser.end();
        })
    }
}

 function Make(allstep , nightmare ){
     if ( nightmare && nightmare.ending == true){
         return;
     } 

     setTimeout(()=>{
        console.log(`pick interest : ${allstep.steps.pickInterest} `)
        allstep.country();
        allstep.gender();
        allstep.scip();
        allstep.pickInterest();
        allstep.checkLogined();
        if (nightmare && nightmare.ending == false ){
            Make(allstep);
        }
     },3000)
 }


