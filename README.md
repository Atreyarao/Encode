# Encode
In this project the front end will take a string and encode it and make it a smaller string (will not work for unique values,will return the same string).  
Once we get the encoded string we can decode it as well which will give back the exact result.   
# Project Detail:
Front End: React Js, Bootstrap,React Animation,Axios.  
Back End: Node Js,Express Js,Cors.    
Hosted: Heroku.  
Link: https://encode1.herokuapp.com/  

# Algorithm:  
The input string to the route "/encode" will count the continues occurring characters and then add the count to the particular character (it will only count the sub-string and not sub sequence). 
If we send the encoded string to the "/decode" will do the opposite, it will take the first character and count the next number and and print the charter for the giver number of time and return result.   

Encoding:
a) check if it is lowercase if not send error code -1.  
b)Run a loop from 1->str.length-1 pick a char.   
	i)add data to "temp" variable if it repeats till it finds unique and keep a count of it in "count".  
	ii)concat charter with count to final variable "ans".  
	iii) if encounter a number return error code "-2".  
c)return the variable "ans".  

Decoding:
a) Get the string and start iteration from 0 to string.length-1.  
b) for every charter we run another loop from character's current position and till the end of the loop.  
	i)In each loop store all the numeric value in a varible called "temp".  
	ii)convert the temp variable to int.    
	iii)Copy the character for "temp" times.  
c) return result.  
# Test Case  
Test cases:(Positive)  
1) Input value: "aaaa" output:"a4" 
![alt text](https://github.com/Atreyarao/Encode/blob/master/Images/Screenshot%20(389).png)  
2) Input Value:"a" output: "a"  
![alt text](https://github.com/Atreyarao/Encode/blob/master/Images/Screenshot%20(395).png)
3) Input Value: "" output :""  

Test Cases:(Negative)
1) Input value:"A" output:"Enter lowercase string";  
![alt text](https://github.com/Atreyarao/Encode/blob/master/Images/Screenshot%20(393).png)
2) Input Value:"1123" output:"Numbers not allowed"; 
![alt text](https://github.com/Atreyarao/Encode/blob/master/Images/Screenshot%20(394).png)
4) Input Value:"abcd" output:"abcd" (unique value will return the same string);  


Link: https://encode1.herokuapp.com/




