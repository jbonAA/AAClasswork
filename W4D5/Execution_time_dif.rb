require 'benchmark'

def my_min(arr)
  curr_min = arr.first
  arr[1..-1].each do |el|
    curr_min = el if el < curr_min
  end
  curr_min
end

def sub_sum(list)
  # res = []
  # i = 0
  # while i < list.length - 1
  #   res << list[i]
  #   j = i + 1
  #   while j < list.length
  #     curr_sum = list[i..j].sum
  #     res << curr_sum
  #     j += 1
  #   end
  #   i += 1

  # end
  i = 0

  while i < list.length - 1
    
    curr_sum = [list[i] + list[i + 1], list[i + 1]]
    best_sum = curr_sum unless curr_sum < best_sum
    i += 1

  end



  # best_sum = 0
  # (0..list.length - 1).each do |idx|
  #   current = [list[idx] + list[idx + 1], list[idx + 1]].max
  #   best_sum = current if current > best_sum
  # end

  best_sum
end


  n = 100_000
  Benchmark.bm do |x|
    x.report("my_min:") { my_min((1..100_000).to_a.shuffle!) }
    x.report("sub_sum") { sub_sum((1..10000).to_a.shuffle!) }
  end
