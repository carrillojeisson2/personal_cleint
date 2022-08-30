import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Layout, Row, Col} from 'antd'
import './LayoutBasic.scss'
import MenuTop from '../components/Web/MenuTop'




export default function LayoutBasic(props) {

  const {routes} = props;
  const { Content, Footer} = Layout;

  return (
    <>
    <Row>
      <Col lg={4} />
      <Col lg={16} >
        <MenuTop/>

      </Col>
      <Col lg={4} />
    </Row>
        <LoadRoutes routes={routes}/>
       <Footer>footer..</Footer>
    </>
  )


//   return (
//     <Layout>
//     <h2>Menu Contenido basic</h2>
//     <Content>
//       <LoadRoutes routes={routes}/>
//     </Content>
//     <Footer>footer..</Footer>
//     <Layout>

//     </Layout>
    
// </Layout>
//   )
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

