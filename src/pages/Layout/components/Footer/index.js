import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { INFO } from './constants'
import './styles.scss';

export default class Footer extends PureComponent {
    render() {
        return (
            <Col className='footer-wrapper bg-dark'>
                <Row style={{ borderBottom: '1px white solid' }}>
                    <Container className='row1'>
                        <div className='name'>
                            <span className="iconify" data-icon="si-glyph:pin-location" data-inline="false"></span>
                            {INFO.address}
                        </div>
                        <div className='phone'>
                            |
                                <span className="iconify" data-icon="fa-solid:phone-alt" data-inline="false"></span>
                            {INFO.phone}
                        </div>
                        <div className='email'>
                            |
                                <span className="iconify" data-icon="typcn:mail" data-inline="false"></span>
                            {INFO.email}
                        </div>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <span class="iconify" data-icon="mdi:email-outline" data-inline="false"></span>
                        {INFO.company}
                    </Container>
                </Row>
            </Col>
        )
    }
}
