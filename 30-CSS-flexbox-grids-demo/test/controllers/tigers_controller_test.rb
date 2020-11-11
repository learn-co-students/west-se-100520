require 'test_helper'

class TigersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tiger = tigers(:one)
  end

  test "should get index" do
    get tigers_url
    assert_response :success
  end

  test "should get new" do
    get new_tiger_url
    assert_response :success
  end

  test "should create tiger" do
    assert_difference('Tiger.count') do
      post tigers_url, params: { tiger: { color: @tiger.color, name: @tiger.name } }
    end

    assert_redirected_to tiger_url(Tiger.last)
  end

  test "should show tiger" do
    get tiger_url(@tiger)
    assert_response :success
  end

  test "should get edit" do
    get edit_tiger_url(@tiger)
    assert_response :success
  end

  test "should update tiger" do
    patch tiger_url(@tiger), params: { tiger: { color: @tiger.color, name: @tiger.name } }
    assert_redirected_to tiger_url(@tiger)
  end

  test "should destroy tiger" do
    assert_difference('Tiger.count', -1) do
      delete tiger_url(@tiger)
    end

    assert_redirected_to tigers_url
  end
end
