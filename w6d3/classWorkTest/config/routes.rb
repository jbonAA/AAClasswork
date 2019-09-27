Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # resources :users

  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # get '/users/:id/edit', to: 'users#edit'
  # get '/users/new', to: 'users#new'
  # post '/users', to: 'users#create'
  # patch '/users/:id', to: 'users#update'
  # put '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'

  resources :users do 
    resources :artworks, only: [:index]
  end

  resources :users do
    resources :comments, only: :index
  end

  resources :artworks do
    resources :comments, only: :index
  end

  resources :artworks do
    resources :likes, only: :index
  end


  resources :likes, only: [:create, :show, :destroy]

  resources :users, only: [:index, :create, :show, :destroy, :update]

  resources :artworks, only: [:create, :show, :destory, :update]

  resources :artwork_shares, only: [:create, :destroy]

  resources :comments, only: [:create, :destroy, :index]
end
