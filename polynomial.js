/*

 4주차 
 * 1번문제 다항식 더하기
테스트 1 〉	통과 (0.15ms, 33.5MB)
테스트 2 〉	통과 (0.09ms, 33.5MB)
테스트 3 〉	통과 (0.14ms, 33.6MB)
테스트 4 〉	통과 (0.14ms, 33.5MB)
테스트 5 〉	통과 (0.08ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.4MB)
테스트 7 〉	통과 (0.08ms, 33.4MB)
테스트 8 〉	통과 (0.13ms, 33.6MB)
테스트 9 〉	통과 (0.11ms, 33.5MB)
테스트 10 〉	통과 (0.08ms, 33.5MB)
테스트 11 〉	통과 (0.13ms, 33.5MB)
테스트 12 〉	통과 (0.08ms, 33.5MB)
*/

function solution(polynomial) {
    var answer = '';
    
    var x = 0;
    var num = 0;
    
   /* polynomial.split('+').forEach(function(each){
        each = each.trim();
        
        if(each.indexOf('x') > -1){
            x += each.indexOf('x') == 0 ? 1 : Number(each[0])
        }else {
            num += Number(each)
        }
    })
*/    
    polynomial.replace(/ /g, '').split('+').forEach(function(each){
        if(each.indexOf('x') > -1){
            x += each.indexOf('x') == 0 ? 1 : Number(each.slice(0, -1))
        }else {
            num += Number(each)
        }
    
    })
    
    if(x > 0 && num > 0){
        if(x ==1){
            answer = "x + " + num;
        }else {
            answer = x + "x + " + num;    
        }
        
    }else if(!x && num > 0){
        answer = num;
    }else if(x > 0 && !num){
        if(x ==1){
            answer = "x";
        }else {
            answer = x + "x"
        }
    }
    
    answer = answer.toString();
    
    return answer;
}

console.log(solution("3x + 7 + x"))