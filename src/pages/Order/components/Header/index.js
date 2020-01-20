import React, { PureComponent } from 'react';
import { Button } from 'src/components/UIElements';
import './styles.scss'

export default class Order extends PureComponent {
    render() {
        return (
            <div className='text-dark wrapper'>
                <div className='header'>
                    <div className='display-4 font-weight-bold'>
                        List of order
                    </div>
                    <div className='subTitle'>
                        Orders information & payment
                    </div>
                </div>
                <div className='action'>
                    <div className='text-left container'>
                        <Button variant="outline-secondary" style={{ borderColor: 'transparent' }}>
                            <span className="iconify" data-icon="ic:round-less-than" data-inline="false"></span>
                            back
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
