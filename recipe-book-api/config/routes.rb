Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, param: :username do
    resources :recipes, param: :name, shallow: true
  end

  resources :recipes, param: :name do 
    resources :ingredients, shallow: true
  end
  
  post '/login', to: ("sessions#login")

end
