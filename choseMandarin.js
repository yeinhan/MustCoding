/**
 * 17주차 문제2
 * 귤 고르기
 */

function solution(k, tangerine) {
    var answer = 0;
    
    var temp = tangerine.reduce(function(acc, cur){
        acc[cur] = (acc[cur] || 0) + 1;
        
        return acc;
    }, {});
    
    let kind = Object.values(temp).sort(function(a,b){
        return b-a
    });
    
    let cnt = 0;
    
    for(let num of kind){
        answer++;
        
        cnt += num;
        
        if(cnt >= k){
            return answer;
        }
    }
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]))
console.log(solution(2,[1, 1, 1, 1, 2, 2, 2, 3]	))
