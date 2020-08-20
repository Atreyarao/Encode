# Encode
In this project the front end will take a string and encode it and make it a smaller string (will not work for unique values,will return the same string).  
Once we get the encoded string we can decode it as well which will give back the exact result.   

# Algorithm Used:  
The input string to the route "/encode" will count the continues occurring characters and then add the count to the particular character (it will only count the sub-string and not sub sequence).  
Ex: aaabaaa will result in : "a3ba3" and not "a6b"
If we send the encoded string to the "/decode" will do the opposite, it will take the first character and count the next number and and print the charter for the giver number of time and return result.   

Test cases:(Positive)  
1) Input value: "aaaa" output:"a4"  
2) Input Value:"a" output: "a"  
3) Input Value: "" output :""  

Test Cases:(Negative)
1) Input value:"A" output:"Enter lowercase string";  
2) Input Value:"1123" output:"Numbers not allowed";  
4) Input Value:"abcd" output:"abcd" (unique value will return the same string);  










