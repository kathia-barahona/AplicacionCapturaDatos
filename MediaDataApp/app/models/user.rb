class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
<<<<<<< HEAD
 require 'carrierwave/orm/activerecord'
  has_many :registros
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  mount_uploader :picture, PictureUploader
end
=======

  has_many :registros
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_attached_file :picture, styles: { medium: "300x300>", thumb:"100x100>" }
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/
end
>>>>>>> origin/master
