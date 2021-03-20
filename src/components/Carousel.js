import React from 'react';

import crystal from '../assets/images/crystal.jpg';
import train from '../assets/images/train.jpg';
import flowers from '../assets/images/flowers.jpg';
import meals from '../assets/images/meals.jpg';
import whatsapp from '../assets/images/whatsapp.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'WhatsApp Clone',
                    subTitle: 'MERN WhatsApp Clone',
                    imgSrc: whatsapp,
                    link: 'https://mern-app-whatsapp.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Neighbor 2 Neighbor',
                    subTitle: 'Meal donation & pick-up app',
                    imgSrc: meals,
                    link: 'https://neighbor-2-neighbor.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Flower Memory Game',
                    subTitle: 'Challenging memory game',
                    imgSrc: flowers,
                    link: 'https://flower-memory-game.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Train Time',
                    subTitle: 'Train schedule app',
                    imgSrc: train,
                    link: 'https://tanishacodes.github.io/train-time/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Crystal Collector',
                    subTitle: 'Random number game',
                    imgSrc: crystal,
                    link: 'https://tanishacodes.github.io/unit-4-game/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                    item.selected = false;
            }
        });
        
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;