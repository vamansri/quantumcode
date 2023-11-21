import React, { useEffect, useState } from 'react';
import { Card, Button } from 'reactstrap';
import './wp2style.css';
import { CardImg, CardBody, CardText, CardTitle, CardGroup, CardSubtitle } from 'reactstrap';

const WebPage5 = () => {


    return (<div>
        <CardGroup>
            <Card style={{backgroundColor:'#000b69'}}>
                <CardImg
                    alt="Card image cap"
                    src="https://miro.medium.com/max/2400/0*EitUXT-pqbaQSCTt.gif"
                    top
                    width="10%"
                    height='169px' />
                <CardBody>
                    <CardTitle tag="h5" style={{color:'white'}}>
                        REACT.JS
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                    </CardSubtitle>
                    <CardText>
                        {' '}
                        <Button color="warning">
                            explore react
                        </Button>
                        <l style={{color:'white'}}>
                            <br />
                            - mongodb
                            <br />
                            - node.JS
                            <br />
                            - express.JS
                        </l>
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#000b69'}}>
                <CardImg
                    alt="Card image cap"
                    src="https://www.1datagroup.com/wp-content/uploads/2020/12/loading_java.gif"
                    top
                    margin='0px'
                    width="5px"
                    height='169px'
                />
                <CardBody>
                    <CardTitle tag="h5" style={{color:'white'}}>
                        CORE JAVA
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >

                    </CardSubtitle>
                    <CardText>
                        {' '}
                        <Button color="warning">
                            explore java
                        </Button>
                    </CardText>
                </CardBody> </Card>
            <Card style={{backgroundColor:'#000b69'}}>
                <CardImg
                    alt="Card image cap"
                    src="https://media3.giphy.com/media/vISmwpBJUNYzukTnVx/giphy.gif"
                    top
                    width="10%"
                    height='169px'
                />
                <CardBody>
                    <CardTitle tag="h5" style={{color:'white'}}>
                        MY SQL
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >

                    </CardSubtitle>
                    <CardText>
                        {' '}
                        <Button color="warning">
                            explore sql
                        </Button>
                        <br />
                        <l style={{color:'white'}}>
                            -structured
                        
                            query
                        
                            language
                        </l>
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#000b69'}}>
                <CardImg
                    alt="Card image cap"
                    src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/12/migration-from-angularjs-to-angular.gif"
                    top
                    width="10%"
                    height='169px'
                />
                <CardBody>
                    <CardTitle tag="h5" style={{color:'white'}}>
                        ANGULAR
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >

                    </CardSubtitle>
                    <CardText>
                        {' '}
                        <Button color="warning">
                            explore angular
                        </Button>
                        <br />
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#000b69'}}>
                <CardImg
                    alt="Card image cap"
                    src="https://fullscale.io/wp-content/uploads/2022/04/spring-boot-and-react-js.png"
                    top
                    width="10%"
                    height='169px'
                />
                <CardBody>
                    <CardTitle tag="h5" style={{color:'white'}}>
                        SPRING BOOT
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >

                    </CardSubtitle>
                    <CardText>
                        {' '}
                        <Button color="warning">
                            explore SPRING
                        </Button>
                        <br />
                    </CardText>
                </CardBody>
            </Card>
        </CardGroup>
    </div>)
    
}

export default WebPage5