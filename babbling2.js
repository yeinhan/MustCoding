/**
 * 18주차 문제2
 * 옹알이2
 */

function solution(babbling) {
    var answer = 0;
    let words = ['aya', 'ye', 'ma', 'woo'];
    
    babbling.forEach(each => {
        let bubble = each;
        
        if(!bubble.includes(words[0].repeat(2)) 
        && !bubble.includes(words[1].repeat(2)) 
        && !bubble.includes(words[2].repeat(2)) 
        && !bubble.includes(words[3].repeat(2)) )

        // words.forEach(e => {
        //     //1
        //     // if(!each.includes(e.repeat(2))){
        //         if(bubble.includes(e)){
        //             bubble = bubble.replaceAll(e, '');
        //         }
        //     // }
        // })

        //2
        bubble = bubble.replaceAll(/aya|ye|ma|woo/g, '');
        
        if(bubble.length === 0){
            answer++;
        }
    })
    
    
    return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]))
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))
console.log(solution(["yayae"]))