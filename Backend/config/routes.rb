Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      resources :book_shelves
      resources :books

      post '/auth', to: 'auth#create'
      get '/current_user', to: 'auth#show'
      # resources :application
      # post
      # post '/books/search', to: 'books#search'
      # params[:key] => value
      # get '/books/?q=:input?author=:author/:title', to: 'books#search'
    end
  end
end
