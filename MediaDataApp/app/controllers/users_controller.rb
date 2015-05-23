class UsersController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
  		redirect_to root_url 
  		flash[:notice] = "Succesful"
  		flash[:color]= "valid"
  	else
  		flash[:notice] = "Error"
      	flash[:color]= "invalid"
  		render "new"
  	end
  end

  def user_params
  	params.require(:user).permit(:admin, :user, :password_hash, :password_salt, :name, :age, :profession, :country, :mail, :picture)
  end
end
