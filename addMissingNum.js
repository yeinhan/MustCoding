/**
 * 12주차 문1
 * 없는 숫자 더하기
 * 
 * 테스트 1 〉	통과 (0.12ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.6MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
 */

function solution(numbers) {
    var temp = [1,2,3,4,5,6,7,8,9,0].filter(function(each){
        return numbers.indexOf(each) == -1;
    })
    
    return temp.reduce(function(a,b){
        return a + b
    }, 0)
}

console.log(solution([1,2,3,4,6,7,8,0]))
console.log(solution([5,8,4,0,6,7,9]))