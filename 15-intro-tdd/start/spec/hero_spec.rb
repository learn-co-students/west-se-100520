require_relative '../config/environment.rb'

describe "Hero Class" do 

    # thor = Hero.new([ 
    #     {
    #         name: 'Super Strength',
    #         coolness: 3
    #     },
    #     {
    #         name:'Flight',
    #         coolness: 5
    #     },
    #     {
    #         name: 'Lighting Blast',
    #         coolness: 10
    #     }
    # ])
    
    let(:thor) do
        Hero.new([ 
        {
            name: 'Super Strength',
            coolness: 3
        },
        {
            name:'Flight',
            coolness: 5
        },
        {
            name: 'Lighting Blast',
            coolness: 10
        }
    ])
    end

    it 'should return the heros coolest ability' do
        expect(thor.coolest_ability).to (eq({
            name: 'Lighting Blast',
            coolness: 10
        }))
    end
    # test = expect(thor.coolest_ability)
    # hypothesis = eq({
    #     name: 'Lighting Blast',
    #     coolness: 10
    # })
    # test.to(hypothesis)

    it 'should be able to add_ability to .abilities' do
        thor.add_ability({
            name: "Laser Eyes",
            coolness: 11
            })
            expect(thor.abilities).to (include({
                name: "Laser Eyes",
                coolness: 11
        }))
    end

    # Sad path
    it 'should not add malformed input' do
        thor.add_ability(2)
        expect(thor.abilities).not_to include(2)
    end

    # it 'testing let' do
    #     binding.pry
    # end

end