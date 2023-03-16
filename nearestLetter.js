/**
 * 18주차 문제1
 * 가장 가까운 숫자
 */

function solution(s) {
    var answer = [];
    var temp = [];
    
    [...s].forEach((str, idx)=>{
        let asci_code = str.charCodeAt(0);
        
        let answerVal = temp[asci_code] == null ? -1 : (idx+1) - temp[asci_code];
        
        answer.push(answerVal);
        
        temp[asci_code] = idx + 1;
    })
    
    
    return answer;
}

console.log(solution("banana"))
console.log(solution("footbar"))

/**
 * 테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.5MB)
테스트 4 〉	통과 (0.25ms, 33.7MB)
테스트 5 〉	통과 (2.99ms, 37.7MB)
테스트 6 〉	통과 (1.09ms, 37.3MB)
테스트 7 〉	통과 (2.56ms, 37.6MB)
테스트 8 〉	통과 (0.55ms, 37MB)
테스트 9 〉	통과 (2.05ms, 37.7MB)
테스트 10 〉	통과 (0.62ms, 33.7MB)
테스트 11 〉	통과 (2.69ms, 36.6MB)
테스트 12 〉	통과 (0.09ms, 33.4MB)
테스트 13 〉	통과 (0.10ms, 33.4MB)
테스트 14 〉	통과 (0.30ms, 33.6MB)
테스트 15 〉	통과 (0.06ms, 33.5MB)
테스트 16 〉	통과 (0.14ms, 33.5MB)
테스트 17 〉	통과 (0.14ms, 33.4MB)
테스트 18 〉	통과 (0.34ms, 33.7MB)
테스트 19 〉	통과 (0.39ms, 33.8MB)
테스트 20 〉	통과 (0.19ms, 33.6MB)
테스트 21 〉	통과 (0.18ms, 33.6MB)
테스트 22 〉	통과 (1.08ms, 37.3MB)
테스트 23 〉	통과 (0.19ms, 33.6MB)
테스트 24 〉	통과 (0.29ms, 33.5MB)
테스트 25 〉	통과 (0.23ms, 33.6MB)
테스트 26 〉	통과 (0.20ms, 33.5MB)
테스트 27 〉	통과 (0.32ms, 33.5MB)
테스트 28 〉	통과 (0.33ms, 33.6MB)
테스트 29 〉	통과 (0.07ms, 33.4MB)
테스트 30 〉	통과 (1.64ms, 36.5MB)
 */