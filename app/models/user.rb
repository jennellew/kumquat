class User < ActiveRecord::Base
  attr_accessor :password
  attr_writer :current_step
  
  before_save :encrypt_password
  after_save :clear_password
  
#   validates :username, :presence => true, :uniqueness => true, :length => { :in => 3..20 }
#   validates :email, :presence => true, :uniqueness => true #Sstill needs regex checking
#   validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
#   validates_length_of :password, :in => 6..20, :on => :create
  validate :select_three_images
  
  def select_three_images
    if image_selection.size != 4
      errors.add(:image_selection, "You must select three images")
    else
      image_selection.delete("")
    end
  end
  
  def steps
    %w[registration image_selection image1 image2 image3]
  end
  
  def current_step
    @current_step || steps.first
  end
  
  def next_step
    self.current_step = steps[steps.index(current_step)+1]
  end
  
  def prev_step
    self.current_step = steps[steps.index(current_step)-1]
  end
  
  def encrypt_password
    unless password.blank?
      self.salt = BCrypt::Engine.generate_salt
      self.encrypted_password = BCrypt::Engine.hash_secret(password, salt)
    end
  end

  def clear_password
    self.password = nil
  end
end
