import paths from '../../../routes/paths'

const sidebarOptions = [
    {
        id: 1,
        icon: 'images/sidebar/home.png',
        title: "Home",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    },
    {
        id: 2,
        icon: 'images/sidebar/ChatText.png',
        title: "Pie",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true

    },
    {
        id: 3,
        icon: 'images/sidebar/Vector.png',
        title: "Portfolio",
        subheadings: [
            { link: paths.properties, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: false
    },
    {
        id: 4,
        icon: 'images/sidebar/contacts.png',
        title: "Contacts",
        subheadings: [
            { link: paths.units, name: "All Contacts" },
            { link: paths.units, name: "Owner" },
            { link: paths.tenants, name: "Tenant" },
            { link: paths.units, name: "Vendor" },
            { link: paths.units, name: "Agent" }

        ],
        disabled: true

    },
    {
        id: 5,
        icon: 'images/sidebar/files.png',
        title: "Leasing",
        subheadings: [
            { link: paths.all, name: "All lease" },
            { link: paths.draft, name: "Draft" },
            { link: paths.units, name: "Active" },
            { link: paths.units, name: "Completed" }
        ],
        
        disabled: true
    },
    {
        id: 6,
        icon: 'images/sidebar/facility-management 1.png',
        title: "Facility",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true

    },
    {
        id: 7,
        icon: 'images/sidebar/bank.png',
        title: "Bank",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    },
    {
        id: 8,
        icon: 'images/sidebar/shop.png',
        title: "Shop",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    },
    {
        id: 9,
        icon: 'images/sidebar/graph.png',
        title: "Graph",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    },
    {
        id: 10,
        icon: 'images/sidebar/report.png',
        title: "Report",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    },
    {
        id: 11,
        icon: 'images/sidebar/ChatText.png',
        title: "Ch",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    },
    {
        id: 12,
        icon: 'images/sidebar/ChatText.png',
        title: "Chat",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    },
    {
        id: 13,
        icon: 'images/sidebar/note.png',
        title: "Note",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    },
    {
        id: 14,
        icon: 'images/sidebar/search.png',
        title: "Search",
        subheadings: [
            { link: paths.units, name: "Property" },
            { link: paths.units, name: "Units" },
            { link: paths.units, name: "Parkings" }
        ],
        disabled: true
    }
]

export default sidebarOptions