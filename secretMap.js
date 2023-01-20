/* 10w주차 문제 : 비밀지도 */


/**
 *  첫 번째 풀이
 * 테스트 1 〉	통과 (0.14ms, 33.4MB)
테스트 2 〉	통과 (0.17ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.20ms, 33.4MB)
테스트 5 〉	통과 (0.14ms, 33.5MB)
테스트 6 〉	통과 (0.16ms, 33.5MB)
테스트 7 〉	통과 (0.14ms, 33.5MB)
테스트 8 〉	통과 (0.20ms, 33.5MB)
 * @param {Number} n 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 
 */
function solution(n, arr1, arr2){

    var result = [];

    for(var i=0; i<n; i++){
        var temp = ((arr1[i] | arr2[i]).toString(2).padStart(n,"0"));
        
        var temp2 = "";

        for(var j=0; j<temp.length; j++){
            temp2 = temp2 + (temp.substr(j,1) == "1" ? "#" : " ");
        }

        result.push(temp2)

    }


    return result;
}

/**
 * 
 * 테스트 1 〉	통과 (0.13ms, 33.4MB)
테스트 2 〉	통과 (0.30ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.15ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.17ms, 33.5MB)
테스트 7 〉	통과 (0.08ms, 33.5MB)
테스트 8 〉	통과 (0.08ms, 33.5MB)

 * @param {Number} n 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 
 */
function solution2(n, arr1, arr2){

    var answer = [];

    for(var i=0; i<n; i++){
        var temp = ((arr1[i] | arr2[i]).toString(2).padStart(n,"0")).replace(/1/g, "#").replace(/0/g, " ");

        answer.push(temp)
    }


    return answer;
}



console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]))