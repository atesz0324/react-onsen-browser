class Informations extends React.Component {
    renderTabs() {
        const tabs = [
            {
                title: 'Tab 1',
                content: <Tab1 {...this.props}/>,
                icon: 'fa-briefcase',
                key: 'jobs'
            },
            {
                title: 'Tab 2',
                content: <Tab2/>,
                icon: 'fa-calendar',
                key: 'calendar'
            }
        ];

        return tabs.map((tab) => {
            return {
                content: <TabPage
                    key={tab.key}
                    title={tab.title}
                    content={tab.content}
                    navigator={this.props.navigator} />,

                tab: <Ons.Tab
                    key={tab.key}
                    icon={tab.icon}
                    label={tab.title} />
            };
        });
    }

    render() {
        return (
            <Ons.Page>
                <Ons.Page>
                    <Ons.Tabbar
                        id="onsenTabbar"
                        initialIndex={0}
                        renderTabs={this.renderTabs.bind(this)}
                        animation='none'/>
                </Ons.Page>
            </Ons.Page>
        )
    }
}

class TabPage extends React.Component {
    render() {
        return (
            <Ons.Page>
                {this.props.content}
            </Ons.Page>
        );
    }
}