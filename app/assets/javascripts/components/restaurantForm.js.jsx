class RestaurantForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      rating: props.restaurant.rating || 2,
      maxDelivery: props.restaurant.max_delivery_time || 45
    };
  }
  HandleRatingChange(e){
    this.setState({rating: e.target.value})
  }
  HandleMaxDeliveryChange(e){
    this.setState({maxDelivery: e.target.value})
  }
  render(){
    return (
      <form method="POST" action="/restaurants/">
        <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
        <fieldset>
          <legend>Restaurant information:</legend>
          <label>Name:
            <input id="control-restaurant-name" type="text"
                   name="restaurant[name]" defaultValue={this.props.restaurant.name || ""}/>
          </label>
          <label>Cuisine:
            <select name="restaurant[cuisine_type_id]" defaultValue={this.props.restaurant.cuisine_type.id}>
              {
                this.props.cuisine_types.map(function (cuisine){
                  return <option key={cuisine.id} value={cuisine.id}>{cuisine.name}</option>
                })
              }
            </select>
          </label>
          <label>Rating:
            <input name="restaurant[rating]" type="range" min={0} max={3}
                   defaultValue={this.props.restaurant.rating || 2}
                     onChange={this.HandleRatingChange.bind(this)}/>
            {this.state.rating} stars
          </label>
          <label>Accepts 10Bis?
            <input type="checkbox" name="restaurant[accepts_10bis]"
                   value={this.props.restaurant.accepts_10bis || true}/>
          </label>
          <label>Max delivery time:
            <input type="range" min={0} max={120} name="restaurant[max_delivery_time]"
                   defaultValue={this.props.restaurant.max_delivery_time || 45}
                   onChange={this.HandleMaxDeliveryChange.bind(this)}/>
            {this.state.maxDelivery} minutes
          </label>
        </fieldset>
        <fieldset className="addressFields">
          <legend>Address:</legend>
          <label>House Number:
            <input type="text" name="restaurant[address[house_number]]"
                   defaultValue={this.props.restaurant.address.house_number || ""}/>
          </label>
          <label>Street:
            <input type="text" name="restaurant[address[street]]"
                   defaultValue={this.props.restaurant.address.street || ""}/>
          </label>
          <label>City:
            <input type="text" name="restaurant[address[city]]"
                   defaultValue={this.props.restaurant.address.city || ""}/>
          </label>
        </fieldset>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}