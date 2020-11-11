require "application_system_test_case"

class TigersTest < ApplicationSystemTestCase
  setup do
    @tiger = tigers(:one)
  end

  test "visiting the index" do
    visit tigers_url
    assert_selector "h1", text: "Tigers"
  end

  test "creating a Tiger" do
    visit tigers_url
    click_on "New Tiger"

    fill_in "Color", with: @tiger.color
    fill_in "Name", with: @tiger.name
    click_on "Create Tiger"

    assert_text "Tiger was successfully created"
    click_on "Back"
  end

  test "updating a Tiger" do
    visit tigers_url
    click_on "Edit", match: :first

    fill_in "Color", with: @tiger.color
    fill_in "Name", with: @tiger.name
    click_on "Update Tiger"

    assert_text "Tiger was successfully updated"
    click_on "Back"
  end

  test "destroying a Tiger" do
    visit tigers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Tiger was successfully destroyed"
  end
end
