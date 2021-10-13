import {Switch,Route} from 'react-router-dom'
import Users from './Users'
import Products from './Products'
import Main from './Main'
import Product from './Product'
import User from './User'

const Content = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/usuarios" exact component={Users} />
            <Route path="/usuarios/:id" exact component={User} />
            <Route path="/productos" exact component={Products} />
            <Route path="/productos/:id" exact component={Product} />
        </Switch>
    )
}
export default Content
