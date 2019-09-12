# require_relative 'piece'

class Pawn < Piece
  attr_reader :color
  def initialize(color, board, pos)
    # super("black", self, pos)
    @symbol = :P
    @color, @board, @pos = color, board, pos 
  end

  def inspect
    return @symbol
  end
end