/**
 * 16주차 문제2
 * 올바른 괄호
 */

function solution(s){
    var cnt  = 0; 
    
    for(let i=0; i<s.length; i++){
        cnt += s[i] === "("? 1: -1;
        if(cnt < 0){
            return false
        }
    }
    
    return cnt === 0 ? true : false
}

console.log(solution("()()"))
console.log(solution("(())()"))
console.log(solution(")()("))
console.log(solution("(()("))

/**
 * 테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.3MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.6MB)
테스트 9 〉	통과 (0.11ms, 33.5MB)
테스트 10 〉	통과 (0.11ms, 33.4MB)
테스트 11 〉	통과 (0.04ms, 33.5MB)
테스트 12 〉	통과 (0.11ms, 33.6MB)
테스트 13 〉	통과 (0.11ms, 33.5MB)
테스트 14 〉	통과 (0.11ms, 33.4MB)
테스트 15 〉	통과 (0.12ms, 33.4MB)
테스트 16 〉	통과 (0.12ms, 33.5MB)
테스트 17 〉	통과 (0.11ms, 33.5MB)
테스트 18 〉	통과 (0.12ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (2.56ms, 37MB)
테스트 2 〉	통과 (2.52ms, 37.1MB)
 */