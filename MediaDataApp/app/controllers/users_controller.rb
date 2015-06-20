class UsersController < ApplicationController
	before_filter :authenticate_user!
	before_action :set_user, only: [:show, :edit, :update, :destroy]
	def index
		@users = User.all
    end
	def show
		 @user = User.find(params[:id])
		  respond_to do |format|
        	 format.html # show.html.erb
       		 format.xml { render :xml => @user }
    	end
	end
	def user_params
 		 params.require(:user).permit(:picture)
	end

	def edit
		#@users = User.all
	end

	def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
    #redirect_to users;
  end

	def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:admin)
    end

end
