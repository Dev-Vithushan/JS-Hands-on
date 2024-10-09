function firstNonRepeat(str) {

    var rsl = str.split('').sort().join('').replace(/(\w)\1+/g,'').substr(0,1);
 
    if(rsl) return rsl;
 
    else return 'All characters are repeated in ' + str;
 
 }
 
 console.log(firstNonRepeat('sswwiiztz'));
 