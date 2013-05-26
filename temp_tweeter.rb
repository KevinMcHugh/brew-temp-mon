require 'twitter'
require 'pp'

contents = File.read(ENV['THERMOMETER'])
temp_reading = contents.split('t=')[1]
begin
	Twitter.update "#{temp_reading} taken at #{Time.now}" 
rescue Twitter::Error::Unauthorized => e
	puts "couldn't auth!"
	pp e.backtrace
end
