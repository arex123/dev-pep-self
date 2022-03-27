/*
    Approach :
    -> sort the array
    -> keep swaping adjacent element, from 1st index(In zero indexed array) 
    -> if arr.length is 1 then dont do anything
    -> edge cases to handle : if size of array is odd and even, some extra operation

    // TC: nlogn + n
    // SC: n
*/

function suffle(arr){
        let sortedarr = arr.sort(function(a,b){return a-b}); // nlog(n)
        let ans=[];
        ans.push(sortedarr[0])

        for(let i=1;i<arr.length;i++){
            if(arr.length%2==0 && i==arr.length-1)
                break;

            if(i%2==0){
                ans.push(sortedarr[i-1]);
            }else{
                    ans.push(sortedarr[i+1]);
            }
        }
        if(arr.length%2==0)
             ans.push(sortedarr[arr.length-1])
        
        return ans;
    }
    
    let arr = [1,0,5,8,19,15]
    if(arr.length>1)
        console.log(suffle(arr));
    else
        console.log(arr);

    
    