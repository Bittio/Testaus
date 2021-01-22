function contacts(contact){
    
    if(contact === undefined || contact === null){
        throw new Error('muuttuja puuttuu');
    }
    var regExp = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[ ]?([0-9]{4})$/;
    var phone = contact.phoneNumber.match(regExp);
    if(contact.firstname === undefined || contact.firstname === null || contact.firstname === ""){
        throw new Error('tyhja');
    }
    if(contact.lastname === undefined || contact.lastname === null || contact.lastname === ""){
        throw new Error('tyhja');
    }
    if(contact.phoneNumber === undefined || contact.phoneNumber === null || contact.phoneNumber === ""){
        return '<li>' + contact.firstname + " " +contact.lastname + " " + contact.phoneNumber +'</li>';
    }
    else { 
            if (phone) {
                return '<li>' + contact.firstname + " " +contact.lastname + " " + contact.phoneNumber +'</li>';
            }
            else {
                contact.phoneNumber = "";
                return '<li>' + contact.firstname + " " +contact.lastname + " " + contact.phoneNumber +'</li>';                           
            }
    }  
    
}
module.exports=contacts;