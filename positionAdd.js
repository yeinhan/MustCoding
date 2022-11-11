/**
 * 3주차 
 * 1번문제 자리수 더하기
 * 
 * 테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.6MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
 */

function solution(n) {
    var answer = n.toString().split('').reduce(function(a,b){
        return Number(a) + Number(b)
    }, 0)
    return answer;
}


console.log(solution(1234))