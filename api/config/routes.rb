Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :users, only: %i[index create]
    end
  end

  # get login token from knock
  post 'user_token', to: 'user_token#create'
  get 'auth', to: 'home#auth'
  get '/api/v1/users/current', to: 'users#current'
end
