// -----> Question 1 

// var firstName = prompt("Enter Your First Name")
// var lastName = prompt("Enter Your Last Name")
// var fullName = firstName+ "   " + lastName ;
// console.log(fullName);
// alert("Welcome \n" + ""+ fullName)



// -----> Question 2 

// var phone = prompt("What's Your Favourite phone ??");

// alert("Your Favourite phone: " + phone + "  \n " + " Length of String : " + phone.length);


// -----> Q3

// var string = "Pakistan" ;
// alert(string.indexOf("n"))
// var index =prompt("what alphabet index u want??")
// alert(string.indexOf(index))


// ----> Question 4


// var text = "Hello World ";
// // alert(text.lastIndexOf("l"));
// var a = prompt("what index of Hello world")
// alert(text.lastIndexOf(a))


// ----> Question 5

// var word = "pakistan";
// alert(word.charAt(3))



// ----> question 7
// var city = "Hyderabad" ;
// alert(city.replace("Hyder","Islam"))

// ------> Question 8

// var message = "Ali and Sami are best friends. They play cricket and football together." ;
// alert(message.replace(/and/g, "&"))

// -----> Question 9 
// var str = "472";
// var num = parseInt(str);
// alert("Value :" + str + "\n" + "type :" + typeof str + " \n" + "Converted Value :" + num + "\n" + "type :" + typeof num);


// -----> Question 10

// var str = "peanuts" ;
// // var strUpper = "peanuts"
// alert ("lowercase : " + str + "\n" + "upper case : " + str.toUpperCase());


// -----> Question 11
// var str = prompt("Enter anything")






// ----> Question 12

// var num = 35.36;
// var string = num.toString();
// // string.replace(".", "");
// alert(string.replace(".", ""));

// -----> Question13 

// var userInput = prompt("Enter Anything ");
// var arr = ["@ " , "!" ,"."];
// if (userInput == "@","!","."){
//     alert("Enter Correct Username")
// }else{
//     alert("THANKYOU")
// }

// -----> Q14


// var userData = prompt("enter your fav").toLowerCase();
// var Arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var flag = false;


// for (var i = 1; i <= Arr.length; i++) {

//     if (Arr[i]===userData) {
//         alert("yes " + userData + "is Avaliable at index " + i);
//         flag=true;
//         break
//     } 

// }

// if( flag === false){
//     alert("we Dont Have that :(")
// }

// ----> Question15


// function validatePassword() {
//     // Prompt user for password
//     var password = prompt("Enter your password:");

//     if (password !== null) { // Check if user entered input
//         var hasAlphabet = false;
//         var hasNumber = false;

//         // Check password length
//         if (password.length < 6) {
//             alert("Password must be at least 6 characters long. Please enter a valid password.");
//             validatePassword(); // Prompt again for a valid password
//             return; // Exit function
//         }

//         // Check if password starts with a number
//         if (!isNaN(password[0])) {
//             alert("Password cannot start with a number. Please enter a valid password.");
//             validatePassword(); // Prompt again for a valid password
//             return; // Exit function
//         }

//         // Check if password contains alphabets and numbers
//         for (var i = 0; i < password.length; i++) {
//             var charCode = password.charCodeAt(i);
//             if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//                 hasAlphabet = true;
//             } else if (charCode >= 48 && charCode <= 57) {
//                 hasNumber = true;
//             }
//         }

//         // Inform user about password requirements
//         if (hasAlphabet && hasNumber) {
//             alert("Password is valid.");
//         } else {
//             alert("Password must contain alphabets and numbers. Please enter a valid password.");
//             validatePassword(); // Prompt again for a valid password
//         }
//     }
// }

// // Call the function to prompt for a password and validate it
// validatePassword()

// -----> Question 16


// var string = "university of Karachi";
// var stringArr = string.split(" ");
// document.write("<h1> Elements of Array </h1>");
// for( var i = 0 ; i<string.length ; i++){
//     document.write( "<h1> " + string[i] + "<br />")
// }



// -----> Question 17
// var userInput = prompt("Enter Anything");
// var lastChar = userInput.charAt(userInput.length - 1);
// alert("Last alphabet of your data is " + lastChar)



// ----> Question 18

// Define the string
var sentence = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase to make the comparison case-insensitive
var lowercaseSentence = sentence.toLowerCase();

// Split the string into words
var words = lowercaseSentence.split(' ');
console.log(words)
// Initialize a variable to count the occurrences of the word "the"
var count = 0;

// Iterate through each word and count occurrences of "the"
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

// Display the count
alert("Number of occurrences of 'the':" + count);