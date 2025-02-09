function DoSomething(){
    let a=1;
    a= eoo(a);
    alert("hhello guys im dhayanand")
    console.log("liv long");
    
}
function eoo(a) {
    return a+4;
}

//create a cookie
document.cookie = "lol=true";

//create a cookie with exipration and path
document.cookie = "Who=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

//Creation of an expired cookie
document.cookie = "yoo=true; expires=Fri, 31 Dec 1940 23:59:59 GMT; path=/";


//log cookie
console.log(document.cookie);