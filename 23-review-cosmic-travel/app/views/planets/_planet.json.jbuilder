json.extract! planet, :id, :name, :distance_from_earth, :nearest_star, :created_at, :updated_at
json.url planet_url(planet, format: :json)
