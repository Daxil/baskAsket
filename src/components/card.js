import React from 'react';
import { Card as BootstrapCard, Row, Col } from 'react-bootstrap';
import images from './img.js';
import './CustomCard.css';

function Card({ onToggleChoice }) {
  return (
    <BootstrapCard className="w-90" onClick={onToggleChoice}>
      <Row>
        <Col md={4}>
          <BootstrapCard.Img
            src="https://открыватор.москва/file/2015/10/karta-moskvi.jpg"
            height="180px"
            width="170px"
            alt="картинка"
          />
        </Col>
        <Col md={6}>
          <BootstrapCard.Body>
            <BootstrapCard.Title>Набережная</BootstrapCard.Title>
            <BootstrapCard.Text>
              <img src={images.point} height="23px" width="23px" alt="иконка" /> Адрес:
            </BootstrapCard.Text>
            <BootstrapCard.Text>
              <img src={images.comand} height="23px" width="23px" alt="иконка" /> Людей сегодня: 0
            </BootstrapCard.Text>
          </BootstrapCard.Body>
        </Col>
        <Col md={2}>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="star">
                {'☆'}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </BootstrapCard>
  );
}

export default Card;
