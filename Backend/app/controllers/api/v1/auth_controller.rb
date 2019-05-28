class Api::V1::AuthController < ApplicationController

  def create
    # byebug
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      render json: {id: user.id, name: user.name}
    else
      render json: {error: "Could not authenticate"}, status: 401
    end
  end

  def show
    token = request.headers['Authenticate']

    user = User.find_by(id: token)

    if user
      render json: {id: user.id, name: user.name}
    else
      render json: {error: "Could not authenticate"}, status: 401
    end

  end

end
