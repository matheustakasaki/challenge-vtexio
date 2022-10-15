import React, { useEffect, useState } from 'react'
import SliderItem from '../SliderItem';
import { SliderLayout } from 'vtex.slider-layout'
import Spinner from '../Spinner';
import styles from './style.css'
const Custom = () => {


    const [productCollection, setProductCollection] = useState([]);

    const [collectionId, setCollectionId] = useState('');

    const handleChangeCollectionId = (event: any) => {
        setCollectionId(event.target.value)
    }

    const handleGetCollectionItems = (event: any) => {
        event.preventDefault();
        fetch(`api/catalog_system/pub/products/search/${collectionId}?map=productClusterIds`)
            .then(response => response.json())
            .then((data) => {
                setProductCollection(data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
    }, [collectionId])
    return (

        <>
            {
                productCollection ?
                    <section className={styles.sliderContainer}>
                        <div className={styles.formContainer}>

                            <form className={styles.formContent} onSubmit={handleGetCollectionItems}>

                                <input className={styles.formInputText}
                                    value={collectionId}
                                    onChange={handleChangeCollectionId}
                                    type="text"
                                    name="collectionId"
                                    id="collectionId"
                                    placeholder='Digite o Id da coleção'
                                />

                                <input className={styles.formInputSubmit} type="submit" value="Enviar" />
                            </form>

                        </div>
                        <SliderLayout
                            itemsPerPage={{
                                desktop: 4,
                                mobile: 2,
                                tablet: 3
                            }}
                            label={'Custom Shelf'}
                            fullWidth={false}
                            arrowSize={20}
                        >
                            {productCollection.map((item: any) => (
                                <SliderItem
                                    collectionId={collectionId}
                                    id={item.productId}
                                    name={item.productName}
                                    link={item.link}
                                    imageUrl={item.items[0].images[0].imageUrl}
                                    price={item?.items[0]?.sellers[0]?.commertialOffer?.ListPrice}
                                    addToCartLink={item?.items[0]?.sellers[0]?.addToCartLink}
                                />
                            ))}
                        </SliderLayout>
                    </section>
                    :
                    <Spinner />
            }
        </>
    )
}

export default Custom
