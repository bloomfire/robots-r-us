module Api
  class EmployeesController < ActionController::Base

    def index
      # IMPLEMENT ME
      @employees = Employee.all
      render json: @employees
    end

  end
end
