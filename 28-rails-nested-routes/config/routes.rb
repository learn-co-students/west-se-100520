Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'sessions#new'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  get '/signup' => 'users#new'



  resources :comments

  resources :visits

  resources :states do
    resources :visits, shallow: true
  end

  # resources :visits do
  #   resources :comments
  # end



  resources :users, only: [:create, :new, :show]



end
