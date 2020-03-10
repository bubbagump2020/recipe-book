Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # would like to do custom routes, would need more work on the frontend with react-router-dom

  # get '/:username', to 'users#show'

  resources :users, param: :username do
    resources :recipes, param: :name, shallow: true
  end

  resources :recipes, param: :name do 
    resources :ingredients, params: :name, shallow: true
  end
  
  post '/login', to: ("sessions#login")

end
