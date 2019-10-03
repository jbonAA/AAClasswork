require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe 'GET #new' do
    it 'renders the new users template' do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe 'POST #create' do
    let(:user_params) do
      {user: {
        username: 'sparkle',
        password: 'password'
      }}
    end

    context 'with valid params' do
      it 'logs in the user' do
        post :create, params: user_params
        sparkle = User.find_by(username: 'sparkle')
        expect(session[:session_token]).to eq(sparkle.session_token)
      end
      
      it 'redirects to the users show page' do
        post :create, params: user_params
        sparkle = User.find_by(username: 'sparkle')
        expect(response).to redirect_to(user_url(sparkle))
      end
    end

    context 'with invalid params' do
      it 'validates presence of password and renders new template with errors' do
        post :create, params: {user: {
          username: 'sparkle',
          password: ''
         }}
        expect(response).to render_template(:new)
        expect(flash[:errors]).to be_present
      end
      
    end
  end

end
