class Api::V1::UsersController < ApplicationController
  # skip_before_action :authorized, only: [:new, :create]
    # before_action :get_user, only: [:show, :edit, :update]

    def index
        @users = User.all
        render json: @users.to_json(only: [:name])
    end


    def new
        @user = User.new
    end

    def create
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            token = issue_token({id: user.id})
            render json:{id: user.id}
      end
    end

    def show
      # token = request.headers['Authenticate']
      # decoded = JWT.decode(token, 'secret', true, { algorithm: 'HS256'}).first
      # id = decoded["id"]
      #
      # user = User.find_by(id: token)

      if current_user
        render json: {id: current_user.id, name: current_user.name}
      else
        render json: {error: "could not authenitcate"}, status: 401
      end
    end

    def edit
    end

    def update
        @user.update(user_params)
        redirect_to user_path
    end

    def destroy
        get_user.destroy
        flash[:notice] = "You have deleted your account"
        redirect_to users_path
    end

    private

    def get_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:name)
    end

end
