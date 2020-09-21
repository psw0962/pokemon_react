import { Card, Avatar } from 'antd';
import React, { Component } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

class PokemonCard extends Component {
    constructor(props) {
        console.log(constructor);
        super(props)
        this.state = {
            name: '',
            height: 0,
            weight: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://pokeapi.co/api/v2/pokemon/1')
            .then((reponse) => {
                return reponse.json()
            })
            .then((json) => {
                this.setState({
                    ...this.state,
                    name: json.name,
                    weight: json.weight,
                    height: json.height
                })
            })
    }

    render() {
        console.log('render');
        return (<Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title={'pokemon name'}
                description={this.state.name}
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

export default PokemonCard