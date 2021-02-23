module Api
  class EmployeesController < ActionController::Base

    def index
      render json: JSON.parse(File.read(File.expand_path('../src/data.json', Rails.root)))
    end
  end
end
