const phoneRegex=new RegExp('^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$')
let getPhone=document.getElementById('get-phone-form') as HTMLFormElement

// let {name,phone,otherPhone,street,houseNum,apartementNum,city}=

// home page form input
let phoneInput = document.getElementById('phone-input') as HTMLInputElement
// end of home page form input

// form validation
getPhone.addEventListener('submit',(evt:Event)=>{
    Phonevalidation(evt,phoneInput,'מספר הטלפון')
})
// end of form validation

// validation function
function Phonevalidation(evt:Event,input:HTMLInputElement,inputLabel:String){
    let test =input.value.match(phoneRegex)
    if(test===null){
        evt.preventDefault()
        input.value=''
        alert(inputLabel + ' לא תקין')
    }else{
        return true
    }
}
// end of validation function