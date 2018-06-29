import { connect } from 'react-redux'
import { appActionCreators } from './actions'

function mapStateToProps({app}) {
  return {
    app
  }
}

const mapDispatchToProps = appActionCreators

export function connectApp(configMapStateToProps = mapStateToProps) {
  return connect(
    configMapStateToProps,
    mapDispatchToProps
  )
}