Rails.application.routes.draw do
  get '/dinosaurs', to: 'dinosaurs#index'
  get '/dinosaurs/about', to: 'dinosaurs#about'
  get '/dinosaurs/:id', to: 'dinosaurs#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
