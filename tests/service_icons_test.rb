require 'minitest/autorun'
require 'liquid'

class ServiceIconsTest < Minitest::Test
  def test_render
    template = Liquid::Template.parse(File.read('snippets/service-icons.liquid'))
    output = template.render
    assert_includes output, 'product-services'
  end
end
