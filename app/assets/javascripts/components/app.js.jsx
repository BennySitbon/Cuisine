class App extends React.Component {
  render () {
    return (
      <div>
        <section id="header">
          <img alt="icon" src={this.props.icon_url_top} title="You know what time it is... Let's eat"/>
          <div id="top-pic-text"><h1>EatWell.</h1><h2>Let's find lunch</h2><h3>now...</h3></div>
          <a id="new-restaurant-nav" href="/restaurants/new">
            <img src={this.props.icon_url_plus_button} alt="submit"/>
          </a>
        </section>
        <section id="restaurants">
          <RestaurantList restaurants={this.props.restaurants} icon_url_10bis={this.props.icon_url_10bis}></RestaurantList>
        </section>
      </div>
    )
  }
}