import React from 'react';
import { Collapse } from 'antd';
import './SingleCard.css'

const SingleCard = () => {
    return (
        <Collapse>
            <Collapse.Panel header="Panel-1">
                11111111111
            </Collapse.Panel>
            <Collapse.Panel header="Panel-2">
                22222222222
            </Collapse.Panel>
        </Collapse>
    );
}

export default SingleCard;