import React, { Component } from 'react'
import { GearFill } from 'react-bootstrap-icons';
import { CardSimple } from '../components/Cards.jsx';
import Loader from '../components/Loader.jsx';
import Topbar from '../components/Topbar.jsx';

export default class OptionsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure
    }

  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: true })
    }, 5000);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="view options-view">
          <Topbar brand="Options" ico={<GearFill />} />
          <div className="container-fluid mt">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <CardSimple>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore modi corrupti cum eum laborum eaque magnam ex, est, architecto voluptatibus dolorum enim eveniet et, nostrum ipsum ad culpa voluptatem nihil.
                </CardSimple>
              </div>
              <div className="col-md-6 col-sm-12">
                <CardSimple>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore modi corrupti cum eum laborum eaque magnam ex, est, architecto voluptatibus dolorum enim eveniet et, nostrum ipsum ad culpa voluptatem nihil.
                </CardSimple>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 col-md-6 col-sm-12">
                <CardSimple>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore modi corrupti cum eum laborum eaque magnam ex, est, architecto voluptatibus dolorum enim eveniet et, nostrum ipsum ad culpa voluptatem nihil.
                </CardSimple>
              </div>
              <div className="col-xl-7 col-md-6 col-sm-12">
                <CardSimple>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore modi corrupti cum eum laborum eaque magnam ex, est, architecto voluptatibus dolorum enim eveniet et, nostrum ipsum ad culpa voluptatem nihil.
                </CardSimple>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6 col-sm-12">
                <CardSimple>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore modi corrupti cum eum laborum eaque magnam ex, est, architecto voluptatibus dolorum enim eveniet et, nostrum ipsum ad culpa voluptatem nihil.
                </CardSimple>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <CardSimple>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore modi corrupti cum eum laborum eaque magnam ex, est, architecto voluptatibus dolorum enim eveniet et, nostrum ipsum ad culpa voluptatem nihil.
                </CardSimple>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <CardSimple>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore modi corrupti cum eum laborum eaque magnam ex, est, architecto voluptatibus dolorum enim eveniet et, nostrum ipsum ad culpa voluptatem nihil.
                </CardSimple>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div className="view loader-view">
        <Loader />
      </div>
    }
  }
}
