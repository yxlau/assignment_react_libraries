import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import DatePickerContainer from '../containers/DatePickerContainer'
import StocksContainer from '../containers/StocksContainer'
import TradeContainer from '../containers/TradeContainer'
import SuccessContainer from '../containers/SuccessContainer'
import TransactionsContainer from '../containers/TransactionsContainer'
import PortfolioContainer from '../containers/PortfolioContainer'
import NotFound from './NotFound'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import { Container, Col, Row } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Router>
      <ScrollToTop>
      <Container fluid>
      <Navbar title="Fideligard" />
      <Row>
      <Col md={4} className="hidden-sm-down">
      <StocksContainer />
      </Col>
      <Col md={8}>
      <DatePickerContainer />
      <hr />
      <Switch>
      <Route exact path="/trade/success" component={SuccessContainer} />
      <Route path="/transactions" component={TransactionsContainer} />
      <Route path="/portfolio" component={PortfolioContainer} />
      <Redirect exact from='/' to='/trade' />
      <Route exact path="/trade" component={TradeContainer} />
      <Route path="/" component={NotFound} />
    </Switch>
      </Col>
      </Row>
      </Container>
      </ScrollToTop>
     </Router>
    );
  }
}

export default App;
