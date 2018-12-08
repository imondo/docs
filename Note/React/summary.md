# TypeScript与react结合一些注意点（持续更新）

## DOM元素的选择

```
const body: HTMLElement = document.body;
if (document.documentElement) {
  const scrollTop = document.documentElement.scrollTop || body.scrollTop; 
}
```

## scroll滚动事件的绑定

```
constructor(props: any) {
  super(props);
  this.handleScroll = this.handleScroll.bind(this);
}
public componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
}
public componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
}
```

## withRouter

当你想要访问`match`、`location`、`history`这三个对象的时候可以使用`withRouter`来包裹组件来实现高阶组件（HOC）

结合`TypeScript`想访问`match`、`location`、`history`时，需要引入`RouteComponentProps`。

[以withRouter出发看React高阶组件](https://github.com/caistrong/Blog/issues/74)

```
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IArticleProps extends RouteComponentProps<any> {
  ...
}

class ArticleItem extends React.Component<IArticleProps> {
  public componentWillMount() {
    const id = this.props.match.params.id;
    ...
  }

  public render() {
    ...
  }
}

export default withRouter<IArticleProps>(ArticleItem);
```

## 路由

* 利用`props`中`children`属性来实现路由`link`跳转

* 利用`Loadable`来实现按需加载路由

```
// router.tsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Loadable from 'react-loadable';

const LoadComponent = (view: string): any => {
  return () => import(`./pages/${view}`);
};

const RouterList: IRouteMap[] = [
  {
    path: '/',
    component: LoadComponent('Home')
  },
  ...
]  

const RouterMap = () => (
  <Router basename="/rtblog">
    <Layout>
      <Switch>
        {RouterList.map((item, i) => (
          <Route
            key={i}
            exact={true}
            path={item.path}
            component={Loadable({
              loader: item.component,
              loading: Loading
            })}
          />
        ))}
      </Switch>
    </Layout>
  </Router>
)

export default RouterMap;

```

```
// layout.tsx

...
public render() {
  const { children } = this.props;
  return (
    <div className="layout-wrapper">
      <Header />
      <MainContent children={children} />
      <BackTop>
        <div className="back-top-inner">UP</div>
      </BackTop>
    </div>
  );
}
```
