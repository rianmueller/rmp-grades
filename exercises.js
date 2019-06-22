//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

//methods
// 1. finds the sum of all scores
// 2. finds the avg of all scores
// 3. finds the highest score
// 4. finds the lowest score
// 5. generates a random score
// 6. finds the number of passing scores above 70
// 7. finds the first score in the list 
// 8. finds the last score in the list 
// 9. generates a new score list with a 5% increase for each score 
// 10.generates a list of scores that are odd numbered

var fooModule = (function(){
    var scores = [65,76,100,88,17,55];

    function sum(){
        var total = 0;
        for (i = 0; i < scores.length; i++) {
            total = total + scores[i];
        }
        return total;
    }

    function avg(){
        let total = 0;
        let avg;
        for (i = 0; i < scores.length; i++) {
            total = total + scores[i];
            avg = total / (scores.length + 1);
        }
        return avg;
    }

    function highest(){
        return Math.max.apply(Math, scores);;
    }

    function lowest(){
        return Math.min.apply(Math, scores);
    }

    function random(){
        return scores[~~(Math.random() * scores.length)];
    }

    return {
        sum: sum,
        avg: avg,
        highest: highest,
        lowest: lowest,
        random: random
    };
})();
console.log(fooModule.sum());
console.log(fooModule.avg());
console.log(fooModule.highest());
console.log(fooModule.lowest());
console.log(fooModule.random());




// function calculatorModule(){
//     let calculator = {};
//     let memory = 0;
//     let total = 0;

//     calculator.validation = function(number){
//         if (typeof number !== 'number'){
//             throw 'Error';
//         }
//     };

//     calculator.load = function(number){
//         this.validation(number);
//         total = number;
//         return total;
//     };

//     calculator.getTotal = function(){
//         return total;
//     };

//     return calculator;
// };