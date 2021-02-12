class Employee < ActiveRecord::Base
  scope :filter_by_first_name, -> (first_name) { where first_name: first_name }
  scope :filter_by_last_name, -> (last_name) { where last_name: last_name }
end
