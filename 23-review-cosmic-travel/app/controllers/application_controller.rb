class ApplicationController < ActionController::Base

    def about
        @s_count = Scientist.all.count
        @p_count = Planet.all.count
    end
end
