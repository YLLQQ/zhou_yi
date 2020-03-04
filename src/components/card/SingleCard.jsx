import React from 'react';
import { Collapse } from 'antd';
import './SingleCard.css'

const SingleCard = () => {
    return (
        <div className="container">
            <div className="row">
                <Collapse>
                    <Collapse.Panel header="Panel-1">
                        11111111111
                    </Collapse.Panel>
                    <Collapse.Panel header="Panel-2">
                        22222222222
                    </Collapse.Panel>
                </Collapse>
            </div>

            <div className="row">
                <Collapse>
                    <Collapse.Panel header="Panel-1">
                        11111111111
                    </Collapse.Panel>
                    <Collapse.Panel header="Panel-2">
                        22222222222
                    </Collapse.Panel>
                </Collapse>
            </div>

            <div className="gGua">
                <div className="gYin">
                    <div className="gLeft" />
                    <div className="gMiddle" />
                    <div className="gRight" />
                </div>
                <div className="gYang" />
                <div className="gYin">
                    <div className="gLeft" />
                    <div className="gMiddle" />
                    <div className="gRight" />
                </div>
            </div>
        </div>
    );
}

export default SingleCard;