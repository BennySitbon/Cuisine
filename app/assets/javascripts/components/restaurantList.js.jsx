class RestaurantList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      restaurants: props.restaurants,
      filterNameContains: '',
      filterMaxDelivery: 200,
      filter10Bis: false,
      filterRating: 0
    }
  }
  componentDidMount() {
    this.setState({filterMaxDelivery: this.getMaxDelivery()});
  }
  handleNameFilterChanged(e) {
    this.setState({filterNameContains: e.target.value},this.filterRestaurants);
  }
  filterRestaurants() {
    var state = this.state;
    var newRestaurantList = this.props.restaurants.filter(function (restaurant){
      return (restaurant.name.toLowerCase().includes(state.filterNameContains.toLowerCase()))
        && (restaurant.max_delivery_time <= state.filterMaxDelivery)
        && (state.filter10Bis ? restaurant.accepts_10bis === state.filter10Bis : true)
        && (restaurant.rating >= state.filterRating);
    });
    this.setState({restaurants: newRestaurantList})
  }
  handleMaxDeliveryChange(e) {
    this.setState({filterMaxDelivery: e.target.value},this.filterRestaurants)
  }
  handle10BisChange() {
    this.setState({filter10Bis: !this.state.filter10Bis}, this.filterRestaurants)
  }
  handleRatingChange(e) {
    this.setState({filterRating: e.target.value}, this.filterRestaurants)
  }
  getMinDelivery() {
    return Math.min
      .apply(Math, this.props.restaurants.map(function (r) {return r.max_delivery_time}))
  }
  getMaxDelivery(){
    return Math.max
      .apply(Math, this.props.restaurants.map(function (r) {return r.max_delivery_time}))
  }
  render () {
    restaurantList = this.state.restaurants.map( function(restaurant){
      return (
        <Restaurant restaurant={restaurant} key={restaurant.id}/>
      );
    });
    return (
      <div>
        <div id="filter-row">
          <span>Filter Results:</span>
          <input type="text" placeholder="Filter by name"
                   onChange={this.handleNameFilterChanged.bind(this)} className="filter"/>
          <div className="filter">
            <label>Rating: {this.state.filterRating}+ stars</label>
            <input type="range" value={this.state.filterRating} min={0} max={3}
                   onChange={this.handleRatingChange.bind(this)}/>
          </div>
          <div className="filter">
            <label>Max delivery time: {this.state.filterMaxDelivery}</label>
            <input type="range" value={this.state.filterMaxDelivery} min={this.getMinDelivery()} max={this.getMaxDelivery()}
                   onChange={this.handleMaxDeliveryChange.bind(this)}/>
          </div>
          <div className="filter">
            <label>Only 10Bis?</label>
            <input type="checkbox" checked={this.state.filter10Bis} onChange={this.handle10BisChange.bind(this)}/>
          </div>
          <br />
        </div>
        <ul id="restaurant-list">
            {restaurantList}
        </ul>
        <div id="map">this is a placeholder for the map</div>
      </div>
    )
  }
}