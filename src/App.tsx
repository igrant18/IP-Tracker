import { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Map from './components/Map'
import { GeoAPIType } from './Types/GeoAPIType'

type AppProps = {
  searchValue: GeoAPIType
}

const mapStateToProps = (state: { searchValue: GeoAPIType }) => {
  return { 
    searchValue: state.searchValue,
  }
}

class App extends Component<AppProps> {
  render() {
    const { searchValue } = this.props;
    const position: [Number, Number] = [searchValue.location.lat, searchValue.location.lng]
    return (
      <div className="App">
        <Header />
        <Map position={position} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
