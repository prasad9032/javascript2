 let list1=['prem','ram',"raju","mithun"];

   
    function check(name1 ){
        if(list1.includes(name1)){
            console.log(`yes ${name1} is a valid user`);
        }
        else {
            console.log(`no ${name1} is not valid user`);
        }
       
    }  
    check("mithun");

    check("rahul")
    



