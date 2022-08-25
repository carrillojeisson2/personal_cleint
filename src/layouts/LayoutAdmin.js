
import React, {useState} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Layout} from 'antd'
import useAuth from '../hooks/useAuth';
import './LayoutAdmin.scss'
import MenuTop from '../components/Admin/MenuTop'
import MenuSider from '../components/Admin/MenuSider'
import AdminSignIn from '../pages/Admin/SignIn'
import { getAccessTokenApi, getRefreshTokenApi } from '../api/auth'



export default function LayoutAdmin(props) {
  // console.log(props)
  const {routes} = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const {Header, Content, Footer} = Layout;

  // console.log(useAuth());
  const {user, isLoading} = useAuth();



  const accessToken = getAccessTokenApi();
  const refreshToken = getRefreshTokenApi();
  // console.log('accesstoken: '+accessToken)
  // console.log('refreshtoken: '+refreshToken)
  
  // const user = null;

  // console.log(user);

  if(!user && !isLoading){
    return (
      <>
      <Route path="/admin/login" component={AdminSignIn} />
      <Redirect to="/admin/login" />
    </>
    )
  }

  if(user && !isLoading) {
    return (
      <Layout>
      {/* menu sider */}
      <MenuSider menuCollapsed={menuCollapsed}/>
        <Layout className='layout-admin' 
        style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
          <Header className='layout-admin__header'>
            {/* menu top */}
            <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
          </Header>
          <Content className='layout-admin__content'>
            <LoadRoutes routes={routes} />
          </Content>
          <Footer className='layout-admin__footer'>footer..</Footer>
        </Layout>
    </Layout>
  );
}

return null;
}

function LoadRoutes({routes}) {

  return (
    <Switch>
      {
        routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))
      }
    </Switch>
  )

  // return routes.map((route, index) => (
  //   <Route
  //     key={index}
  //     path={route.path}
  //     exact={route.exact}
  //     component={route.component}
  //   />
  // ))
}
