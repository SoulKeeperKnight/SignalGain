
import { connect } from 'react-redux'
import { AuthActionCreators } from './actions'

function mapStateToProps({Auth}) {
  return {
    Auth
  }
}

const mapDispatchToProps = AuthActionCreators

export function connectAuth(configMapStateToProps = mapStateToProps) {
  return connect(
    configMapStateToProps,
    mapDispatchToProps
  )
}