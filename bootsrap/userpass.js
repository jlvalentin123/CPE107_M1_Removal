function validate()
{
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    var usertype=document.getElementById("usertype").value;

    if (user=="admin" && pass=="admin" && usertype =="admin")
    {
        window.location.href="admin.html";
    }
    else if(user=="student1" && pass=="1234" && usertype=="student")
    {
        window.location.href="student.html";
    }
    else if(user=="teacher1" && pass=="1234" && usertype=="teacher")
    {
        window.location.href="teacher.html";
    }
    else if(user=="" && pass=="") {
        alert("Please enter username and password");
    }
    else
    {
         alert("You have entered a wrong username and password");
    }
}
