module.exports   =  class Steps{
   
    constructor(nightmare){
        this.nightmare = nightmare;

        this.steps = {
            first : true,
            country : false,
            gender : false,
            interest : false,
            age : false ,
            scip : false,
        }
    }

    async close(){
        console.log('close.................................................')
        await this.nightmare.end();
    }

    async  gender (){
         if (this.gender === true){
             return;
         }
         let result = await this.nightmare
          .wait('.NuxGenderStep__genderOption[for="female"]')
          .click('.NuxGenderStep__genderOption[for="female"]')
          .wait('.NuxContainer')
          .then(()=>{
              this.steps.gender = true;
          })
          .catch((err)=>{
             
          }) 
     }
     async country (){
        if (this.country === true){
            return;
        }
       
        let result = await this.nightmare
          .wait('.NuxContainer')
          .click('.NuxContainer button')
          .wait('.NuxContainer')
          .then(()=>{
            //  this.steps.country = true;
          })
          .catch((err)=>{
           
          }) 
       
     }

     async scip (){
    
        let result = await this.nightmare
          .wait('.NuxExtensionUpsell__optionalSkip')
          .click('.NuxExtensionUpsell__optionalSkip')
          .then(()=>{

             // this.steps.scip = true;
          })
          .catch((err)=>{
          
          }) 
        
     }

     async checkLogined(){
        let result =  await this.nightmare
         .wait('.pinWrapper')
         .click('.pinWrapper')
         .click('.ReactModalPortal')
         .click('.SaveButton')
         .type("#boardEditName","i like it")
         .click("form button")
         .then(()=>{  
               console.log("we make first pin");
         })
         .catch(()=>{})
     }

     async pickInterest(){
        if (this.interest === true){
            return;
        }
        let result = await  this.nightmare  
        .wait('.NuxInterest')
        .evaluate(() => {
            
                let elems = document.querySelectorAll('.NuxInterest');
                console.log(elems.length);
                elems.forEach(function(elem){
                    elem.click();
                })
                document.querySelector('.NuxPickerFooter button').click();
        }) 
        .then(()=>{
          //  this.steps.gender = true;
           // this.steps.interest = true;
          //  this.steps.country = true;
          //  this.steps.scip = true;
           // this.nightmare.wait(3000).end();
        })
        .catch(error => {
         
        })
     }

 }
