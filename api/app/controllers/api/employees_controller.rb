module Api
  class EmployeesController < ActionController::Base

    def index
      @employees = Employee.all
      @employees = Employee.filter_by_first_name(params_exist[:first_name]) if params_exist[:first_name]
      @employees = Employee.filter_by_last_name(params_exist[:last_name]) if params_exist[:last_name]
      render json: @employees
    end
    def params_exist
      params.permit(:id, :first_name, :last_name, :email, :title, :avatar)
    end
  end
end
