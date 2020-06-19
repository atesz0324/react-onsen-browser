class Tab1 extends React.Component {

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className="left">
                    <Ons.BackButton>

                    </Ons.BackButton>
                </div>

                <div className="center">
                    <span>Tab #2</span>
                </div>

                <div className="right">
                    <Ons.ToolbarButton
                        onClick={() => { this.showSearchInput() }}>
                        <Ons.Icon
                            icon={{ default: 'fa-search' }}
                            fixedWith />
                    </Ons.ToolbarButton>

                    <Ons.ToolbarButton
                        onClick={() => { this.showSearchInput() }}>
                        <Ons.Icon
                            icon={{ default: 'fa-bell' }}
                            fixedWith />
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        )
    }

    render() {
        return (
            <Ons.Page
                renderToolbar={this.renderToolbar.bind(this)}
                contentStyle={{padding: '2vh'}}>
                    <h1>Tab1.jsx</h1>
            </Ons.Page>
        )
    }
}