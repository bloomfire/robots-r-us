import React, { Component } from 'react';
import { Card, Avatar, Button, Col, Row  } from 'antd';
import {  SmileOutlined  } from '@ant-design/icons';
const { Meta } = Card;
/**
 * This Component will utilize "props" which are immutable.
 *  If you want to change values stored in props you need to use "state" instead.
 * you can initialize a state with a constructor method.
 */
class Cards  extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      followed: this.props.followed,
      loadings: []
    }
    this.handleFollowClick = this.handleFollowClick.bind(this)
  }
  handleFollowClick() {
    this.setState({
      followed: !this.state.followed
    });
  }

  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };
  render() {

    return (
        <Col style={{display: 'flex'}} className="gutter-row" xs={1} sm={2} md={4} lg={6} xl={6}>
          <Card
            title={this.props.name}
            style={{ width: 300, flex: 1}}
            cover={
              <img
                src={this.props.avatar != undefined ? this.props.avatar: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'}
              />
            }
            actions={[
              <Button
              type="primary"
              icon={<SmileOutlined />}
              loading={this.state.loadings[1]}
              style={{backgroundColor: this.state.followed ? 'green' : '#1890ff'}}
              onClick={() => {this.enterLoading(1); this.handleFollowClick();}}
            >
              {this.state.followed ? 'Following' : 'Follow'}
              
            </Button>,
            ]}
          >
            <Meta
              title={this.props.title} 
              description={this.props.email} 
            />
          </Card>
        </Col>
    );
  }
}

export default Cards;
