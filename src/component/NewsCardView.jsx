import React from 'react';
// import {Router,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class NewsCardView extends React.Component {


    render() {
        const { articles } = this.props;
        const data = articles && articles.map((article, id) => {
            return <Card key={id}>
                <CardImg className="" top width="100%" src={this.formatImageUrl(article.urlToImage + "?mocky-delay=100ms")} alt={article.source.name} />
                <CardBody className="">
                    <CardTitle className="">{this.customeDate(article.publishedAt)}</CardTitle>
                    <CardSubtitle className="">{article.author}</CardSubtitle>
                    <CardText className="">{article.content}</CardText><br />
                    <CardSubtitle className=""><u>{article.source.name}</u></CardSubtitle>
                </CardBody>
            </Card>
        })

        return (
            <div>
                {data}
            </div>
        );
    }
    formatImageUrl(url) {
        const width = '100%'
        const height = '100%'
        return url.replace('{width}', width).replace('{height}', height)
    }
    customeDate = (publishwdDate) => {
        const date = new Date(publishwdDate);
        const year = date.getFullYear();
        let month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return day + "/" + month + "/" + year;
    }
};
const mapStateTOProps = (articles) => {
    return articles;
}
export default connect(mapStateTOProps)(NewsCardView);