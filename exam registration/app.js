 
let allcandidate=[];
let loc=['Delhi','Mumbai', 'Lucknow', 'Patna', 'Dehradun'];
function register()
{
        
   
 let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let candidate={
    name:name,
    email:email
}

addcandidate(candidate);



}

function addcandidate(inputcandidate){
    let checkuser=allcandidate.filter((currcandi)=>{
        return currcandi.name=inputcandidate.name;
});

if(checkuser.length==0)
   {
    allcandidate.push(inputcandidate)
    let locnew=loc[Math.floor(Math.random(loc)*10)];
    document.getElementById("loc_container").innerText = locnew;
   } 
else
alert('user exists');
}