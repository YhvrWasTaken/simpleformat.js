![simpleformat.js](/pic.png)

A simple number formatter.

simpleformat.js has three functions- `format.normal()`, `format.mixed()`, and `format.create()`.

## Normal Formatting
`format.normal()` has two fields.
`number` Is where you enter your variable.
`type` Is the type of formatting you want.

Some examples:
```javascript
format.normal(1.45e51, 'nor')
//OUTPUT: "1.45 Sexdecillion"

format.normal(9.82e+4, 'sci')
//OUTPUT: "9.82e4"

format.normal(15438932589032, 'eng')
//OUTPUT: "15.44e12"
```

## Mixed Formatting

`format.mixed()` has four fields.
`number` Is where you enter your variable.
`config.type1` Is the type used if the number is LESS than the limit.
`config.type2` Is the type used if the number is MORE than the limit.
`config.limit` Decides the limit.

Some examples:
```javascript
format.mixed(1.45e51, {
	limit: Infinity,
	type1: 'nor',
	type2: 'let'
})
//OUTPUT: "1.45 Sexdecillion"

format.mixed(9.82E+4, {
	limit: 5.5e4,
	type1: 'let2',
	type2: 'sci'
})
//OUTPUT: "9.82e4"

format.mixed(15438932589032, {
	limit: 78306,
	type1: "custom type",
	type2: 'eng'
})
//OUTPUT: "15.44e12"
```

## Type Creation

`format.create()` has three fields.
`name` Is the name of the notation.
`notation` Is an array, containing the text displayed after the mantissa.
`type` Is either `sci` or `eng`. It decides wether or not `notation` increments every 3 exponents (`eng`), or 1 (`sci`). 

After you have created your notation, you can use it with `format.normal()` & `format.mixed()`.

IMPORTANT: If the item in notation is undefined, " Unknown" is used instead.

Some examples:
```javascript
format.create('custom type', [
	' A little',
	" A lot",
	' A metric ton',
	' Basically Infinity' // ' Unknown' will appear if the exponent is too large
], "sci")

format.create("short-nor", [
	" K",
	" M",
	" B",
	" T",
	" Q",
	" q",
	"I give up" // ' Unknown' will appear if the exponent is too large
], "eng")
```

## Other

### Add it to your website

You can add it to your website with this:

```
<script type='text/javascript' src='https://raw.githubusercontent.com/YhvrWasTaken/simpleformat.js/master/simpleformat.min.js'></script>
```

Or this un-minified version:
```
<script type='text/javascript' src='https://raw.githubusercontent.com/YhvrWasTaken/simpleformat.js/master/simpleformat.js'></script>
```

Or you could download it.

### Format Types

| Name          | Input         | Output         |
|:-------------:|:-------------:|:--------------:|
| Scientific    | `sci`         | 1.00e4         |
| Engineering   | `eng`         | 10.00e3        |
| Normal        | `nor`         | 10.00 Thousand |
| 2 Letters     | `let2`        | 1.00ab         |
| Letters       | `let`         | 1.00b          |

Don't forget, You can create your own types!
