
if Employee.count == 0
  path = File.join(File.dirname(__FILE__), "./seeds/data.json")
  records = JSON.parse(File.read(path))
  records["data"].each do |record|
    Employee.create!({first_name: record[1], last_name: record[2], email: record[3], title: record[4], avatar: record[5]})
  end
  puts "employees table has been seeded with data"
end