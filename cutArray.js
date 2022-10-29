function solution(numbers, num1, num2) {
    var answer = [];
    
    for(var i=num1; i<=num2; i++){
        answer.push(numbers[i]);
    }
    return answer;
}

console.log(solution([1,2,3,4,5], 1, 3));
console.log(solution([1,3,5], 1, 2));