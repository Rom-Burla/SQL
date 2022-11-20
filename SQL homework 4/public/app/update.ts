let updateForm = document.getElementById('update-form') as HTMLFormElement
// update form inputs
let upName=document.getElementById('upName')as HTMLInputElement
let upPhone = document.getElementById('upPhone')as HTMLInputElement
let upOtherPhone = document.getElementById('upOtherPhone')as HTMLInputElement
let upStreet = document.getElementById('upStreet')as HTMLInputElement
let upHouseNum=document.getElementById('upHouseNum')as HTMLInputElement
let upApartementNum=document.getElementById('upApartementNum')as HTMLInputElement
let upCity=document.getElementById('upCity')as HTMLInputElement
// end of update form inputs

// regex
const phoneRegexU=new RegExp('^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$')
const hebNameRegexU: RegExp=/[\u0590-\u05FF\u200f\u200e ]{2,9}((([-\s]{1})[\u0590-\u05FF\u200f\u200e]{2,9}))?((([-\s]{1})[\u0590-\u05FF\u200f\u200e]{2,9}))/iu
const hebStreetRegexU: RegExp=/[\u0590-\u05FF\u200f\u200e]{2,9}[-\s]{0,1}[\u0590-\u05FF\u200f\u200e]{0,9}[-\s]{0,1}[\u0590-\u05FF\u200f\u200e]{0,9}/iu
const numRegexU=new RegExp('^[0-9]{0,3}$')
//end of regex

// form validation
updateForm.addEventListener('submit',(evt:Event)=>{
    if(upName.value.length===0){
        evt.preventDefault()
        alert('שם מלא ריק והוא שדה חובה')
    }else{
    hebNameValidationU(evt,upName,'שם מלא')
        if(upPhone.value.length===0){
        evt.preventDefault()
        alert('טלפון ריק והוא שדה חובה')
    }else{
        PhonevalidationU(evt,upPhone,'מספר טלפון')
          if(upStreet.value.length===0){
        return null
    }else{
        hebStreetValidationU(evt,upStreet,'רחוב')
          if(upHouseNum.value.length===0){
        return null
    }else{
        houseNumValidationU(evt,upHouseNum,'מספר בית')
            if(upApartementNum.value.length===0){
        return null
    }else{
    apartementNumValidationU(evt,upApartementNum,'מספר דירה/ כניסה')
    if(upCity.value.length===0){
        evt.preventDefault()
        alert('שדה עיר ריק והוא שדה חובה')
    }else{
        cityValidationU(evt,upCity,'עיר')
           if(upOtherPhone.value.length===0){
        return null
    }else{
        PhonevalidationU(evt,upOtherPhone,'מספר הטלפון הנוסף')
    }
    }
    }
    }
    }
    }
    }
})
// end of form validation

// validation functions
function hebNameValidationU(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test = input.value.match(hebNameRegexU)
    if (test===null){
        alert('שדה '+inputLabel+' לא תקין')
        input.value=''
        evt.preventDefault()
    }else{
        return true
    }
}
function PhonevalidationU(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test =input.value.match(phoneRegexU)
    if(test===null){
        alert(inputLabel + ' לא תקין')
        input.value=''
        evt.preventDefault()
    }else{
        return true
    }
}
function hebStreetValidationU(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test=input.value.match(hebStreetRegexU)
    if(test===null){
        alert('שדה '+inputLabel + ' לא תקין')
        input.value=''
        evt.preventDefault()
    }else{
        return true
    }
}
function houseNumValidationU(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test = input.value.match(numRegexU)
    if (test===null){
        alert('שדה '+inputLabel+' לא תקין')
        input.value=''
        evt.preventDefault()
    }else{
        return true
    }
}
function apartementNumValidationU(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test = input.value.match(new RegExp('^[0-9\\u0590-\\u05FF\\u200f\\u200e]{0,2}$'))
    if(test===null){
        alert('שדה '+inputLabel+' לא תקין')
        input.value=''
        evt.preventDefault()
    }else{
        return true
    }
}
function cityValidationU(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test=input.value.match(hebStreetRegexU)
    if(test===null){
        alert('שדה '+inputLabel+' לא תקין')
        input.value=''
        evt.preventDefault()
    }else{
        return true
    }
}
// end of validation functions