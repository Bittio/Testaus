function number(phoneNumber){
    if(phoneNumber === undefined || phoneNumber === null){
        throw new Error('tyhja');
    }  
    var regExp = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[ ]?([0-9]{4})$/;
    var phone = phoneNumber.match(regExp);
    if (phone) {
        return true;
    }
    else {
        return false;
    }
}
module.exports=number;