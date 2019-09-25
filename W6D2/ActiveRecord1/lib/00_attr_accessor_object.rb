class AttrAccessorObject

  def initialize
  end

  def self.my_attr_accessor(*names)
    names.each do |name|
      define_method(name) do
        instance_variable_get("@#{name}")
      end

      define_method("#{name}=") do |val = nil|
        unless val.nil?
          self.instance_variable_set("@#{name}", val)
        end
      end
    end
  end

  
end

# a = AttrAccessorObject.new(1, 2)