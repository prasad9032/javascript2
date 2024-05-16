
function dates(eventdate){
    let date=new Date();
    let edate=new Date(eventdate);
    const  diff=date-edate;
    const days=Math.floor(diff/(1000*60*60*24));
    return days;
}
console.log("the remaining dates are:",dates('2024-02-15'));