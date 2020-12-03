## SWBATs 
- Create a class using both ES5 and ES6 syntaxes. In both syntaxes, students should be able to:
- Write a constructor
- Instantiate a new object
- Write instance methods for JS classes
- Write 'class' methods for JS classes

|                         | Factory Functions  | Constructor Functions | Class Syntax |
| ----------------------- | ------------------ | --------------------- | ------------ |
| Syntactically Appealing |  Y                  |    N**                   |  Y            |
| Performant              |  N*                  |   Y                    |   Y           |
| Compatible              |  Y                  |    Y                   |    N***          |

* No prototype, we recreate the methods every time we create a character
** Constructor function syntax forces us to separate attributes from behavior
*** ES6 syntax is not available yet in all browsers

Babel
