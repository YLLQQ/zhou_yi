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
                                v.yi.substr(0, 2).indexOf('用') > -1 ?
                                    <div className="gWhite" /> :
                                    v.yi.substr(0, 2).indexOf('九') > -1 ?
                                        <div className="gYang" /> :
                                        < div className="gYin" >
                                            <div className="gLeft" />
                                            <div className="gMiddle" />
                                            <div className="gRight" />
                                        </div>
                            }
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

        </div >
    );
}

export default SingleCard;