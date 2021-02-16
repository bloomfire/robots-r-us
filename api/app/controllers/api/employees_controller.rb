module Api
  class EmployeesController < ActionController::Base

    EmployeeReducer = Rack::Reducer.new(
      Employee.all,
      ->(first_name:) { where('lower(first_name) like ?', "%#{first_name.downcase}%") },
      ->(last_name:) { where('lower(last_name) like ?', "%#{last_name.downcase}%") },
      ->(email:) { where(email: email) },
      ->(title:) { where('lower(title) like ?', "%#{title.downcase}%") }
    )
    def index
      @employees = EmployeeReducer.apply(params)
      formattedColumns = []
      columnNames = Employee.column_names

      # call rake db:seed in terminal to add data to DB. 

      # Although this loop is verbose, this ensures that the database table actually has the specific columns.
      # So the frontend does not try to use the column keys that dont exist in the formattedData.   
      for column in columnNames
        if column == 'id'
          formattedColumns.push( {Header: "ID", accessor: column })
        end
        if column == 'first_name'
          formattedColumns.push({ Header: "First Name", accessor: column })
        end
        if column == 'last_name'
          formattedColumns.push({ Header: "Last Name", accessor: column })
        end
        if column == 'email'
          formattedColumns.push({ Header: "Email Address", accessor: column })
        end
        if column == 'title'
          formattedColumns.push({ Header: "Job Title", accessor: column })
        end
        if column == 'avatar'
          formattedColumns.push({ Header: "Profile Picture", accessor: column })
        end
      end

      render json: {status: 'SUCCESS', data: {formattedData: @employees, formattedColumns: formattedColumns}}, status: :ok
    end

  end
end
