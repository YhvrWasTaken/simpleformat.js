# simpleformat.js
A simple number formatter. <br>
simpleformat.js has one function- `format()`. It has 2 inputs: `number` and `type`. <br>
`number` Is where you enter your variable. <br>
`type` Is the type of formatting you want. <br>
Some examples:
```
format(1.45e51, 'nor')
//OUTPUT: "1.45 Sexdecillion"

format(9.82e+4, 'sci')
//OUTPUT: "9.82e4"

format(15438932589032, 'eng')
//OUTPUT: "15.44e12"
```

You can add it to your website with this: <br>

```
<script type='text/javascript' src='https://raw.githubusercontent.com/YhvrWasTaken/simpleformat.js/master/simpleformat.min.js'></script>
```

Or this un-minified version: <br>

```
<script type='text/javascript' src='https://raw.githubusercontent.com/YhvrWasTaken/simpleformat.js/master/simpleformat.js'></script>
```

And here is an entire list of format types: <br>

| Name          | Input         | Output         |
|:-------------:|:-------------:|:--------------:|
| Scientific    | `sci`         | 1.00e4         |
| Engineering   | `eng`         | 10.00e3        |
| Normal        | `nor`         | 10.00 Thousand |
| 2 Letters     | `let2`        | 1.00ab         |
| Letters       | `let`         | 1.00b          |
