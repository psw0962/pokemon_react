import { Card } from 'antd';
import React, { Component } from 'react';

const { Meta } = Card;

class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            weight: 0,
            pokemon_front_img_url: ''
        }
    }

    componentDidMount() {
        const { name } = this.props
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((reponse) => {
                return reponse.json()
            })
            .then((json) => {
                this.setState({
                    ...this.state,
                    weight: json.weight,
                    height: json.height,
                    pokemon_front_img_url: json.sprites.front_default
                })
            })
    }

    render() {
        return (<Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={this.state.pokemon_front_img_url}
                />
            }
        // actions={[
        //     <SettingOutlined key="setting" />,
        //     <EditOutlined key="edit" />,
        //     <EllipsisOutlined key="ellipsis" />,
        // ]}
        >
            <Meta
                title={'pokemon name'}
                description={this.props.name}
            />

            <Meta
                title={'pokemon weight'}
                description={`${this.state.weight / 10}kg`}
            />

            <Meta
                title={'pokemon height'}
                description={`${this.state.height * 10}cm`}
            />
        </Card>)

    }
}

export default PokemonCard;