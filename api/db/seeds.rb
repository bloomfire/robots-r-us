path = File.read(File.expand_path('../src/data.json', Rails.root))
seed_data = JSON.parse(path)
seed_data["data"].each do |robot|
  Employee.create(first_name: robot[1], last_name: robot[2], email: robot[3], title: robot[4], avatar: robot[5])
end