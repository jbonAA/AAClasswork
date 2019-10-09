require 'rack'
require 'byebug'

rack_app = Proc.new do |env|
    rack_req = Rack::Request.new(env)
    rack_res = Rack::Response.new
    rack_res['Content-Type'] = 'text/html'
    rack_res.write(rack_req.path)
    rack_res.finish
end

Rack::Server.start(
    app: rack_app,
    Port: 3000
)