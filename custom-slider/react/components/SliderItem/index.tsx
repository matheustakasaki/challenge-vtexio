import styles from './style.css'
import React from 'react'
import { FormattedPrice } from 'vtex.formatted-price'
import { SliderItemsProps } from '../../typings/SliderItem'

const SliderItem = (props: SliderItemsProps) => {
    return (

        <>
            <li className={styles.sliderElement} key={props.id} id={props.id}>
                <a className={styles.sliderLink} href={props.link}>
                    <img className={styles.sliderImage} src={props.imageUrl} alt="Product Image" />
                    <h3 className={styles.sliderName}>
                        {props.name}
                    </h3>

                </a>

                <div className={styles.sliderPrice}>
                    <FormattedPrice value={props.price} />

                    à vista
                </div>

                <a className={styles.sliderBuyButton} href={props.addToCartLink}>
                    Comprar
                </a>

            </li>

        </>
    )
}

export default SliderItem