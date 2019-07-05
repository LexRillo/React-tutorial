var Product = React.createClass({
  getInitialState: function(){
    return {qty: 0};
  },
  
  buy: function(){
    this.setState({qty: this.state.qty + 1})
  },
  
  render: function(){
    return(
      <div>
        <p>Android - $199</p>
        <button onClick={this.buy}>Buy</button>
        <h3>Qty: {this.state.qty}</h3>
      </div>
    );
  }
});

React.render(<Product/>, document.getElementById("root"));