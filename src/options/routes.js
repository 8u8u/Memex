import ImportContainer from './imports'
import SettingsContainer from './containers/settings'
import BackupSettingsContainer from './backup'
import Privacy from './privacy'
import Tutorial from './tutorial'
import Statistics from './statistics'
import Settings from './settings'
import Overview from '../overview'

export default [
    {
        name: 'Usage Statistics',
        pathname: '/statistics',
        component: Statistics,
        hideFromSidebar: true,
    },
    {
        name: 'Go back to Search',
        pathname: '/overview',
        component: Overview,
        icon: 'search',
        useOwnLayout: true,
    },
    {
        name: 'Settings',
        pathname: '/settings',
        component: Settings,
        icon: 'settings',
    },
    {
        name: 'Import',
        pathname: '/import',
        component: ImportContainer,
        icon: 'file_download',
    },
    {
        name: 'Backup & Restore',
        pathname: '/backup',
        component: BackupSettingsContainer,
        icon: 'backup',
    },
    {
        name: 'Blacklist',
        pathname: '/blacklist',
        component: SettingsContainer,
        icon: 'block',
    },
    {
        name: 'Privacy',
        pathname: '/privacy',
        component: Privacy,
        icon: 'security',
    },
    {
        name: 'Memex Team',
        pathname: 'https://worldbrain.io/team',
        icon: 'people',
        isExternal: true,
    },
    {
        name: 'Help',
        pathname: 'https://worldbrain.io/help',
        icon: 'help',
        isExternal: true,
    },
    {
        name: 'Tutorial',
        pathname: '/tutorial',
        component: Tutorial,
        icon: 'info',
    },
]
