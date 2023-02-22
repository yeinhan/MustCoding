/**
 * 15주차 문제 2
 * 과일장수
 */

function solution(k, m, score) {
    var answer = 0;
    
    score.sort(function(a,b){
        return b-a
    })
    
    score.forEach(function(each,idx){
        if(each > k){
            score[idx] = k;
        }
    })
    
    for(var i=0; i<score.length; i+=m){
        if(score.length - i >= m){
            var temp = [];
            
            if(score[i] != 1){
                for(var j=i; j<i+m; j++){
                    temp.push(score[j])
                }
                
                answer += Math.min(...temp) * m
            }else {
                answer += 1 * m;
            }
        }
    }
    
    
    return answer;
}

function solution2(k, m, score) {
    var answer = 0;
    
    score.sort(function(a,b){
        return b-a
    })
    
    score.forEach(function(each,idx){
        if(each > k){
            score[idx] = k;
        }
    })
    
    var arr = []
        
    for(var i=0; i<score.length; i+= m){
        var temp = [];
        
        for(var j=i; j<i+m; j++){
            if(score[j] != null){
                temp.push(score[j])
            }
    
        }
        
        arr.push(temp)
    }
    
    arr.forEach(function(each){
        if(each.length >= m){
            if(each.indexOf(1) == -1){
                answer += Math.min(...each) * m;
            }else {
                answer += 1 * m
            }
        }
    })
    
    
    
    return answer;
}