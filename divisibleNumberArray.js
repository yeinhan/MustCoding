/**
 * 
 * 4주차 
 * 2번쨰 나누어 떨어지는 배열
 * 
 * 테스트 1 〉	통과 (0.07ms, 33.7MB)
테스트 2 〉	통과 (0.06ms, 33.1MB)
테스트 3 〉	통과 (0.12ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.1MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (3.14ms, 37MB)
테스트 7 〉	통과 (0.32ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
테스트 9 〉	통과 (0.11ms, 33.5MB)
테스트 10 〉	통과 (0.15ms, 33.6MB)
테스트 11 〉	통과 (0.08ms, 33.7MB)
테스트 12 〉	통과 (0.08ms, 33.5MB)
테스트 13 〉	통과 (0.21ms, 33.8MB)
테스트 14 〉	통과 (0.15ms, 33.4MB)
테스트 15 〉	통과 (0.13ms, 33.5MB)
테스트 16 〉	통과 (0.08ms, 33.6MB)

 */

 function solution(arr, divisor) {
    var answer = [];
    
    answer = arr.filter(function(each){
        return each % divisor == 0;
    })
    
    return answer.length == 0 ? [-1] : answer.sort(function(a,b){return a-b});
}

console.log(solution([5,7,9,3], 5))