import React from 'react'
import {Row, Col, Card, Button} from 'antd'
import {Link} from 'react-router-dom'
import reactJsHooks from '../../../assets/img/jpg/react-js-hooks.jpg';
import reactNative from '../../../assets/img/jpg/react-native.jpg';
import javaScript from '../../../assets/img/jpg/javascript-es6.jpg';
import wordPress from '../../../assets/img/jpg/wordpress.jpg';
import prestaShop from '../../../assets/img/jpg/prestashop-1-7.jpg';
import cssGrid from '../../../assets/img/jpg/css-grid.jpg';


import "./HomeCourses.scss";

export default function HomeCourses() {
    return (
        <Row className='home-courses'>
            <Col className='home-courses__title'>
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className='row-courses'>
                    <Col md={6}>
                        <CardCourse
                            image={reactJsHooks}
                            title="React JS Hooks"
                            subtitle="Intermedop - React/JavaScript"
                            link="https://www.udemy.com/course/react-js-de-cero-a-experto-creado-aplicaciones-reales/"
                        />
                    </Col>

                    <Col md={6}>
                        <CardCourse
                            image={reactNative}
                            title="ReactNative Expo"
                            subtitle="Intermedop - React/JavaScript"
                            link="https://www.udemy.com/course/react-native-crea-aplicaciones-moviles-reales-ios-y-android/"
                        />
                    </Col>

                    <Col md={6}>
                        <CardCourse
                            image={javaScript}
                            title="javaScript es6"
                            subtitle="Basico - JavaScript"
                            link="https://www.udemy.com/course/master-javascript-y-es6-lo-ultimo-js-con-proyectos-reales/"
                        />
                    </Col>

                    <Col md={6}>
                        <CardCourse
                            image={wordPress}
                            title="wordPress"
                            subtitle="Basico - WordPress"
                            link="https://www.udemy.com/course/crea-tu-web-wordpress-profesional-de-cero-a-experto-con-tienda/"
                        />
                    </Col>
                </Row>

                <Row className='row-courses'>

                        <Col md={6}>
                                <CardCourse
                                    image={prestaShop}
                                    title="prestaShop"
                                    subtitle="Basico - prestaShop"
                                    link="https://www.udemy.com/course/prestashop-1-7-crea-tu-tienda-online-de-0-a-experto/"
                                />
                        </Col>
                        
                        <Col md={6}/>
                        <Col md={6}/>

                        <Col md={6}>
                                <CardCourse
                                    image={cssGrid}
                                    title="cssGrid"
                                    subtitle="Intermedop - cssGrid"
                                    link="https://www.udemy.com/course/css-grid-principiante-a-experto-creando-web-responsive/"
                                />
                        </Col>

                </Row>

            </Col> 
            <Col lg={4} />
            <Col lg={24} className="home-courses__more">
                <Link to="/courses">
                    <Button>Ver Más</Button>
                </Link>
            </Col>
        </Row>
    )
}

function CardCourse(props) {
    const {image, title, subtitle, link} = props;
    const {Meta} = Card;

    return (
        <a href={link} target="_blank" rel="noopener  noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title}/>}
                actions={[<Button>INGRESAR</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}