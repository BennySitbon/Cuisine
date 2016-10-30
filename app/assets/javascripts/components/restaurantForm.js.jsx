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
      <div id="restaurant-form">
        <ErrorsFlash errors={this.props.errors}/>
        <h2>Submit Restaurant</h2>
        <form method="POST" action="/restaurants/">
          <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
          <fieldset>
            <legend>Restaurant information:</legend>
            <label className="form-label">Restaurant Name
              <input className="form-control" id="control-restaurant-name" type="text"
                     name="restaurant[name]" placeholder="Enter name..."
                     defaultValue={this.props.restaurant.name || ""}/>
            </label>
            <label className="form-label">Cuisine Type
              <select className="form-control" name="restaurant[cuisine_type_id]" defaultValue={this.props.restaurant.cuisine_type.id}>
                {
                  this.props.cuisine_types.map(function (cuisine){
                    return <option key={cuisine.id} value={cuisine.id}>{cuisine.name}</option>
                  })
                }
              </select>
            </label>
            <label className="form-label">Rating
              <div className="form-control">
                <input name="restaurant[rating]" type="range" min={0} max={3}
                       defaultValue={this.props.restaurant.rating || 2}
                         onChange={this.HandleRatingChange.bind(this)}/>
                <span className="control-info">{Restaurant.CreateStarString(this.state.rating)}</span>
              </div>
            </label>

            <label className="form-label">Max Delivery Time
              <div className="form-control">
                <input type="range" min={0} max={120} name="restaurant[max_delivery_time]"
                       defaultValue={this.props.restaurant.max_delivery_time || 45}
                       onChange={this.HandleMaxDeliveryChange.bind(this)}/>
                <span className="control-info">{this.state.maxDelivery} minutes</span>
              </div>
            </label>
            <label className="form-label">
              <input type="checkbox" name="restaurant[accepts_10bis]"
                     value={this.props.restaurant.accepts_10bis || true}/>
              Accepts 10Bis
            </label>
          </fieldset>
          <fieldset className="addressFields">
            <legend>Address:</legend>
            <label className="address-field">House Number
              <input className="form-control" type="text" placeholder="Enter house number..."
                     name="restaurant[address[house_number]]"
                     defaultValue={this.props.restaurant.address.house_number || ""}/>
            </label>
            <label className="address-field">Street
              <input className="form-control" type="text" placeholder="Enter street..."
                     name="restaurant[address[street]]"
                     defaultValue={this.props.restaurant.address.street || ""}/>
            </label>
            <label className="address-field">City
              <input className="form-control" type="text" placeholder="Enter city..."
                     name="restaurant[address[city]]"
                     defaultValue={this.props.restaurant.address.city || ""}/>
            </label>
          </fieldset>
          <input className="submit-button" type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}