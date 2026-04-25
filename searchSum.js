/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0
    for(n=1; n<=nums.length; n++){
    if(i<= nums.length){
        if(i==n){
            continue
        } else{
            if(nums[i]+nums[n] === target){
                return [i, n];
                break;
            } else{
                if(n>=nums.length){
                    n = 1
                    i++
            }
        }
        }
    }
    }
};