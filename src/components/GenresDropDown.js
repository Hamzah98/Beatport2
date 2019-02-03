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
      <Link key={genre} name={genre} href={`#${genre}`} />
    ));

    return (
      <div className="genres-dropdown-container" onMouseEnter={this.showLinks}>
        <p>GENRES ▼</p>
        {this.state.showLinks ? (
          <div
            className="genre-links-container"
            onMouseEnter={this.showLinks}
            onMouseLeave={this.hideLinks}
          >
            {links}
          </div>
        ) : null}
      </div>
    );
  }
}

export default GenresDropDown;
