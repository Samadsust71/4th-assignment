

function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    const username = email.slice(0, email.indexOf('@'));

    const domainName = email.slice(email.indexOf('@')+1);

   return username +' sent you an email from ' + domainName;
}


