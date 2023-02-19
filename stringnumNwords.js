/**
 * 14주차 문제 
 * 2021 카카오 연계형 인턴쉽
 * 숫자 문자열과 영단어
 */

/**
 * 
 * @param {String} s 
 */
function solution(s){
    var numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    numArray.forEach(function(each){
        if(s.indexOf(each) != -1){
            s = s.replaceAll(each, numArray.indexOf(each))
        }
    })

    return Number(s)

}

console.log(solution("one4seveneight"))
console.log(solution("23four5six7"))

/**
 * 테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.09ms, 33.6MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.6MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.4MB)
 */

//공부
/**
 * 
 * @param {String} s 
 */
function solution2(s){
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(var i=0; i<numbers.length; i++){
        var arr = answer.split(numbers[i])
        console.log(arr)
        answer = arr.join(i)

    }
}
