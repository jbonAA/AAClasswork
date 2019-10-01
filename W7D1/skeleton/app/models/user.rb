class User < ApplicationRecord
  before_validation :ensure_session_token
  attr_reader :password
  validates :username, presence: true
  validates :password_digest, presence: true
  validates :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :cats,
    foreign_key: :user_id,
    class_name: :Cat

  def reset_session_token!
    self.update!(session_token: SecureRandom.urlsafe_base64(16))
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

end
