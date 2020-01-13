Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, param: :username do
    resources :recipes, param: :title
  end

  post '/login', to: ("sessions#login")
  post '/logout', to: ("sessions#logout")

end
