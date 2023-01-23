/**
 * 11주차 1번문제 햄버거 만들기
 * 해당 문제는 시간 복잡도 O(n)을 활용 -> stack 활용
 * 
 * 테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (36.78ms, 58.1MB)
테스트 4 〉	통과 (83.85ms, 76.6MB)
테스트 5 〉	통과 (95.72ms, 82.6MB)
테스트 6 〉	통과 (55.01ms, 59.5MB)
테스트 7 〉	통과 (70.22ms, 72.7MB)
테스트 8 〉	통과 (61.25ms, 60.8MB)
테스트 9 〉	통과 (41.82ms, 60MB)
테스트 10 〉	통과 (1.95ms, 36.5MB)
테스트 11 〉	통과 (33.57ms, 54.6MB)
테스트 12 〉	통과 (126.87ms, 97.9MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
테스트 14 〉	통과 (0.18ms, 33.4MB)
테스트 15 〉	통과 (0.08ms, 33.4MB)
테스트 16 〉	통과 (0.05ms, 33.4MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (0.06ms, 33.4MB)

stack.pop()
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.10ms, 33.4MB)
테스트 3 〉	통과 (37.57ms, 58.3MB)
테스트 4 〉	통과 (94.73ms, 76.6MB)
테스트 5 〉	통과 (150.80ms, 83.9MB)
테스트 6 〉	통과 (69.20ms, 60.7MB)
테스트 7 〉	통과 (99.27ms, 71.7MB)
테스트 8 〉	통과 (59.91ms, 60.9MB)
테스트 9 〉	통과 (41.62ms, 61.3MB)
테스트 10 〉	통과 (3.41ms, 37.4MB)
테스트 11 〉	통과 (31.72ms, 55.9MB)
테스트 12 〉	통과 (116.55ms, 98.2MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
테스트 14 〉	통과 (0.07ms, 33.4MB)
테스트 15 〉	통과 (0.06ms, 33.5MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
테스트 17 〉	통과 (0.05ms, 33.5MB)
테스트 18 〉	통과 (0.06ms, 33.5MB)
 */

/**
 * 
 * @param {Array} ingredient 
 * @returns 
 */
function solution(ingredient) {
    var answer = 0;
    var stack = [];

    ingredient.forEach(function(e, idx){
        stack.push(e);

        if(stack.length >=4 && e == "1"){
            var bugger = stack.slice(stack.length - 4, stack.length).join("")


            if(bugger == "1231"){
                // stack.splice(stack.length-4, 4);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                answer++
            }
        }

    })

    return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
