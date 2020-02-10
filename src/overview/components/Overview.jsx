import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import SidebarContainer, {
    selectors as sidebarSelectors,
} from 'src/sidebar-overlay/sidebar'
import { OVERVIEW_URL } from 'src/constants'
import Onboarding from '../onboarding'
import { DeleteConfirmModal } from '../delete-confirm-modal'
import {
    SidebarContainer as SidebarLeft,
    CollectionsContainer as CollectionsButton,
} from '../sidebar-left'
import { HelpBtn } from '../help-btn'
import { Header, acts as searchBarActs } from '../search-bar'
import { Results, acts as resultActs } from '../results'
import Head from '../../options/containers/Head'
import DragElement from './DragElement'
import { Tooltip } from '../tooltips'
import { isDuringInstall } from '../onboarding/utils'
import AnnotationsManager from 'src/annotations/annotations-manager'
import { goToAnnotation } from 'src/sidebar-overlay/sidebar/utils'

class Overview extends PureComponent {
    static propTypes = {
        pageUrl: propTypes.string,
        init: propTypes.func.isRequired,
        setShowOnboardingMessage: propTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.init()
    }

    _annotationsManager = new AnnotationsManager()

    handleOnboardingComplete = () => {
        window.location.href = OVERVIEW_URL
        this.props.setShowOnboardingMessage()
        localStorage.setItem('stage.Onboarding', 'true')
    }

    renderOnboarding() {
        return (
            <div>
                <Onboarding navToOverview={this.handleOnboardingComplete} />
                <HelpBtn />
            </div>
        )
    }

    renderOverview() {
        return (
            <div>
                <Head />
                <CollectionsButton />
                <Header />
                <SidebarLeft />
                <Results />
                <DeleteConfirmModal message="Delete page and related notes" />
                <DragElement />
                <SidebarContainer
                    env="overview"
                    annotationsManager={this._annotationsManager}
                    goToAnnotation={goToAnnotation(this.props.pageUrl)}
                />
                <Tooltip />
            </div>
        )
    }

    render() {
        if (isDuringInstall()) {
            return this.renderOnboarding()
        }

        return this.renderOverview()
    }
}

const mapStateToProps = state => ({
    pageUrl: sidebarSelectors.pageUrl(state),
})

const mapDispatchToProps = dispatch => ({
    init: () => dispatch(searchBarActs.init()),
    setShowOnboardingMessage: () =>
        dispatch(resultActs.setShowOnboardingMessage(true)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
