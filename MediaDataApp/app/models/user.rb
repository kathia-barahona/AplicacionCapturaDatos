class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  has_many :registros
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
 has_attached_file :picture, styles: { medium: "300x300>", thumb:"225x225>" },
  :default_url => ":style/defaultprof.jpg"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/


end
