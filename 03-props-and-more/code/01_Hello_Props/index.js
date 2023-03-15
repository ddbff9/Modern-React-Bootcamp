class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={4}
          img="https://media1.giphy.com/media/oykGc7v3lFwouFHKx6/giphy.gif?cid=ecf05e4731q9zzit6da2ahs3t1w7e67uuvwza1ok33lp3oon&rid=giphy.gif&ct=g"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
