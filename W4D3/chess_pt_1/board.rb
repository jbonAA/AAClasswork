require_relative 'piece'
require_relative 'null_piece'
require_relative 'pawn'
require_relative 'Knight_King'
require_relative 'rook_bishop_queen'


class Board

  attr_reader :rows
  def initialize(size)
    @rows = Array.new(size) { Array.new(size) }
    @sentinel = NullPiece.instance

    (0..@rows.length - 1).each do |i|
      if (2..5).to_a.include?(i)
        @rows[i].map! { |ele| ele = @sentinel }
      end
    end
    self.populate_board
    self.fill
  end

  def populate_board   #making white and black pieces
    (0..self.rows.length - 1).each do |i|
      if i == 0 || i == 1
        j = 0
        while j < @rows.length
          pos = [i,j]
          self[pos] = Piece.new("white", self, pos)
          j += 1
        end
      elsif i == 6 || i ==7
         j = 0
        while j < @rows.length
          pos = [i,j]
          self[pos] = Piece.new("black", self, pos)
          j += 1
        end

      end
    end
  end

  def fill
    (0..self.rows.length - 1).each do |i|
      if i == 1 || i == 6
        j = 0
        while j < self.rows.length
          pos = [i,j]
          self[pos] = Pawn.new(self[pos].color,self[pos].board,self[pos].pos)
          j += 1
        end
      elsif i == 0 || i == 7
        j = 0
        while j < self.rows.length
          pos = [i,j]
          if j == 0 || j == 7
            self[pos] = Rook.new(self[pos].color,self[pos].board,self[pos].pos)
            j += 1
          elsif j == 1 || j == 6
            self[pos] = Knight.new(self[pos].color,self[pos].board,self[pos].pos)
            j += 1
          elsif j == 2 || j == 5
            self[pos] = Bishop.new(self[pos].color,self[pos].board,self[pos].pos)
            j += 1
          elsif j == 4
            self[pos] = King.new(self[pos].color,self[pos].board,self[pos].pos)
            j += 1
          else
            self[pos] = Queen.new(self[pos].color,self[pos].board,self[pos].pos)
            j += 1
          end
        end
      end
    end
  end
   

  def [](pos)
    row,col = pos[0],pos[1]
    @rows[row][col] 
  end

  def []=(pos,val)
    row,col = pos[0],pos[1]
    @rows[row][col] = val
  end

  def move_piece(color, start_pos, end_pos)

    #sarting position of piece color
    #populate the end position by using bracket == to color
    #
    # piece_one = self[start_pos]
    # piece_two = self[end_pos]
    # raise "Cant take own Piece" if piece_one.color == valid_pos?(end_pos)
    # self[start_pos] = piece_two
    # self[end_pos] = piece_one
  end

  def valid_pos?(pos)
    return false if pos.any? {|n| n < 0 || n >7 }
    self[pos].color  
  end

  def add_piece(piece, pos)
    self[pos] = piece
  end


  def dup
    @rows.dup
  end

  def inspect
    self.rows.each do |row|
      p row
    end
    nil
  end
 
end

new_board = Board.new(8)
p new_board
# p "-----------"
# pos = [1,0]
# p self[pos].color