class Integer
  # Integer#hash already implemented for you
end
# require "byebug"
class Array
  def hash
    
    hashed_elements= []
    self.each.with_index { |ele, i| hashed_elements << (ele * i) + 7 }
    hashed_elements.sum
    
  end
end

class String
  def hash
    a= ('a'..'z').to_a
    hashed_elements = []
    self.each_char.with_index do |c,i|
      old_idx = a.index(c.downcase)
      hashed_elements << (old_idx * i) + 7
    end
    hashed_elements.sum
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
     a= ('a'..'z').to_a
     hashed_elements = []
     self.keys.each do |key|
        hashed_elements << key.hash * self[key].hash
    end
    hashed_elements.sum
  end
end

a = [1, 2, 3]
a.hash
