import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ErrorBoundary, RuntimeError } from 'src/common-ui/components'

import configureStore from './store'
import Router from './router'
import routes from './routes'
import { ModalsContainer } from '../overview/modals/components/ModalsContainer'

// Include development tools if we are not building for production
const ReduxDevTools =
    process.env.NODE_ENV !== 'production'
        ? require('src/dev/redux-devtools-component').default
        : undefined

const store = configureStore({ ReduxDevTools })

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary component={RuntimeError}>
            <Router routes={routes} />
            {ReduxDevTools && <ReduxDevTools />}
            <ModalsContainer />
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app'),
)
