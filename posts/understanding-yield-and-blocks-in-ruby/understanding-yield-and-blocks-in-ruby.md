---
path: /posts/understanding-yield-and-blocks-in-ruby
date: 2018-05-20
title: Understanding yield and blocks in Ruby
headerImage: './myimg.png'
---

![Base](myimg.png)
![Relative](./myimg.png)
![Root](/myimg.png)

Just want the syntax and some use cases? -> Link to code samples
Learning ruby from scratch? Ensure you understand the following concepts

- Local scope
- Methods/Functions
- Implicit Returns (everything in ruby is evaluated)
- Data Types

## Why do I need yields and &blocks

Many basic use cases for `yield`s can be accomplished using wrapper methods over existing functionality. `yield`’s true strength is the removal of boilerplate and simplification of your code base.

### Practical yield examples

- Automated set up and tear down of test cases.
- Functional-esque programming with lambdas.
- Opening and closing HTTP requests.
- Login and logoff of any service.
- Opening, writing then saving any file.
- Processing data pulled from any other source.

## Some background

**Yield** is a keyword that allows us to execute a block that has been passed to a method. Yield takes arguments (like a method) and returns a value (like a method) and doesn’t care much about the contents of the block it’s passed to. Yield will not error if the block it is calling contains less arguments than are being passed to it.
You can call yield multiple times in a method, but in practical use you’ll probably ever see it used once as repetition should be handled by looping constructs

**Blocks** are sections of code that can only be invoked by a method that has a `yield` in its body. Blocks can also be passed around your program in variables with some trickery. I’ll be covering that in the next post in this series

## Recognizing different blocks

There are two types of blocks, they function nearly identically, however idiom dictates that the brace `{…}` version is used for one line, simple blocks and the do `do … end` version is used for anything longer.

A comma separated list of parameters can be passed into both styles by using pipes `| x, y, z |`. These parameters define local variables within the blocks scope, much like methods.

_Output always follows `>`_

### Brace style oneliner blocks

```rb
my_array = [1, 2, 3,]
my_array.each { |x| puts x + 1 }

# > 2
# > 3
# > 4
```

### do … end style multiline blocks

```rb
my_array = [1, 2, 3]
my_array.each do |x|
	y = x + 1
	puts y
end

# > 2
# > 3
# > 4
```

Both blocks output the same data, regardless of style. These are functionally identical with the exception of defining `y` in the `do … end` block to illustrate just how multi-line they can be.

## What can yield do for me?

### Yield inverts control back to the calling method.

When `yield` is called within a method, it pauses execution of the current thread until the block is completed.

```rb
def method
    puts "First"
    yield
    puts "Third"
end

method { puts "Second"; puts `sleep 3`  }

# > First
# > Second
# > Third
```

**Sequence of events** 1. `method` is called. 2. `method` puts `”First”` 3. Control is `yield`ed to the calling block 4. Calling method puts `”Second"` 5. Calling method executes a `sleep` for 3 seconds in `STDOUT`(shell) 6. Calling method is now complete and returns control back to `method` 7. `method` puts `”Third”` and returns. 8. Complete!

### Yield calls ‘micro methods’

Everything in Ruby evaluates to a value and `yield` is no different. I understood yield first as being a way to call ‘baby methods’ within ‘parent methods’. You may recognise that this is the same plumbing that allows `Enumerable` methods like `Enumerable#map` and `Enumerable#reduce` to function.

```rb
def array_method(an_array)
	puts "Starting up!"
	for each_item in an_array
		yield each_item
	end
	puts "All done"
end

my_array = [2, 3, 4]
array_method(my_array) { |thing| puts thing * 2 }

# > "Starting up!"
# > 4
# > 6
# > 8
# > "All done"
```

**Sequence of events**

1. `array_method` is called
2. `my_array` is passed into the method as an argument
3. `array_method` begins a loop over each of the 3 items
   - _3 TIMES_
   - `yield` passes each_item down to the calling methods block
   - The calling methods block is evaluated and puts `thing * 2`
   - control is given back to the method
   - _REPEAT_
4. With control now back in the method itself we put string `”That’s all!”`
5. Complete!

### Yield evaluates and returns

