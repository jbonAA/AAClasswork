require_relative '00_tree_node'
require "byebug"

class KnightPathFinder

  def self.valid_moves(pos)
    
    res = []
    res << KnightPathFinder.populate_moves(pos, [1, 2])
    res << KnightPathFinder.populate_moves(pos, [2, 1])
    res << KnightPathFinder.populate_moves(pos, [-1, 2])
    res << KnightPathFinder.populate_moves(pos, [-2, 1])
    res << KnightPathFinder.populate_moves(pos, [-1, -2])
    res << KnightPathFinder.populate_moves(pos, [-2, -1])
    res << KnightPathFinder.populate_moves(pos, [1, -2])
    res << KnightPathFinder.populate_moves(pos, [2, -1])

    res.select { |subArr| subArr.none? { |num| num > 7 || num < 0 } }

  end

  def self.populate_moves(pos, increments)
    [pos.value.first + increments.first, pos.value.first + increments.last]
  end
    
    

  attr_reader :root_node
  attr_accessor :considered_positions
  def initialize(starting_position)
    @root_node = PolyTreeNode.new(starting_position)
    @considered_positions = [starting_position]
      build_move_tree

  end

  def new_move_position(pos)
    new_moves = KnightPathFinder.valid_moves(pos).reject { |move| @considered_positions.include?(move) } 
    # debugger
    @considered_positions += new_moves
    new_moves.map { |move| PolyTreeNode.new(move)}
  end

  def build_move_tree
    start = root_node
    queue = new_move_position(start)
    queue.each { |pos| start.add_child(pos) }
    until queue.empty?
      first_node = queue.shift
      new_moves = new_move_position(first_node)
      new_moves.each { |pos| first_node.add_child(pos) }
      queue += new_moves
    end
  end

  def find_path(end_pos)
    return root_node if root_node.value == end_pos
    debugger
    root_node.children.each do |child|
      next_node = find_path(child)
      return next_node unless next_node.nil?
    end

    return nil
  end


end
