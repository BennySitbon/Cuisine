class ErrorsFlash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var errors = this.props.errors;
    return (
      <div>
        <ul className="error-list">
          {Object.keys(this.props.errors).length > 0 ?
            Object.keys(this.props.errors).map(function (key) {
            return <li className="error-item" key={key}>{key} - {errors[key]}</li>
            }) : null
          }
        </ul>
      </div>
    )
  }
}
