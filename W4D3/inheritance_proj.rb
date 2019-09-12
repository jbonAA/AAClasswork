class Employee

  attr_accessor :salary

  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    momoney = @salary * multiplier
    @salary += momoney
  end

end

class Manager < Employee

  def initialize(employees, name, title, salary, boss)
    super(name, salary, title, boss)
    @employees = []
  end

  def bonus(multiplier)
    new_arr = []
    @employees.each do |worker|
      new_arr << worker.salary
    end
    return new_arr.sum * multiplier
  end


end

Ned = Employee.new("ned","Founder",1000000,nil)
Darren = Employee.new("Darren","Ta Manager",78000,Ned)