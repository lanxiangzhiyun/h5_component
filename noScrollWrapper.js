import React from 'react'

function noScrollWithComp (WrappedComp) {
  return class WrapperComp extends React.Component {
    constructor() {
      super(...arguments)
      this.state = {}
      this.unScorll = (e) => {
        e.stopPropagation()
        e.preventDefault()
      }
    }

    componentDidMount() {
      document.body.addEventListener('touchmove', this.unScorll, { passive: false })
    }

    componentWillUnmount() {
      document.body.removeEventListener('touchmove', this.unScorll, { passive: false })
    }

    render() {
      return <WrappedComp {...this.props} />
    }
  }
}

export default noScrollWithComp
