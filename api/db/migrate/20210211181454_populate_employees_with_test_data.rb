class PopulateEmployeesWithTestData < ActiveRecord::Migration[6.1]
  def up
    path = Rails.root.join('../', 'src', 'data.json')
    file = File.read(path)
    data_hash = JSON.parse(file)
    data_hash['data'].each do |item|
      Employee.create!(first_name: item[1],
                      last_name: item[2],
                      email: item[3],
                      title: item[4],
                      avatar: item[5]
                     )
    end
  end

  def down
    Employee.delete_all
  end
end
