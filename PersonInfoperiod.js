/**
 * 17주차 문제1
 * 개인정보수집 유효기간
 */

function solution(today, terms, privacies) {
    var answer = [];
    
    privacies.forEach(function(each, idx){
        //2022.12.22 B
        let privacy = each.split(" ");
        
        let termPriod = Number(terms.find(function(e){
            return e[0] == privacy[1]
        }).split(" ")[1])
        
        let [eYear, eMon, eDay] = getExpiredDate(privacy[0], termPriod);
        let periodDate = eYear.toString() + "." + eMon.toString() + "." + eDay.toString();
        
        
        if(new Date(periodDate) < new Date(today)){
            answer.push(idx + 1)
        }
    })
    
    return answer;
}

function getExpiredDate(date, termPriod){
    let [year, month, day] = date.split(".").map(function(e){
        return Number(e)
    })
    
    month += termPriod;
    day--;
    
    if(day == 0){
        day = 28;
        month--;
    }
    
    if(month >= 13){
        let years = parseInt(month /12);
        
        if(month % 12==0){
            year += years -1;
            month = month - (12 * (years-1))
        }else {
            year += years;
            month = month - (12* years)
        }
    }
    
    return [year, month, day]
}

console.log(solution("2022.05.19",["A 6", "B 12", "C 3"],["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))
console.log(solution("2020.01.01",["Z 3", "D 5"],["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))