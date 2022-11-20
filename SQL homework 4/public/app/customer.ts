let childRegNo=document.getElementById('child-reg-no')as HTMLFormElement

// child registration no children inputs
let childNameNo=document.getElementById('childNameNo')as HTMLInputElement
let childAgeNo=document.getElementById('childAgeNo')as HTMLInputElement
let userId=document.getElementById('userId')as HTMLInputElement
// end of child registration no children inputs
// regex
const hebNameRegexN: RegExp=/[\u0590-\u05FF\u200f\u200e]{2,9}[-\s]{0,1}[\u0590-\u05FF\u200f\u200e]{0,9}[-\s]{0,1}[\u0590-\u05FF\u200f\u200e]{0,9}/iu
const ageRegexN=new RegExp('^[0-9]{1,2}$')
// end of regex

// form validation
childRegNo.addEventListener('submit',(evt:Event)=>{
    if(userId.value.length===0){
        evt.preventDefault()
        alert('המשתמש לא רשום')
    }else{
    if(childNameNo.value.length===0){
        evt.preventDefault()
        alert('השדה שם הילד ריק והוא שדה חובה')
    }else{
        hebNameValidationN(evt,childNameNo,'שם הילד')
        if(childAgeNo.value.length===0){
            evt.preventDefault()
            alert('השדה גיל הילד ריק והוא שדה חובה')
        }else{
            childAgeValidationN(evt,childAgeNo,'גיל הילד')
        }
    }}
})
// end of form validation

// validation functions
function hebNameValidationN(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test = input.value.match(hebNameRegexN)
    if (test===null){
        alert('שדה '+inputLabel+' לא תקין')
        input.value=''
        evt.preventDefault()
    }else{
        return true
    }
}
function childAgeValidationN(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test = input.value.match(ageRegexN)
    if(test===null){
        alert('שדה '+inputLabel+' לא תקין וחייב להיות עד 2 מספרים')
        input.value=''
        evt.preventDefault()
    }else{
        return true
    }
}