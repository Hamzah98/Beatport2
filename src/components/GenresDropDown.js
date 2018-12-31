import React from "react";
import Link from "./Link";
import "../styles/GenresDropDown.css";

class GenresDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLinks: false };
  }

  showLinks = () => this.setState({ showLinks: true });
  hideLinks = () => this.setState({ showLinks: false });
  render() {
    const genres = this.props.genres;
    const links = genres.map(genre => (
      <Link key={genre} name={genre} href={`# ${genre}`} />
    ));

    return (
      <div
        className="genres"
        onMouseEnter={this.showLinks}
        onMouseLeave={this.hideLinks}
      >
        <p>GENRES ▼</p>
        {this.state.showLinks ? links : null}
      </div>
    );
  }
}

export default GenresDropDown;
