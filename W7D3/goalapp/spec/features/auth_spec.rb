require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  background :each do
    visit new_user_path
  end

  scenario 'has a new user page' do
    expect(page).to have_content('Sign Up')
  end
end

feature 'signing up a user' do
  background :each do
    visit new_user_path
  end

  scenario 'shows username on the homepage after signup' do
    fill_in 'username', with: 'sparkle'
    fill_in 'password', with: 'password'
    click_button 'Sign Up'
    expect(page).to have_content('sparkle')

    sparkle = User.find_by(username: 'sparkle')
    expect(current_path).to eq(user_url(sparkle))
  end
end

feature 'logging in' do
  background :each do
    visit new_session_path
  end

  scenario 'shows username on the homepage after login' do
    fill_in 'username', with: 'sparkle'
    fill_in 'password', with: 'password'
    click_button 'Log In'

    expect(page).to have_content('sparkle')
    sparkle = User.find_by(username: 'sparkle')
    expect(current_path).to eq(user_url(sparkle))
  end
end

feature 'logging out' do
  background :each do 
    visit new_user_path
  end
 let(:user) {User.create!(username: 'sparkle', password: 'password')}

  scenario 'begins with a logged out state' do
    expect(page).to have_content('Log In')
  end

  scenario 'doesn\'t show username on the homepage after logout' do 
    click_button 'Log Out'
    expect(page).not_to have_content('sparkle')
  end

end