class AppointmentsController < ApplicationController

    def new
        @appointment = Appointment.new
    end

    def create
        @appointment = Appointment.new(appointment_params)
        if @appointment.save
            redirect_to doctor_path(@appointment.doctor)
        else
            render :new
        end
    end

    private

    def appointment_params
        params.require(:appointment).permit(:time, :doctor_id, :patient_id)
    end
end
