require 'minitest/autorun'
require 'liquid'

module TestFilters
  def money(input)
    "$#{input}"
  end
  def image_url(input, **args)
    input['src'] || input
  end
end
Liquid::Template.register_filter(TestFilters)

class FrequentlyBoughtTogetherTest < Minitest::Test
  def test_render
    content = File.read('sections/frequently-bought-together.liquid').split('{% schema %}').first
    template = Liquid::Template.parse(content)
    ctx = {
      'section' => { 'settings' => { 'product_1' => 'a', 'product_2' => 'b' } },
      'all_products' => {
        'a' => { 'title' => 'Product A', 'price' => 1000, 'url' => '/a', 'featured_image' => { 'src' => 'a.jpg' } },
        'b' => { 'title' => 'Product B', 'price' => 2000, 'url' => '/b', 'featured_image' => { 'src' => 'b.jpg' } }
      }
    }
    output = template.render(ctx)
    assert_includes output, 'Product A'
    assert_includes output, 'Product B'
    assert_includes output, '$3000'
  end
end
