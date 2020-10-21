def move_zeroes(arr)
  # iterate thru array. find a zero, slice it out, push it on the end.
  # with each zero, increase a counter. once you have only {counter} number of elements left, exit loop and return array
  length = arr.length
  zero_counter = 0

  arr.each_with_index do |num, index|
    if length - zero_counter == index - 1
      return arr
    end
    if num === 0
      arr.push(arr.slice!(index))
      zero_counter += 1
    end
  end
end

# puts move_zeroes([1, 0, 2, 0, 3, 0, 4, 5])
# [1,0,2,0,3,0,4,5]
# => [1,2,3,4,5,0,0,0]

def two_sum_nested_solution(arr, targ)
  # iterate through the array. for each element in the array, iterate through it again and see if any of the other elements add up to the target. If we find a working pair, stop iteration and return indexes.

  arr.each_with_index do |num2, i2|
    arr.each_with_index do |num1, i1|
      if num1 + num2 == targ
        return { "index1": i1, "index2": i2 }
      end
    end
  end
end

puts "Two sum nested solution"
t1 = Time.now
puts two_sum_nested_solution([2, 7, 11, 15], 9)
t2 = Time.now
puts (t2 - t1) * 10000
# => {index1: 0, index2: 1}

# [1,2,3], 3

def two_sum_with_dictionary(arr, targ)
  # create a dictionary to keep possible matches
  possibleMatches = {}
  # iterate through the array
  arr.each_with_index do |num, i|
    # if our number exists inside of the possible matches dictionary, we know we have seen it before
    if possibleMatches[num]
      return { "index1": possibleMatches[num], "index2": i }
    else
      # if our number's match was not yet in the dictionary, add it in
      newPossibleMatch = targ - num
      possibleMatches[newPossibleMatch] = i
    end
  end
  return "No Match Found"
end

puts "Two sum with dictionary"
t1 = Time.now
puts two_sum_with_dictionary([2, 7, 11, 15], 9)
t2 = Time.now
puts (t2 - t1) * 10000
# => {index1: 0, index2: 1}
