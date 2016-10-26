class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: props.restaurant
    }
  }
  CreateStarString() {
    var stars = "";
    for (var i=0; i<this.state.restaurant.rating ; i++) {
      stars += "\u2b50";
    }
    return stars;
  }
  render() {
    return (
      <table className="restaurant">
        <tbody>
        <tr>
          <th rowSpan="4" className="cuisine-font">{this.state.restaurant.cuisine_type.font_letter}</th>
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