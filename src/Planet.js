import React from "react";
import axios from "axios";

// State = { planet, currentId, loading }

export class Planet extends React.Component {
  state = {
    planet: null,
    currentId: 1,
    loading: false
  };

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id) {
      return { currentId: props.id, loading: true };
    } else {
      return null;
    }
  }

  loadPlanet = id => {
    axios("https://swapi.co/api/planets/" + id).then(res =>
      this.setState({
        loading: false,
        planet: {
          ...res.data,
          id
        }
      })
    );
  };

  componentDidUpdate() {
    const { planet, currentId } = this.state;
    const planetId = planet && planet.id;
    if (planetId !== currentId) {
      this.loadPlanet(currentId);
    }
  }

  componentDidMount() {
    const { planet, currentId } = this.state;
    const planetId = planet && planet.id;
    if (planetId !== currentId) {
      this.loadPlanet(currentId);
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.loading ? "Loading..." : "Ready"}</p>
        <div>
          Planet: <pre>{JSON.stringify(this.state.planet, null, 2)}</pre>
        </div>
      </div>
    );
  }
}
