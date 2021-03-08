import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import './News.css'

const News = (props) => {
        const {title, description, urlToImage } =props.article;


    return (
        <div>
            <Jumbotron className="News">
                <img src={urlToImage} alt=""/>
                <h4>{title}</h4>
                <p>{description}</p>
                
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>

        </div>
    );
};

export default News;