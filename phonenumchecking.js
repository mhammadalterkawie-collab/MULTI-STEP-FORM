
//formatting 
export function formattingphoneNumber(input){

input.addEventListener("input",(e)=>{
    let value=e.target.value.replace(/\D/g,'');
    
    let formatted = value.replace(/(\d{4})(\d{3})(\d{3})/,'$1 $2 $3');
e.target.value=formatted;
})



}


export function phonenumchecking(phonenum)
{  
  let phonstr=String(phonenum)
  phonstr.replace(/\s+/g,'');
    if(!phonstr.length){
            return 2;
    }
   else if (phonstr.length >= 8 && phonstr.length<=15)
    {
        return 0;
    }
    else{
        return 1;
    } 
}
