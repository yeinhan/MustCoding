/**
 * 13주차 문제 
 * 카카오 크레인 인형 뽑기
 * 
 * 
 */

function solution(board, moves) {
    var answer = [];
    var cnt = 0;
    
    moves.forEach(function(each){
        for(var i=0; i<board.length; i++){
            if(board[i][each-1] != 0){
                answer.push(board[i][each-1]);
                board[i][each-1] = 0;
                if(answer[answer.length-1] == answer[answer.length-2]){
                    answer.pop();
                    answer.pop();
                    
                    cnt += 2;
                }
                break;
            }
        }
    })
    return cnt;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))

/**
 * 테스트 1 〉	통과 (0.87ms, 33.5MB)
테스트 2 〉	통과 (0.96ms, 33.7MB)
테스트 3 〉	통과 (0.66ms, 33.5MB)
테스트 4 〉	통과 (0.59ms, 33.5MB)
테스트 5 〉	통과 (0.56ms, 33.5MB)
테스트 6 〉	통과 (2.14ms, 36.5MB)
테스트 7 〉	통과 (2.40ms, 33.9MB)
테스트 8 〉	통과 (0.53ms, 33.5MB)
테스트 9 〉	통과 (0.57ms, 33.6MB)
테스트 10 〉	통과 (0.17ms, 33.4MB)
테스트 11 〉	통과 (0.86ms, 33.6MB)
테스트 12 〉	통과 (4.26ms, 34.1MB)
테스트 13 〉	통과 (2.58ms, 33.8MB)
테스트 14 〉	통과 (0.84ms, 33.5MB)
테스트 15 〉	통과 (0.65ms, 33.5MB)
테스트 16 〉	통과 (0.75ms, 33.5MB)
테스트 17 〉	통과 (1.75ms, 33.8MB)
테스트 18 〉	통과 (1.11ms, 33.6MB)
테스트 19 〉	통과 (0.35ms, 33.5MB)
테스트 20 〉	통과 (0.28ms, 33.5MB)
테스트 21 〉	통과 (0.12ms, 33.4MB)
테스트 22 〉	통과 (0.20ms, 33.6MB)
테스트 23 〉	통과 (0.36ms, 33.5MB)
테스트 24 〉	통과 (0.19ms, 33.5MB)
테스트 25 〉	통과 (0.15ms, 33.4MB)
테스트 26 〉	통과 (0.13ms, 33.5MB)
테스트 27 〉	통과 (0.13ms, 33.6MB)
테스트 28 〉	통과 (0.13ms, 33.5MB)
테스트 29 〉	통과 (0.13ms, 33.4MB)
테스트 30 〉	통과 (0.28ms, 33.5MB)
테스트 31 〉	통과 (0.04ms, 33.4MB)
테스트 32 〉	통과 (0.05ms, 33.4MB)
테스트 33 〉	통과 (0.07ms, 33.4MB)
테스트 34 〉	통과 (0.12ms, 33.4MB)
테스트 35 〉	통과 (0.12ms, 33.4MB)
테스트 36 〉	통과 (0.13ms, 33.4MB)
테스트 37 〉	통과 (0.11ms, 33.4MB)
테스트 38 〉	통과 (0.16ms, 33.4MB)
 */
