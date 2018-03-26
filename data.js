module.exports = 
class Data{
   
    constructor(path){
       this.path = path;
       this.fs = require("fs");
       this.db = this.fs.readFileSync(path,{encoding:"UTF-8"}).split('\n');
    }

    remove (index = 0){
        console.log(`remove  ${this.db.length}  : ${this.db.splice(index, 1).length}  `);
    }

    save(){
        this.fs.writeFile(this.path ,this.db.join("\n"),(err,done)=>{
            console.log('save')
            if(err){
                console.log(err);
            }
        });
    }

    getfirst(){
        return this.db[0].trim();
    }
}






