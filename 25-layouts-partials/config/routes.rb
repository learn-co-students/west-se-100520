Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :dogs, only: [:create, :update, :show, :index, :new ]
  resources :shelters, only: [:show, :index]
  resources :owners, only: [:show, :index]

  get '/dogs/:id/adopt', to: 'dogs#adopt'
  get '/dogs/:id/abandon', to: 'dogs#abandon'
  get '/', to: 'application#welcome'
end
