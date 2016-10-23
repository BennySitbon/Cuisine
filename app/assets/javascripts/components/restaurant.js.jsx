class Restaurant extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      restaurant: props.restaurant
    }
  }
  render(){
    return (
      <table className="restaurant">
        <tbody>
        <tr>
          <th rowSpan="4">{this.state.restaurant.cuisine}</th>
        </tr>
        <tr>
          <td className="restaurant-title">{this.state.restaurant.name}</td>
          <td>{ this.state.restaurant.accepts_10bis.toString() }</td>
        </tr>
        <tr>
          <td colSpan="2" className="restaurant-rating">Rating:{this.state.restaurant.rating}</td>
        </tr>
        <tr>
          <td colSpan="2">Max delivery: {this.state.restaurant.max_delivery_time} Minutes</td>
        </tr>
        </tbody>
      </table>
    )
  }
}