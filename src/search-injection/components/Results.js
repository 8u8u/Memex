import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { OutLink } from '../../common-ui/containers'
import Dropdown from './Dropdown'
import styles from './Results.css'

const Results = props => {
    const logoURL = browser.extension.getURL('img/worldbrain-logo-wo-beta.png')
    const shortcut = browser.extension.getURL('img/shortcut.svg')
    const voteIcon = browser.extension.getURL('img/vote_white.svg')
    const searchEngineClass = `${props.searchEngine}_${props.position}`
    return (
        <div
            className={classNames(
                styles.MEMEX_CONTAINER,
                styles[searchEngineClass],
            )}
        >
            <div className={styles.header}>
                <p className={styles.resultsText}>
                    <span className={styles.resultLength}>
                        {props.totalCount} results
                    </span>{' '}
                    in your
                    <img src={logoURL} className={styles.logo} />
                </p>
                <div className={styles.linksContainer}>
                    <a className={styles.links} onClick={props.seeMoreResults}>
                        See all results
                    </a>
                    <a
                        className={styles.links}
                        onClick={props.toggleHideResults}
                    >
                        {props.hideResults ? 'Maximize' : 'Minimize'}
                    </a>
                </div>
                <button
                    className={styles.settingsButton}
                    onClick={props.toggleDropdown}
                />
                {props.dropdown ? (
                    <Dropdown
                        remove={props.removeResults}
                        rerender={props.changePosition}
                        closeDropdown={props.closeDropdown}
                    />
                ) : (
                    ''
                )}
            </div>
            {props.renderNotification}
            <div className={styles.proTip}>
                <span className={styles.emoji}>🤓</span>
                <span>
                    <b>Pro Tip: </b>
                    Search by typing
                </span>
                <img className={styles.shortcut} src={shortcut} />
                <span>into the address bar</span>
            </div>
            <div className={styles.resultsBox}>
                {// Render only if hideResults is false
                props.hideResults ? '' : props.renderResultItems()}
            </div>
            <OutLink
                className={styles.upgradeButton}
                to="https://worldbrain.io/vote_feature"
            >
                <div>
                    <img className={styles.voteIcon} src={voteIcon} />
                    Vote for Next Features
                </div>
            </OutLink>
        </div>
    )
}

Results.propTypes = {
    position: PropTypes.string.isRequired,
    searchEngine: PropTypes.string.isRequired,
    totalCount: PropTypes.number.isRequired,
    seeMoreResults: PropTypes.func.isRequired,
    toggleHideResults: PropTypes.func.isRequired,
    hideResults: PropTypes.bool.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    closeDropdown: PropTypes.func.isRequired,
    dropdown: PropTypes.bool.isRequired,
    removeResults: PropTypes.func.isRequired,
    changePosition: PropTypes.func.isRequired,
    renderResultItems: PropTypes.func.isRequired,
    renderNotification: PropTypes.node,
}

export default Results
