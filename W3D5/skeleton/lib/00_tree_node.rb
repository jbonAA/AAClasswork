class PolyTreeNode
    attr_accessor :value, :parent, :children
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end
require "byebug"
    def parent=(new_parent)
        unless parent.nil?    
            self.parent.children.each.with_index do |child, i|
                self.parent.children.delete_at(i) if child == self
            end
        end
        if new_parent == nil
            # debugger
            parent.children.each.with_index do |child, i|
                parent.children.delete_at(i) if child == self
            end

            @parent = nil
            return parent
        else
            @parent = new_parent
            parent.children.push(self) unless parent.children.include?(self)
        end
    end

    def inspect
        "<PolyTreeNode:#{value}>"
    end

    def add_child(child)
        child.parent = self
    end

    def remove_child(child)
        child.parent = nil
    end

    def dfs(target_value)
        return self if value == target_value
        return nil if children.empty?
        self.children.each do |child|
            res = child.dfs(target_value)
            return res unless res.nil?
        end
        nil
    end



end