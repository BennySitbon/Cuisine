class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: props.restaurant
    }
  }
  static CreateStarString(rating) {
    var stars = "";
    for (var i=0; i<rating ; i++) {
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
                <img src={this.props.icon_url_10bis}/>}
          </td>
        </tr>
        <tr>
          <td colSpan="2" className="restaurant-rating">
            Rating:{Restaurant.CreateStarString(this.state.restaurant.rating)}</td>
        </tr>
        <tr>
          <td colSpan="2">Max delivery: {this.state.restaurant.max_delivery_time} Minutes</td>
        </tr>
        </tbody>
      </table>
    )
  }
}