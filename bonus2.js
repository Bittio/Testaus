function contacts(contact){
    var regExp = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[ ]?([0-9]{4})$/;
    var phone = contact.phoneNumber.match(regExp);
    if(contact.firstname === undefined || contact.firstname === null || contact.firstname === ""){
        throw new Error('tyhja');
    }
    if(contact.lastname === undefined || contact.lastname === null || contact.lastname === ""){
        throw new Error('tyhja');
    }
    if(contact.phoneNumber === undefined || contact.phoneNumber === null || contact.phoneNumber === ""){
        contact.phoneNumber = "";
        return contact;
    }
    else { 
            if (phone) {
                return contact;
            }
            else {
                contact.phoneNumber = "";
                return contact;
            }
    }  

    
}
module.exports=contacts;