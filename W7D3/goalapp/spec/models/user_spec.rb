require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  subject(:valid_user) do
    User.create!(username: "fdsnjfnsdkn", password: "password")
  end

  it { should validate_presence_of(:username)}


  it { should validate_presence_of(:password_digest)}
  it { should validate_length_of(:password).is_at_least(6)}
  it { should validate_uniqueness_of(:username)}

  # User has many goals, each goal has a user, each goal can have many comments
  it { should have_many(:goals) }
  it { should have_many(:comments) }


  let!(:sparkle) { User.create!(username: 'sparkle', password: 'password')}

  it 'finds a user by their username' do
    expect(User.find_by_credentials('sparkle', 'password')).not_to be_nil
  end
end
