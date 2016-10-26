# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

addresses = Address.create([
                     {house_number:22, street:'Ibn Gvirol', city:'Tel Aviv'},
                     {house_number:15, street:'Diffingof', city:'Holon'}
                     ]);
cuisine_types = CuisineType.create([
                    {name:'American', font_letter:'a'},
                    {name:'Asian', font_letter:'g'},
                    {name:'Middle Eastern',font_letter:'@'}
                     ]);
restaurants = Restaurant.create([
                      {name: 'Vetrina', cuisine_type: cuisine_types.first, rating: 3,
                       accepts_10bis: false, max_delivery_time: 45,address: addresses.first
                      },
                      {name: 'Naffis', cuisine_type: cuisine_types[2], rating: 1,
                       accepts_10bis: true, max_delivery_time: 35, address: addresses[1]
                      }
                     ]);