var nums = [3, 5, 2, 0, 1, 10, 12];

function fizzBuzz (nums) {
    for (let i = 0; i < nums.length; i++){
        if((nums[i] % 3) == 0){
            console.log("Fizz");
        } else if ((nums[i] % 5) == 0) {
            console.log("Buzz");
        } else {
            console.log(nums[i]);
        }
    }
}

fizzBuzz(nums);
