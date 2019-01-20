# simpleformat.js
A simple number formatter. <br>
simpleformat.js has one function- `format()`. It has 2 inputs: `number` and `type`.
`number` Is where you enter your variable.
`type` Is the type of formatting you want.
Some examples:
```
format(1.45e51, 'nor')
//OUTPUT: "1.45 Sexdecillion"

format(9.82e+4, 'sci')
//OUTPUT: "9.82e4"

format(15438932589032, 'eng')
//OUTPUT: "15.44e12"
```
