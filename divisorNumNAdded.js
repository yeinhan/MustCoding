/**
 * 14주차 약수의 개수와 합
 * 
 */

function solution(left, right){
    var answer = 0;

    for(var i=left; i<=right; i++){
        if(divisor(i) % 2 == 0){
            answer += i;
        }else {
            answer -= i;
        }
    }

    return answer;
}

function divisor(num){
    var temp = [];

    for(var i=1; i<=num/2; i++){
        if(num % i === 0){
            temp.push(i);
        }
    }

    return [...temp, num].length;
}

console.log(solution(13,17))

//제곱근이 정수면 약수는 홀수다....

function solution2(left, right){
    var answer = 0;

    for(var i=left; i<=right; i++){
        if(Number.isInteger(Math.sqrt(i))){ //제곱근이 정수면 약수는 홀수니까 마이너스
            answer -= i;
        }else {
            answer += i;
        }
    }

    return answer;
}

console.log(solution2(13,17))