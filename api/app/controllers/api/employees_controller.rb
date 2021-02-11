module Api
  class EmployeesController < ActionController::Base

    def index
      @employees = Employee.all
      @employees = Employee.filter_by_first_name(permitted_params[:first_name]) if permitted_params[:first_name]
      @employees = Employee.filter_by_last_name(permitted_params[:last_name]) if permitted_params[:last_name]
      @employees = Employee.filter_by_email(permitted_params[:email]) if permitted_params[:email]
      @employees = Employee.filter_by_title(permitted_params[:title]) if permitted_params[:title]
      render json: @employees
    end

    def permitted_params
      params.permit(:id, :first_name, :last_name, :email, :title, :avatar)
    end

  end
end
