/**
 * 19주차 문제
 * 둘만의 암호
 * https://school.programmers.co.kr/learn/courses/30/lessons/155652
 */
function solution(s, skip, index) {
    var answer = '';
    
    skip = [...skip].map(e=>e.charCodeAt(0));
    
    [...s].forEach(e => {
        let cnt = 0;
        let asci = e.charCodeAt(0);
        
        while(cnt <index){
            asci++;
            
            if(asci > 122){
                asci = "a".charCodeAt(0);            
            }
            
            if(skip.indexOf(asci) == -1){
                cnt++;
            }
        }
        
        answer += String.fromCharCode(asci);
        
    })
    
    
    
    return answer;
}

/**
 * Test 1 〉	pass (0.18 ms, 33.4 MB)
Test 2 〉	pass (0.17 ms, 33.4 MB)
Test 3 〉	pass (0.25 ms, 33.4 MB)
Test 4 〉	pass (0.19 ms, 33.4 MB)
Test 5 〉	pass (0.18 ms, 33.4 MB)
Test 6 〉	pass (0.17 ms, 33.5 MB)
Test 7 〉	pass (0.21 ms, 33.3 MB)
Test 8 〉	pass (0.19 ms, 33.3 MB)
Test 9 〉	pass (0.25 ms, 33.5 MB)
Test 10 〉	pass (0.17 ms, 33.4 MB)
Test 11 〉	pass (0.21 ms, 33.4 MB)
Test 12 〉	pass (0.16 ms, 33.4 MB)
Test 13 〉	pass (0.26 ms, 33.4 MB)
Test 14 〉	pass (0.18 ms, 33.4 MB)
Test 15 〉	pass (0.18 ms, 33.5 MB)
Test 16 〉	pass (0.20 ms, 33.4 MB)
Test 17 〉	pass (0.20 ms, 33.4 MB)
Test 18 〉	pass (0.34 ms, 33.4 MB)
Test 19 〉	pass (0.22 ms, 33.4 MB)
 */