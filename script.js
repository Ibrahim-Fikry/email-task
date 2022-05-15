function cutMail() {
    var mail = document.getElementById('mail')
    var name = document.getElementById('name')
    var domain = document.getElementById('domain')
    var mailinfo = mail.value
    var atindex = mailinfo.indexOf('@')
    name.value = mailinfo.substring(0, atindex)
    domain.value = mailinfo.substring(atindex + 1)
}