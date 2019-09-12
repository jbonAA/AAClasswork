class Knight < Piece
  attr_reader :color
  def initialize(color, board, pos)
    @color, @board, @pos = color, board, pos
    @symbol = :N
  end

  def inspect
    return @symbol
  end
end

class King < Piece
  attr_reader :color
  def initialize(color, board, pos)
    @color, @board, @pos = color, board, pos
    @symbol = :K
  end
  require "byebug"
  def moves(start_pos)
    new_arr = []
    #[1, 1]
    i, j = start_pos[0],start_pos[1]
    k = -1
    # debugger
    while k < 2
      i += k
      (-1..1).each do |n|
        new_arr << [i, j + n]
      end
      k += 1
    end
      new_arr
  end
  




  #   start_pos.each_with_index do |ele, i|


  #     diff = start_pos[i] + 1
  #     sec = start_pos[i + 1] + 1
  #     new_arr << [diff, start_pos[i + 1]]
  #     new_arr << [start_pos[i], sec]

        
  #   i = 0
  #   while i <= 7
  #     j = 0
  #     while j <= 7
  #       new_arr << [i, j]
  #       j += 1
  #     end
  #     i += 1
  #   end

  #   new_arr
  # end 





  def inspect
    return @symbol
  end
end

a = Piece.new("white",board,[1,1])
a.moves