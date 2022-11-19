let getPhone=document.getElementById('get-phone-form')
let submitPhoneBtn=document.getElementById('submit-phone')
let phoneInput = document.getElementById('phone-input') as HTMLInputElement
const phoneRegex=new RegExp('^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$')

function validation(evt:Event){
    let test =phoneInput.value.match(phoneRegex)
    if(test===null){
        evt.preventDefault()
        phoneInput.value=''
        alert('מספר הטלפון לא תקין')
    }else{
        return true
    }
}
getPhone?.addEventListener('submit',validation)