function isPersian(event){
    var p = /^[\u0600-\u06FF\s]*$/;

    if (!p.test(event)) {
        return false;
    }
    return true;
}

function isNumber(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        return true;
    }
    return false;
}


function isPassword(event) {
    if (/^[a-zA-Z0-9_+!#$*=]*$/.test(event))
  {
    return true;
  }
    return false;
}

function isEnglish(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122) {
        return true;
    }
    return false;
}

function ValidateEmail(mail) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return true;
  }
    return false;
}






function check(){

    var error = "";
    //get title
    var t = document.getElementsByName("uiTitle")[0]
    var title = t.options[t.selectedIndex].value;

    //get and check first name and last name and english name
    var name = document.getElementsByName("uiFname")[0].value;
    var last_name = document.getElementsByName("uiLname")[0].value;
    var english_name = document.getElementsByName("uiEname")[0].value;
    

    if (name.length <3 || name.length >50)
         error += "هشدار: نام وارد شده باید بین 3 تا 50 حرف باشد<br/>"
    if (!isPersian(name)) 
        error += "هشدار: نام خود را به فارسی وارد کنید <br/>"
    if (last_name.length <3 || last_name.length >100)
        error += "هشدار: نام خانوادگی باید بین 3 تا 100 حرف باشد<br/>"
    if (!isPersian(last_name)) 
        error += "هشدار: نام خانوادگی خود را به فارسی وارد کنید<br/>"
    if (english_name.length >150)
        error += "هشدار: نام انگلیسی نباید بیشتر از 150 حرف باشد  <br/>"
    if (!isEnglish(english_name)) 
        error += "هشدار: نام انگلیسی خود را به انگلیسی وارد کنید<br/>"

    //get and check social security number
    var ssid = document.getElementsByName("uiSsid")[0].value;

    if (ssid.length != 10) 
        error += "هشدار: شماره ملی نامعتبر است. تعداد آن را چک کنید<br/>"
    if (!isNumber(ssid)) 
        error += "هشدار: برای کد ملی فقط از اعداد انگلیسی استفاده کنید<br/>"
    
    //get and check email
    var email = document.getElementsByName("uiEmail")[0].value;

    if (email == "") {
        error += "هشدار: وارد کردن ایمیل اجباری است<br />"
    }
    else if (email.length >64){
        error += "هشدار: ایمیل نامعتبر<br />"
    }
    else if (!ValidateEmail(email)){
        error += "هشدار: ایمیل نامعتبر<br />"
    }

    //get and check phone number
    var pnumber = document.getElementsByName("uiPnumber")[0].value;

    if (pnumber == "") {
        error += "هشدار: وارد کردن شماره موبایل اجباری است<br />"
    }
    else if (pnumber.length != 11) {
        error += "هشدار: شماره موبایل نامعتبر<br />"
    }

    // get and check passwords
    var password1 = document.getElementsByName("uiPass1")[0].value;
    var password2 = document.getElementsByName("uiPass2")[0].value;

    if (password1.length <8 || password1.length >24){
        error += "هشدار: پسورد باید بین 8 تا 24 کاراکتر باشد<br />"
    }
    else if (!isPassword(password1)) {
        error += "هشدار: فرمت پسورد را رعایت کنید <br />"
    }
    else if (password1 != password2){
        error += "هشدار: پسورد ها یکسان نیستند <br />"
    }

    //get and check address
    var address = document.getElementsByName("uiAddress")[0].value;
    
    if (!isPersian(address)) 
        error += "هشدار: آدرس خود را به فارسی وارد کنید <br />"
    if (address.length >250) 
        error += "هشدار: طول آدرس باید کمتر از 250 حرف باشد<br />"

    //get birthday
    var birthday = document.getElementsByName("uiBirthday")[0].value;

    //get and relationship status 
    var relationship_status= -1;
    for (var i=0; i < document.getElementsByName("uiRel").length; i++) {
        if (document.getElementsByName("uiRel")[i].checked) {
            selectedstatus = document.getElementsByName("uiRel")[i].value;
        }
    }
    if (relationship_status == -1)
        error += "هشدار: وضعیت تاهل خود را مشخص کنید<br />"


    //get interests
    var interests= [];
    for (var i=0; i < document.getElementsByName("uiInterests").length; i++) {
        if (document.getElementsByName("uiInterests")[i].checked) {
            interests.push(document.getElementsByName("uiInterests")[i].value);
        }
    }

    
    var submit = document.getElementsByName("uiSubmit")[0].checked;
    document.getElementById("uiMessage").innerHTML = error;
    return false;
}