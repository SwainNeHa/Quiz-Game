// Array of questions grouped by category (25 questions each)

const questions = [{
        category: "Java",
        questions: [{
                question: "Number of primitive data types in Java are??",
                options: ["6", "7", "8", "9"],
                correctAnswer: 2,
            },
            {
                question: "What is the size of float and double in java?",
                options: ["32 and 64", "32 and 32", "64 and 64", "64 and 32"],
                correctAnswer: 0,
            },
            {
                question: "Find the output of the following code. int Integer = 24, char String = 'I', System.out.print(Integer), System.out.print(String)",
                options: ["Compile error", "Throws exception", "I", "24 I"],
                correctAnswer: 3,
            },
            {
                question: "Find the output of the following program.public class Solution{ public static void main(String[] args){ short x = 10;x =  x * 5;System.out.print(x);}}",
                options: ["50", "10", "Compile error", "Exception"],
                correctAnswer: 2,
            },
            {
                question: "Select the valid statement to declare and initialize an array.",
                options: ["int[] A = {}", "int[] A = {1, 2, 3}", "int[] A = (1, 2, 3)", "int[][] A = {1,2,3}"],
                correctAnswer: 1,
            },
            {
                question: "Arrays in java are-",
                options: ["Object reference", "objects", "Primitive data type", "None"],
                correctAnswer: 1,
            },
            {
                question: "Identify the corrected definition of a package.",
                options: ["A package is a collection of editing tools", "A package is a collection of classes", "A package is a collection of classes and interfaces", "A package is a collection of interfaces"],
                correctAnswer: 2,
            },
            {
                question: " In which of the following is toString() method defined?",
                options: ["java.lang.Object", "java.lang.String", "java.lang.util", "None"],
                correctAnswer: 0,
            },
            {
                question: "Which language is used for Android development?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correctAnswer: 1,
            },
            {
                question: "Identify the output of the following program.String str = “abcde”;System.out.println(str.substring(1, 3));",
                options: ["abc", "bc", "bcd", "cd"],
                correctAnswer: 1,
            },
            {
                question: " Identify the output of the following program.Public class Test{Public static void main(String argos[]){String str1 = “one”;String str2 = “two”;System.out.println(str1.concat(str2));}}",
                options: ["one", "two", "onetwo", "twoone"],
                correctAnswer: 2,
            },
            {
                question: "Total constructor string class have?",
                options: ["3", "7", "13", "20"],
                correctAnswer: 2,
            },
            {
                question: "What is the primary purpose of a 'for' loop in programming?",
                options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
                correctAnswer: 0,
            },
            {
                question: "Find the output of the following code.int ++a = 100System.out.println(++a);",
                options: ["101", "Compile error as ++a is not valid identifier", "100", "None"],
                correctAnswer: 1,
            },
            {
                question: "Find the output of the following code.if(1 + 1 + 1 + 1 + 1 == 5){System.out.print(“TRUE”);}else{System.out.print(“FALSE”);}",
                options: ["TRUE", "FALSE", "Compile error", "None"],
                correctAnswer: 0,
            },
            {
                question: "Identify the return type of a method that does not return any value.",
                options: ["int", "void", "double", "None"],
                correctAnswer: 1,
            },
            {
                question: " Identify the modifier which cannot be used for constructor.",
                options: ["public", "protected", "private", "static"],
                correctAnswer: 3,
            },
            {
                question: "Which of the following is a feature of object-oriented programming?",
                options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
                correctAnswer: 0,
            },
            {
                question: " Find the output of the following code.Public class Solution{Public static void main(String args[]){Int i;for(i = 1; i < 6; i++){ if(i > 3) continue;}System.out.println(i);}}",
                options: ["3", "4", "5", "6"],
                correctAnswer: 3,
            },
            {
                question: "Identify the infinite loop.",
                options: ["for(; ;)", "for(int i = 0; i < 1; i--)", "for(int i = 0; ;i++)", "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Exception created by try block is caught in which block",
                options: ["catch", "throw", "final", "none"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following exception is thrown when divided by zero statement is executed?",
                options: ["NullPointerException", "NumberFormatException", "ArithmeticException", "None"],
                correctAnswer: 2,
            },
            {
                question: "What does the 'finally' block in Java do?",
                options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
                correctAnswer: 2,
            },
            {
                question: "Identify the incorrect Java feature.",
                options: ["Object oriented", "Use of pointers", "Dynamic", "Architectural neural"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is used to find and fix bugs in the program?",
                options: ["JDK", "JRE", "JVM", "JDB"],
                correctAnswer: 3,
            },
        ],
    },

    {
        category: "Html",
        questions: [{
                question: "Who is known as the father of HTML?",
                options: [" Tim Berners-Lee", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"],
                correctAnswer: 0,
            },
            {
                question: "What does HTML stand for?",
                options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "None of the above"],
                correctAnswer: 0,
            },
            {
                question: "Which tag is used to create a hyperlink in HTML?",
                options: ["<link>", " <a>", " <href>", " <hyperlink>"],
                correctAnswer: 1,
            },
            {
                question: "What is the purpose of the <head> tag in HTML?",
                options: ["To define the main content of the document", "To contain metadata and links to external resources", "To create a heading on the page", "To define the footer of the document"],
                correctAnswer: 1,
            },
            {
                question: "Which attribute is used to uniquely identify an HTML element?",
                options: ["class", "id", "name", "style"],
                correctAnswer: 1,
            },
            {
                question: "Which HTML tag is used to define an internal style sheet?",
                options: ["<css>", " <script>", "<style>", "<link>"],
                correctAnswer: 2,
            },
            {
                question: "Which attribute specifies an alternate text for an image if the image cannot be displayed?",
                options: ["title", "alt", "src", "href"],
                correctAnswer: 1,
            },
            {
                question: "What is the purpose of the <title> tag in HTML?",
                options: ["Defines the title of the webpage", "Adds a subtitle to the webpage", "Specifies the character encoding", "Defines a heading in the webpage"],
                correctAnswer: 0,
            },
            {
                question: "Which attribute is used to define the type of an <input> element in an HTML form?",
                options: ["type", "value", "name", "form"],
                correctAnswer: 0,
            },
            {
                question: "Which tag is used to define a clickable button in HTML?",
                options: ["<input>", "<button>", "<click>", "<a>"],
                correctAnswer: 1,
            },
            {
                question: "Which tag is used to define a form in HTML?",
                options: ["<form>", "<input>", "<button>", "<fieldset>"],
                correctAnswer: 0,
            },
            {
                question: "What does the <link> tag define in an HTML document?",
                options: ["Defines the character set", "Links an external resource to the document", "Embeds a video file", "Defines a navigation link"],
                correctAnswer: 1,
            },
            {
                question: "What does the <meta> tag do in HTML?",
                options: ["Defines the title of the document", "Provides metadata about the HTML document", "Embeds an image in the document", " Creates a hyperlink to another page"],
                correctAnswer: 1,
            },
            {
                question: "Which HTML tag is used to define the body of a document?",
                options: ["<body>", "<content>", "<main>", "<section>"],
                correctAnswer: 0,
            },
            {
                question: "Which tag is used to create a dropdown list in HTML?",
                options: ["<select>", "<input>", "<dropdown>", "<option>"],
                correctAnswer: 0,
            },
            {
                question: "Which tag is used to create a division or section in an HTML document?",
                options: ["<div>", "<section>", "<group>", "<span>"],
                correctAnswer: 0,
            },
            {
                question: "Which attribute is used to specify an alternative text for an image in HTML?",
                options: ["alt", "src", "href", "title"],
                correctAnswer: 0,
            },
            {
                question: "Which HTML tag is used to define an input field?",
                options: ["<input>", "<textarea>", "<input>", "<area>"],
                correctAnswer: 0,
            },
            {
                question: "What is the correct HTML element for inserting an image?",
                options: ["<img>", "<image>", "<src>", " <picture>"],
                correctAnswer: 0,
            },
            {
                question: "How can you include a CSS file in an HTML document?",
                options: ["<style>", "<script>", "<link>", "<css>"],
                correctAnswer: 2,
            },
            {
                question: "Which HTML tag is used to define a table header?",
                options: ["<th>", "<td>", "<tr>", "<thead>"],
                correctAnswer: 0,
            },
            {
                question: "Which tag is used to display a table in HTML?",
                options: ["<td>", "<table>", "<tr>", "<th>"],
                correctAnswer: 1,
            },
            {
                question: "Which HTML tag is used to define an unordered list?",
                options: ["<ul>", "<ol>", "<list>", "<li>"],
                correctAnswer: 0,
            },
            {
                question: "How can you make a numbered list in HTML?",
                options: ["<ul>", "<ol>", "<list>", "<dl>"],
                correctAnswer: 1,
            },
            {
                question: "Which HTML element is used to display a scalar measurement within a range?",
                options: ["<meter>", "<progress>", "<gauge>", " <range>"],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "Css",
        questions: [{
                question: "What is CSS?",
                options: ["CSS is a style sheet language", "CSS is designed to separate the presentation and content, including layout, colors, and fonts", "CSS is the language used to style the HTML documents", "All of the mentioned"],
                correctAnswer: 3,
            },
            {
                question: "Which of the following tag is used to embed css in html page?",
                options: ["<css>", "<!DOCTYPE html>", "<script>", "<style>"],
                correctAnswer: 3,
            },
            {
                question: "Which of the following CSS selectors are used to specify a group of elements?",
                options: ["tag", "id", "class", "both class and tag"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following CSS framework is used to create a responsive design",
                options: ["django", "rails", "larawell", "bootstrap"],
                correctAnswer: 3,
            },
            {
                question: "Which of the following CSS selector is used to specify a rule to bind a particular unique element??",
                options: ["tag", "id", "class", "both class and tag"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following CSS style property is used to specify an italic text?",
                options: ["style", "font", "font-style", "@font-face"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is the correct syntax to link an external style sheet in the HTML file?",
                options: ["<link rel=”stylesheet” href=”style.css” />", "<link rel=”stylesheet” src=”style.css” />", "<style rel=”stylesheet” src=”style.css” />", "<style rel=”stylesheet” link=”style.css” />"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following function defines a linear gradient as a CSS image?",
                options: ["gradient()", "linear-gradient()", "grayscale()", "image()"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following CSS property can be used to set the image as a border instead of the border style?",
                options: ["background-image-source", "background-image", "border-image-source", "border-image"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is the correct way to apply CSS Styles?",
                options: ["in an external CSS file", "inside an HTML element", "inside the <head> section of an HTML page", "all of the mentioned"],
                correctAnswer: 3,
            },
            {
                question: " Which of the following CSS property sets the font size of text?",
                options: ["font-size", "text-size", "text", "size"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following CSS property sets what kind of line decorations are added to an element, such as underlines, overlines, etc?",
                options: ["text-decoration", "text-style", "text-decoration-line", "text-line"],
                correctAnswer: 2,
            },
            {
                question: " What will be the output of the following CSS code snippet?span {border: 1px solid red;outline: green dotted thick;}",
                options: ["All span elements will have a green thick border and a red outline", "All span elements will have a red border and a green dotted outline", "All span elements will have a outer green dotted border and an inner red border", "All span elements will have an outer red border and inner green dotted border"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following CSS property sets the shadow for a box element?",
                options: ["set-shadow", "box-shadow", "shadow", "canvas-shadow"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following CSS property is used to set the color of the text?",
                options: ["text-decoration", "pallet", "colour", "color"],
                correctAnswer: 3,
            },
            {
                question: "What will be the output of the following CSS code?div {border-width:5px;	 border-style:dotted solid double dashed;}",
                options: ["Box having dotted bottom outline, solid right outline, double top outline and dashed left outline", "Box having dotted bottom outline, solid left outline, double top outline and dashed left outline", "Box having dotted top outline, solid right outline, double bottom outline and dashed left outline", "Box having dotted top outline, solid left outline, double bottom outline and dashed right outline"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following CSS property defines the space between cells in a table?",
                options: ["border-spacing", "border-style", "border", "none of the mentioned"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following CSS3 property can be used to allow line breaks within words?",
                options: ["line-break", "line-wrap", "word-wrap", "word-break"],
                correctAnswer: 3,
            },
            {
                question: "What is the primary purpose of CSS in web development?",
                options: ["To create web pages", "To style web pages", "To store data", "To program web applications"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a valid way to integrate CSS into a webpage?",
                options: ["Inline", "External", "Internal", "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Given the following CSS, what color will the <h1>text be?body { color: red; } h1 { color: blue; }",
                options: ["Red", "Blue", "Green", "Black"],
                correctAnswer: 1,
            },
            {
                question: "Which selector is used to target an element based on its id?",
                options: ["#id", ".id", "*id", "id"],
                correctAnswer: 0,
            },
            {
                question: "What does the universal selector (*) do in CSS?",
                options: ["Targets all elements in a document", "Targets no elements", "Targets the body element", "Targets elements with a specific id"],
                correctAnswer: 0,
            },
            {
                question: "How do you select elements with the class name 'example'?",
                options: ["*example", "#example", ".example", "example"],
                correctAnswer: 2,
            },
            {
                question: "What is the correct syntax to select all <p> elements inside <div> elements?",
                options: ["div p", "div + p", "div > p", "p > div"],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "JavaScript",
        questions: [{
                question: "Which of the following is a correct syntax to dislay 'Hello World' in an alert box using JavaScript?",
                options: ["alertBox('Hello World');", "alert('Hello World');", "msgAlert('Hello World');", "displayAlert('Hello World');"],
                correctAnswer: 1,
            },
            {
                question: "What is the purpose of JavaScript in web development?",
                options: ["To structure web pages", "To style web pages", "To add interactivity and dynamic content to web pages", "To store data on the server"],
                correctAnswer: 2,
            },
            {
                question: "Which keyword is used for declaring a variable in JavaScript that can be reassigned?",
                options: ["const", "var", "let", "static"],
                correctAnswer: 2,
            },
            {
                question: "In JavaScript, which of the following is a valid variable name?",
                options: ["2names", "$name", "-name", "name2"],
                correctAnswer: 1,
            },
            {
                question: "Which data type in JavaScript is used to represent logical values??",
                options: ["String", "Boolean", "Number", "Undefined"],
                correctAnswer: 1,
            },
            {
                question: "What does the undefined value in JavaScript represent?",
                options: ["An unassigned variable", "A null value", "A logical false", "An error condition"],
                correctAnswer: 0,
            },
            {
                question: "What will be the output of the following code?console.log(typeof null);",
                options: ["'object'", "'null'", "'undefined'", "'number'"],
                correctAnswer: 0,
            },
            {
                question: "Which operator is used to check both the value and the type of a variable in JavaScript?",
                options: ["==", "===", "!=", "!=="],
                correctAnswer: 1,
            },
            {
                question: "What is the output of the following code snippet?var a = 10;console.log(a);",
                options: ["10", "'10'", "undefined", "null"],
                correctAnswer: 0,
            },
            {
                question: "What is the output of the following code snippet?let x = 'Hello';let y = 'World';console.log(x + ' ' + y);",
                options: ["HelloWorld", "'Hello World'", "'Hello' 'World'", "Hello World"],
                correctAnswer: 1,
            },
            {
                question: "Which statement is used to execute a block of code multiple times in JavaScript?",
                options: ["for", "if", "return", "break"],
                correctAnswer: 0,
            },
            {
                question: "What does the if statement in JavaScript do?",
                options: ["Declares a variable", "Executes a block of code based on a condition", "Prints a message to the console", "Loops through a block of code"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is not a loop structure in JavaScript?",
                options: ["while", "for", "if", "do-while"],
                correctAnswer: 2,
            },
            {
                question: "In a switch statement, what keyword is used to terminate a case in JavaScript?",
                options: ["end", "break", "stop", "exit"],
                correctAnswer: 1,
            },
            {
                question: "What will be the output of the following code?let a = 2;if(a > 3) {console.log('Yes');} else {console.log('No');}",
                options: ["Yes", "No", "Undefined", "Error"],
                correctAnswer: 1,
            },
            {
                question: "In a for loop, what are the three optional expressions, separated by semicolons?",
                options: ["Initializer, Condition, Incrementer", "Condition, Incrementer, Initializer", "Incrementer, Initializer, Condition", "Condition, Initializer, Incrementer"],
                correctAnswer: 0,
            },
            {
                question: "What is the output of this code snippet?for (let i = 0; i < 3; i++) {console.log(i);}",
                options: ["012", "123", "0-1-2", "1-2-3"],
                correctAnswer: 0,
            },
            {
                question: "Consider the following code:let x = 5;let result = (x > 3) ? 'Yes' : 'No';console.log(result);What is the output?",
                options: ["'Yes'", "'No'", "true", "false"],
                correctAnswer: 0,
            },
            {
                question: "Identify the problem in this code:let i = 0;while (i < 3) {console.log(i);}",
                options: ["Infinite loop", "Syntax error", "Logical error", "No output"],
                correctAnswer: 0,
            },
            {
                question: "Find the error in the following code:for (let i = 0; i <= 5; i++) {if(i % 2 == 0) continue;console.log(i);}",
                options: ["It doesn't print any number", "It only prints odd numbers", "It only prints even numbers", "Syntax error"],
                correctAnswer: 1,
            },
            {
                question: "What is the purpose of a function in JavaScript?",
                options: ["To store data", "To repeat a task multiple times", "To encapsulate code that performs a specific task", "To create web pages"],
                correctAnswer: 2,
            },
            {
                question: "How do you define a function in JavaScript?",
                options: ["function = myFunc() {}", "function: myFunc() {}", "function myFunc() {}", "myFunc() = function {}"],
                correctAnswer: 2,
            },
            {
                question: "In JavaScript, what is a callback function?",
                options: ["A function that runs after the page loads", "A function passed as an argument to another function", "A function that calls itself", "A function that performs an HTTP request"],
                correctAnswer: 1,
            },
            {
                question: "What is the result of trying to extend the length of an array using a function in JavaScript?function extendArray(arr) {arr.push(5);}let myArr = [1, 2, 3];extendArray(myArr);console.log(myArr.length);",
                options: ["3", "4", "5", "Error"],
                correctAnswer: 1,
            },
            {
                question: "Identify the error in this function:function multiply(a, b) {console.log(a * b);}",
                options: ["It does not return any value", "It returns the wrong value", "Syntax error", "No error"],
                correctAnswer: 0,
            },
        ],
    },
];
