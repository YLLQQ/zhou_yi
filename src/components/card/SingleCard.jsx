import React from 'react';
import './SingleCard.css'

const SingleCard = (props) => {

    const dataSource = props.dataSource;

    const title = dataSource.title;
    const content = dataSource.content;
    const yao = dataSource.yao;

    return (
        <div className="all">
            <div className="header">
                {title}
            </div>

            <div>
                {
                    content && content.map((item, index) => <div key={index} className="yao">{item}</div>)
                }
            </div>

            <div className="content">
                {
                    yao.map((v, i) =>
                        <div className="row" key={i}>
                            {
                                v.flag === 1 ?
                                    <div className="gYang" /> :
                                    v.flag === 0 ?
                                        <div className="gYin" >
                                            <div className="gLeft" />
                                            <div className="gMiddle" />
                                            <div className="gRight" />
                                        </div>
                                        :
                                        <div className="gWhite" />}
                            <div className="yi" >
                                {v.yi}
                            </div>
                            <div className="xiang" >
                                {v.xiang}
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default SingleCard;