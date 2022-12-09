Rails.application.routes.draw do
  root to: redirect('/events')
  devise_for :users
  # root "home#index"

  
  get 'events', to: 'site#index'
  get 'events/new', to: 'site#index'
  get 'events/:id', to: 'site#index'
  get 'events/:id/edit', to: 'site#index'

  namespace :api do
    resources :events, only: %i[index show create destroy update]
  end
end
