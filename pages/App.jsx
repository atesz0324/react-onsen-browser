class App extends React.Component {
    renderPage(route, navigator) {
        const props = route.props || {};
        props.navigator = navigator;

        return React.createElement(route.component, props);
    }

    render() {
        return (
            <Ons.Navigator
                animation="fade"
                initialRoute={{
                    component: Home
                }}
                renderPage={this.renderPage}
            />
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <Ons.Page 
                contentStyle={{padding: '2vh'}}>
                <h1>Ez egy minta oldal</h1>
                <Ons.Button
                    onClick={() => { this.props.navigator.pushPage({component: Informations })}}>Tovább az információkhoz</Ons.Button>
            </Ons.Page>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

