module Api
  class EmployeesController < ActionController::Base

    def index
      employees = Employee.all
      render json: employees
    end

  end
end
