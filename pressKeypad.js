/**
 * 16주차 문제1
 * 키패드 누르기[카카오인턴]
 */

function solution(numbers, hand) {
    var answer = '';
    
    var keypad = {
        1: [1,1], 2: [1,2], 3:[1,3],
        4: [2,1], 5: [2,2], 6: [2,3],
        7: [3,1], 8: [3,2], 9: [3,3],
        0: [4,2]
    }
    
    var L = [4,1];
    var R = [4,3];
    
    for(let num of numbers){
        if(num == 1 || num == 4 || num == 7){
            L = keypad[num];
            answer += "L"
        }else if(num == 3 || num == 6 || num == 9){
            R = keypad[num];
            answer += "R";
        }else {
            var numL = 0;
            var numR = 0;
            
            for(let i=0; i<2; i++){
                numL += Math.abs(keypad[num][i] - L[i]);
                numR += Math.abs(keypad[num][i] - R[i]);
            }
            
            if(numL < numR){
                L = keypad[num];
                answer += "L"
            }else if(numL > numR){
                R = keypad[num];
                answer += "R";
            }else if(numL == numR){
                if(hand == "left"){
                    L = keypad[num];
                    answer += "L"
                }else {
                    R = keypad[num];
                    answer += "R"
                }
            }
        }
    }
    
    
    
    return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"))
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"))

/**
 * 테스트 1 〉	통과 (0.10ms, 33.6MB)
테스트 2 〉	통과 (0.09ms, 33.5MB)
테스트 3 〉	통과 (0.09ms, 33.5MB)
테스트 4 〉	통과 (0.09ms, 33.6MB)
테스트 5 〉	통과 (0.13ms, 33.6MB)
테스트 6 〉	통과 (0.09ms, 33.5MB)
테스트 7 〉	통과 (0.09ms, 33.5MB)
테스트 8 〉	통과 (0.20ms, 33.6MB)
테스트 9 〉	통과 (0.11ms, 33.5MB)
테스트 10 〉	통과 (0.11ms, 33.5MB)
테스트 11 〉	통과 (0.22ms, 33.5MB)
테스트 12 〉	통과 (0.22ms, 33.5MB)
테스트 13 〉	통과 (0.33ms, 33.6MB)
테스트 14 〉	통과 (0.25ms, 33.7MB)
테스트 15 〉	통과 (0.31ms, 33.6MB)
테스트 16 〉	통과 (0.34ms, 33.6MB)
테스트 17 〉	통과 (0.48ms, 33.6MB)
테스트 18 〉	통과 (0.54ms, 33.6MB)
테스트 19 〉	통과 (0.39ms, 33.7MB)
테스트 20 〉	통과 (0.39ms, 33.6MB)
 */