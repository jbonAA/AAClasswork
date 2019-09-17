class MaxIntSet

  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
    @max = max
  end

  def insert(num)
    raise "Out of bounds" if num > @max - 1 || num < 0
    unless include?(num)
      self.store[num] = true
    end
  

  end

  def remove(num)
    self.store[num] = false
  end

  def include?(num)
    return true if @store[num] == true
    false
    
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    unless @store.include?(num)
      @store[num % num_buckets] << num
    end
  end

  def remove(num)
    @store[num % num_buckets].delete(num)
  end

  def include?(num)
    @store.each do |bucket|
      return true if bucket.include?(num)
    end
    false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_accessor :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !@store[num % num_buckets].include?(num) && count >= num_buckets
      resize!
      @store[num % num_buckets] << num
      self.count += 1
    elsif !@store[num % num_buckets].include?(num)
      @store[num % num_buckets] << num
      self.count += 1
    end
  end

  def remove(num)
    if @store[num % num_buckets].delete(num)
      self.count -= 1
    end
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    result = []
    num_buckets.times {@store << [] }
    (0...num_buckets / 2).each do |index|
      @store[index].each { |el| result << el }
    end
    result.each do |ele|
      @store[ele % num_buckets] << ele
    end



  end
end
