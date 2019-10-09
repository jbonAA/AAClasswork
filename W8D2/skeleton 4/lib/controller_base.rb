require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response ||= false
  end

  # Set the response status code and header
  def redirect_to(url)
   
    res.location = url
    res.status = 302
    raise 'error' if already_built_response?
    @already_built_response = true

  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type = "text/html")
    res['Content-Type'] = content_type
    raise 'error' if @already_built_response == true
    res.write(content)
    @already_built_response = true
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    current_path = File.dirname(__FILE__)

    template_path = File.join(
      current_path,
      '..',
      'views',
      "#{self.class.to_s.split("Controller").join("_").downcase}_controller",
      "#{template_name}.html.erb"
    )

    content = File.read(template_path)
    erb = ERB.new(content)
    render_content(erb.result(binding))
  end

  # method exposing a `Session` object
  def session
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end

