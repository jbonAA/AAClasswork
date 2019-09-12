# require_relative 'null_piece'
class Piece
attr_reader :color, :board, :pos
def initialize(color, board, pos)
  @color = color
  @board = board
  @pos = pos
end

end

# whitepieces 
# i == 0 && 1

# blackpieces 
# i == 6 && 7 

# space = Piece.new("white", Board.rows, [0, 0])
# rook = Rook.new(:R)
# r.color
