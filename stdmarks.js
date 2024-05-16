
const std=[
    { name:"mithun",
        marks:95
    },
    { name:"ram",
        marks:45
    },
    { name:"raju",
        marks:72
    },
    { name:"prem",
        marks:92
    },
];
const check= (name)=>{
for(let std1 of std){

if(std1.name==name ){
 return std1.marks>90 ? console.log(`congratues ${std1.name} you cleared exam`):console.log(`sorry ${std1.name} you not cleared exam`); 

}

}
console.log("invalid user");
}
check("mithun");

check("raju")
check("rrrr")