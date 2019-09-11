require 'piece.rb'
class Board

  #Create a working board
  #class inheritance for Piece(empty Piece class)
  #write initialize to set up board with Pieces
  #move_piece
    #raising exception for invalid moves

  def initialize(size)
    @rows = Array.new(size) { Array.new(size) }
    (0..@rows.length - 1).each do |i|
      while i <= 1 || i >= 6
        @rows[i].map! { |ele| ele = _ }
        break
      end
    end

    # @sentinel = NullPiece

  end
    
  def [](pos)
    row,col = pos[0],pos[1]
    @rows[row][col] 
  end

  def []=(pos,val)
    row,col = pos[0],pos[1]
    @rows[row][col] = val
  end


end

new_board = Board.new(8)