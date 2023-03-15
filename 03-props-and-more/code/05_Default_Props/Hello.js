class Hello extends React.Component {
  static defaultProps = {
    from: 'Anonymous',
    bangs: 1
  }
  render() {
    const {to, from, bangs} = this.props
    let bang = "!".repeat(bangs);
    return (
      <div>
        <p>Hi {to} from {from}{bang}</p>
      </div>
    );
  }
}
