class RestaurantList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      restaurants: props.restaurants
    }
  }
  render (){
    restaurantList = this.state.restaurants.map( function(restaurant){
      return (
        <Restaurant restaurant={restaurant} key={restaurant.id}/>
      );
    });
    return (
      <ul>
          {restaurantList}
      </ul>
    )

  }
}