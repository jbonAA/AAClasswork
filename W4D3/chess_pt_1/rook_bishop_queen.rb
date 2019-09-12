class Rook < Piece
  def initialize(color, board, position)
    @color, @board, @position = color, board, position
    @symbol = :R
  end

  def inspect
    return @symbol
  end
end

class Bishop < Piece
  def initialize(color, board, position)
    @color, @board, @position = color, board, position
    @symbol = :B
  end

  def inspect
    return @symbol
  end
end


class Queen < Piece
  def initialize(color, board, position)
    @color, @board, @position = color, board, position
    @symbol = :Q
  end

  def inspect
    return @symbol
  end
end