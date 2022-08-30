import React from 'react'
import {Row, Col} from 'antd'

import "./MainBanner.scss";

export default function MainBanner() {
    return (
        <div className='main-banner'>
            <div className='main-banner__dark'>

                <Row>
                    <Col lg={4} />
                    <Col lg={16}>
                        <h2>Aprende nuevas <br/> tecnologías weeb y movil </h2>
                        <h3>Eu nisi nostrud adipisicing incididunt voluptate et laboris velit nisi incididunt nostrud id ea. Do sunt sit nulla est occaecat adipisicing. Cillum ea irure eu Lorem do tempor officia. Ea </h3>
                    </Col>
                    <Col lg={4} />
                </Row>
            </div>
        </div>
    )
}