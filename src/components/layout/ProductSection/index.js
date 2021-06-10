import React from 'react';
import Card from '../../Card';
import cardData from './cardData.json';

import {
    ProductsContainer,
    ProductsHeader,
    ProductsTitle,
    ProductsText,
    ProductsCards
    
} from './Products.Styles'

const ProductsSection = ({ id, title, classes, bgClr="var(--mainClr)"}) => {
    
    return (
        <ProductsContainer id={id} bgClr={bgClr}>
            <ProductsHeader>
                <ProductsTitle className={classes}> {title} </ProductsTitle>
                <ProductsText> Las mejores marcas y los juguetes preferidos</ProductsText>
            </ProductsHeader>
            <ProductsCards>
                {cardData.map((card, i) => {
                    return(
                        <Card key={'card-' + i} cardData={card}/>
                    )
                })}
            </ProductsCards>
        </ProductsContainer>
    )
}

export default ProductsSection;