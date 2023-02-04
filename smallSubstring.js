function solution(t,p){
    var answer = 0;

    /** @type {string} */
    var t = String(t);

    var pLen = String(p).length;

    for(var i=0; i<=t.length - pLen; i++){

        if(Number(t.substring(i, i + pLen)) <= p){
            answer ++;
        }
    }

    return answer
}
console.log(solution(3141592, 271))
console.log(solution(500220839878, 7))
console.log(solution(10203, 15))
