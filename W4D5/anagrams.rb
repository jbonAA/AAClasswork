require 'benchmark'
require 'set'
# def anagrams(str1, str2)

#   hash = Hash.new(0)

#   str1.each_char do |ch|
#     hash[ch] += 1
#   end

#   str2.each_char do |ch|
#     hash[ch] -= 1
#   end

#   hash.values.all? { |val| val == 0 }
# end

def anagrams3(str1, str2)
  alphabet = ('a'..'z').to_a
  
  


  str1 == str2
end


 n = 10_000
  Benchmark.bm do |x|

    x.report("anagrams3:") { anagrams3("elvis" * 1000, "lives" * 1000) }
  end

