/**
 * 19주차문제
 * 완주하지못한 선수
 */

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
    
    
    
    
    return answer;
}
console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]))

/**
 * 테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.31ms, 33.6MB)
테스트 4 〉	통과 (0.60ms, 33.7MB)
테스트 5 〉	통과 (0.58ms, 33.7MB)
테스트 6 〉	통과 (0.03ms, 33.4MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (46.53ms, 47.2MB)
테스트 2 〉	통과 (103.62ms, 52.6MB)
테스트 3 〉	통과 (91.81ms, 54.8MB)
테스트 4 〉	통과 (121.46ms, 58.2MB)
테스트 5 〉	통과 (100.58ms, 56.7MB)
 */