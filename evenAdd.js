/**
 * 3주차 
 * 2번문제 짝수 더하기
 * 
 * 테스트 1 〉	통과 (0.03ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.6MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.03ms, 33.5MB)
테스트 6 〉	통과 (0.03ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.6MB)
 */

function solution(n) {
    var answer = 0;
    var check = 2;
    
    if(n < 2) return 0;
    
    while(check <= n){
        answer += check;
        
        check += 2;
    }
    return answer;
}