Now that we know yield passes arguments, it follows that we can also return a value from a block. Here we’ve rewritten the map function to demonstrate the simplicity and power `yield` provides.
You can return values from the block using the `return` keyword or implicitly returning the last evaluation in the block.

```rb
def mapper(an_array)
    new_array = []
    for each_item in an_array
        new_array << yield(each_item)
    end
    new_array
end

original_array = ["a", "b", "c"]
final_array = mapper(original_array) { |letter| letter * 2 }

puts "My old array was:\n#{original_array}\nbut now I have:\n#{final_array}"

# My old array was:
# ["a", "b", "c"]
# But now I have:
# ["aa", "bb", "cc"]
```

**Sequence of events**

1. Call `mapper` with `original_array`
2. `mapper` creates a new array `new_array`
3. `mapper` begins a loop over each item in `an_array`
   - _3 TIMES_
   - `yield` passes each item down to the calling block
   - The calling block multiplies the `letter` by 2
   - Calling block _implicitly_ returns the result of this operation to the yield
   - Back in the method we shovel `<<` the result of the block into our `new_array`
   - _END_
4. `mapper` implicitly returns the `new_array`
5. The external `final_array` is set to the return value of `mapper`
6. Our two arrays `original_array` and its cousin `final_array` are output.

### Yield can be optional

If you’ve had a look in Ruby’s core documentation, you may have noticed that several methods take blocks optionally.  
For example `Array#find_index` will find the index of an item passed as an argument
`[“a”, “b”, “c”].find_index(“c”)` outputs `> 2`
The same method can alternatively be used with a block to find the index of a character with a more complex calculation.
`[“a”, “b”, “c”].find_index {|char| char == "c" }` outputs the same as above `> 2`

Here we’ll define `reducer`, a method that will sum an array passed to it as an argument, or alternatively allow you to perform an operation with an initial value on each item in the array

```rb
def reducer(an_array, initial_value=0)
	sum = initial_value
	for each_item in an_array
		if block_given?
			sum = yield sum, each_item
		else
			sum += each_item
		end
	end
	sum
end

p reducer([1, 2, 3])

p "Now with a block"
p reducer([1, 2, 3], []) { |array, item| array.unshift(item) }
# -- Outputs
# > 6
# > "Now with a block"
# > [3, 2, 1]
```

**Sequence of events**
_First Call_

1. `reducer` is called without a block and is passed an array of `[1, 2, 3]`
2. `sum` is set to `0` from `initial_value`
3. `reducer` begins a loop for each item in `an_array`
   - _3 TIMES_
   - `block_given?` is false
   - jump to `else`
   - `sum` is set to `each_item` + `sum`
   - _END LOOP_
4. `sum` is implicitly returned to the caller and is printed as `6`

---

_Second Call_

5. `reducer` is called with an array of `[1, 2, 3]` and an empty array as its initial value `[]`
6. `sum` in `reducer` is set to `[]`
7. `reducer` begins a loop for each item in `an_array`
   - _3 TIMES_
   - `block_given` is true, so we step in
   - `reducer` yields `sum` and `each_item` to the block provided
   - The block provided is passed `sum` for `array` and `each_item` for `item`
   - The block prepends `item` into `array` and implicitly returns the new array
   - The new array is passed back into `reduce`

## Other Notes

Now that you have a strong grasp on how yield works, I’ll stop boring you with sequences of events. The next section include non essential tidbits about blocks

### Blocks can have default arguments

If you’re unsure how many arguments may be called, you can set defaults on a blocks arguments to prevent an exception.

```rb
def two_args
    yield "First", "Second"
    yield "Third"
end

two_args { |a, b = "Nothing Passed"| puts "#{a} then #{b}" }
# > "First then Second"
# > "Third then Nothing Passed"
```

### Blocks are frequently used as looping constructs

Many loops in ruby are in fact blocks being repeatedly invoked by a method.

```rb
3.times { print '!'}
# > !!!
5.upto(10) { |i| print i }
# > 5678910
```

### All methods accept blocks

That doesn’t however mean that they do anything useful with them.

```rb
def my_method
	puts "From method"
end

my_method { puts "From block"

# > "From method"
```
