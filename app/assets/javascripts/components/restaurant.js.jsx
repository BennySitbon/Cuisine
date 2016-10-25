class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: props.restaurant
    }
  }
  //I don't like doing it like this, but this is a quick solution for the problem
  //In a future iteration I will abstract cuisine as its own object that will
  //be composed inside the restaurant object
  TransformCuisineToFontLetter(cuisine) {
    if(cuisine === 0){
      return 'a';
    } else if(cuisine === 1){
      return 'g';
    } else if(cuisine === 2){
      return '@';
    }
  }
  CreateStarString() {
    var stars = "";
    for (var i=0; i<this.state.restaurant.rating ; i++) {
      stars += "⭐";//This string may seem empty in some encodings. It has a star symbol.
    }
    return stars;
  }
  render() {
    return (
      <table className="restaurant">
        <tbody>
        <tr>
          <th rowSpan="4" className="cuisine-font">{this.TransformCuisineToFontLetter(this.state.restaurant.cuisine)}</th>
        </tr>
        <tr>
          <td className="restaurant-title">{this.state.restaurant.name}  {this.state.restaurant.accepts_10bis &&
                <img src="assets/10bis_icon.png"/>}
          </td>
        </tr>
        <tr>
          <td colSpan="2" className="restaurant-rating">Rating:{this.CreateStarString()}</td>
        </tr>
        <tr>
          <td colSpan="2">Max delivery: {this.state.restaurant.max_delivery_time} Minutes</td>
        </tr>
        </tbody>
      </table>
    )
  }
}