require_relative 'piece'
require 'singleton'

class NullPiece < Piece
  include Singleton

  # private
 
  def initialize
  end

  def inspect
    return "lv cxv"
  end



end