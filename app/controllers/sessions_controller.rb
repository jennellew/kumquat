class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user
      #TODO
      flash.now[:success] = 'You exist!'
      sign_in user
      redirect_to user
    else
      flash.now[:error] = "You don't exist D:"
      render 'new'
    end
  end
end
