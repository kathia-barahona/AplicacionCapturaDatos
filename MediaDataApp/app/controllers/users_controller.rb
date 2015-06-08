class UsersController < ApplicationController
	before_filter :authenticate_user!
	def index
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

end
