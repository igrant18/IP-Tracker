import { Component, Suspense } from 'react'
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
    let isError: boolean = false;
    let position: [Number, Number] = [0,0];
    if(searchValue.messages) { 
      isError = true 
    } else {
      position = [searchValue.location.lat, searchValue.location.lng]
    }
    return (
      <div className="App">
        <Header />
        <Suspense fallback={'ERROR IN SEARCH'}>
          <Map position={position} isError={isError} />
        </Suspense>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
