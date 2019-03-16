import React, {Component} from 'react'

class ChuckNorris extends Component{

  componentDidMount(){
    console.log(this.props.match.params.id)
    let id = this.props.match.params.id
  }
  render(){
    return(
      <div className="container">
      <h4>route params</h4>
      </div>
    )
  }
}
export default ChuckNorris