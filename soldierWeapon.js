/**
 * 11주차 2번 문제
 * 
 * 테스트 1 〉	통과 (96.62ms, 38MB)
테스트 2 〉	통과 (9.59ms, 38MB)
테스트 3 〉	통과 (29.34ms, 37.6MB)
테스트 4 〉	통과 (12.89ms, 38MB)
테스트 5 〉	통과 (3.65ms, 37.6MB)
테스트 6 〉	통과 (94.53ms, 38MB)
테스트 7 〉	통과 (9.29ms, 38MB)
테스트 8 〉	통과 (5.97ms, 37.7MB)
테스트 9 〉	통과 (132.51ms, 37.9MB)
테스트 10 〉	통과 (4.31ms, 37.6MB)
테스트 11 〉	통과 (6991.70ms, 44.9MB)
테스트 12 〉	통과 (7666.55ms, 46.5MB)
테스트 13 〉	통과 (7270.24ms, 46.6MB)
테스트 14 〉	통과 (7669.59ms, 46.5MB)
테스트 15 〉	통과 (8776.93ms, 46.5MB)
테스트 16 〉	통과 (9378.07ms, 46.4MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (9340.08ms, 46.4MB)
테스트 19 〉	통과 (8.68ms, 37.9MB)
테스트 20 〉	통과 (8.75ms, 38MB)
테스트 21 〉	통과 (0.07ms, 33.5MB)
테스트 22 〉	통과 (0.08ms, 33.6MB)
테스트 23 〉	통과 (0.29ms, 33.5MB)
테스트 24 〉	통과 (9234.56ms, 46.5MB)
테스트 25 〉	통과 (8837.13ms, 46.4MB)
테스트 26 〉	통과 (3.01ms, 37.7MB)
테스트 27 〉	통과 (3.33ms, 37.6MB)
 */

/*약수 구하기*/
function divisors(num){
    var temp = [];

    for(var i=1; i<=num/2; i++){
        if(num % i === 0){temp.push(i)}
    }

    return [...temp, num].length
}

function solution(number, limit, power) {
    var answer = 0;
    var divisorsNums = [];

    for(var i=1; i<=number; i++){
        divisorsNums.push(divisors(i))
    }
    
    divisorsNums.forEach(function(e, idx){
        answer += e > limit ? power : e
    })

    // answer = divisorsNums.reduce(function(a,b){
    //     return a + b
    // })
    return answer;
}

console.log(solution(5,3,2))
// console.log(solution(10,3,2))