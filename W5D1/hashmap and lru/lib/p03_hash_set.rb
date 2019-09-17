class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)

    if !self[key.hash % num_buckets].include?(key) && count == num_buckets
      resize!
      self[key.hash % num_buckets] << key
    elsif !self[key.hash % num_buckets].include?(key) && count != num_buckets
      self[key.hash % num_buckets] << key
      
    end
  
  end

  def include?(key)
    self[key.hash % num_buckets].include?(key)
  end

  def remove(key)
    self[key.hash % num_buckets].delete(key)
  end

  private

  def [](key)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
  end
end
