import Header from './components/Header'
import Card from './components/List-Card'
import { Fragment } from 'react'
import './Globals.css'
import Overview from './components/Overview'

function App() {
  return (
    <Fragment>
      <Header>
        <h1>😁</h1>
      </Header>
      <Card></Card>
      <Overview></Overview>
    </Fragment>
  );
}

export default App;
