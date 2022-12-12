/*
테스트 1 〉	통과 (0.10ms, 33.5MB)
테스트 2 〉	통과 (0.08ms, 33.6MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.14ms, 33.6MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.13ms, 33.5MB)
*/

function solution(a, b) {
    var answer = 0;
    
    if(!a.length == b.length)
        return;
    
    for(var i=0; i<a.length; i++){
        answer += a[i] * b[i]
    }
    
    return answer;
}