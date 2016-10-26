class App extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <RestaurantList restaurants={this.props.restaurants}></RestaurantList>
        </ul>
      </div>
    )
  }
}