/**
 * 1주차 
 * 1번문제 컨으롤 제트
 * 
 * 테스트 1 〉	통과 (0.07ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
 * 
 * comment: 아래 함수로 실행했을 때 테스트케이스 2번에서 계속 오류남 이뉴는 reduce initValue 매개변수 안넣어줘서;; 암튼 해결
 */

function solution(s) {
    var answer = 0;
    
    s = s.split(" ");
    
    if(s[0]=="Z"){
        s.shift();
    }
    
    while(s.indexOf("Z") != -1){
        s.splice(s.indexOf("Z")-1, 2)
    }
    
    answer = s.reduce(function(a,b){
        return Number(a)+ Number(b)
    },0)
    
    
    if(typeof answer == "string"){
        answer = Number(answer)
    }
    
    return answer;
}

// console.log(solution("10 Z 20 Z 1"))


/* 공부하다 찾은 간단한 코드 */
/*
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.07ms, 33.5MB)
테스트 4 〉	통과 (0.09ms, 33.5MB)
테스트 5 〉	통과 (0.17ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.07ms, 33.6MB)
*/


function solution2(s){
    var answer = 0;

    var temp = [];

    s = s.split(" ");

    for(var i of s){
        if(i === "Z"){
            temp.pop();
        }else {
            temp.push(Number(i))
        }
    }

    answer = temp.reduce(function(a, b){
        return a + b;
    }, 0)

    return answer;
    
}

console.log(solution2("10 Z 20 Z 1"));

