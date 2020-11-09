module VisitHelper
    def visits_header(state)
        if state
            "Visits to #{state.name }"
        else
            "All Visits"
        end
    end

end