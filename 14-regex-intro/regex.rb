
original_string = "wuefghklsvj745-678-4346bdfhgiujkbserigjsknf&df232.392.1424"

new_string = original_string.scan(/[78]/)
# scan
# /\d{3}[-.]\d{3}[-.]\d{3}/
# =~
# If a match is found, the index of first match in string is returned.


# puts new_string
# puts original_string

# /[.?!]+/


# iterators???? gsub!

lotr = "the lord of the rings"

surprise = lotr.gsub("the", "surprise")
# g => global, sub => substitution

capitalized = lotr.gsub(/\w+/) { |w| w.capitalize }
# + => repeated

puts surprise

puts capitalized
