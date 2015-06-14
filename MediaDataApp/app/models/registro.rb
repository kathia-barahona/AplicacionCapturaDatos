class Registro < ActiveRecord::Base
  belongs_to :user
  self.inheritance_column = nil

	def self.to_csv(registros_attributes = ['media','channel','h_inicio','h_final','location'],user_attributes = ['email'] ,options = {})
		CSV.generate(options) do |csv|
			csv.add_row registros_attributes + user_attributes 
			all.each do |registros|
				values = registros.attributes.slice(*registros_attributes).values
				if registros.user
					values += registros.user.attributes.slice(*user_attributes).values
				end
				csv.add_row values
			end
		end
	end

end
