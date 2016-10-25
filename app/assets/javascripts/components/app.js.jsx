class App extends React.Component {
  render () {
    return (
      <div>
        <section id="header">
          <img alt="icon" src="/assets/top.png"/>
          <h1>EatWell.<br/>Let's find lunch<br/>now...</h1>
          <button type="submit">
            <img src="/assets/plus_button.png" alt="submit"/>
          </button>
        </section>
        <section id="restaurants">
          <RestaurantList restaurants={this.props.restaurants}></RestaurantList>
        </section>
      </div>
    )
  }
}