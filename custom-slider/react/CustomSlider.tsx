
import React, { useEffect, useState } from 'react'
import GET_COLLECTION from './queries/productsCollection.gql'
import { useQuery } from 'react-apollo';

interface CustomSliderProps {
  productName: string
}

const CustomSlider = (props: CustomSliderProps) => {

  // fetch(`api/catalog_system/pub/products/search/138?map=productClusterIds`)
  //   .then(function (response: any) {
  //     console.log(response);
  //   })
  //   .then(function (response: any) {
  //     console.log(response.body.json());
  //   })

  //   .catch((response) => {
  //     console.log(response)
  //   })


  const queryProductsList = useQuery(GET_COLLECTION, {
    variables: {
      collection: "138"
    }
  })

  const [productsCollection, setProductsCollection] = useState([])


  useEffect(() => {

    if (queryProductsList.data === undefined) {
      console.log('Não foi possível encontrar uma coleção')
    }
    else {
      setProductsCollection(queryProductsList?.data?.products)

      console.log('PRODUTOS', queryProductsList)
    }
  }, [queryProductsList])


  return (

    <>


      <ul>
        {productsCollection.map(() => (
          <h2>{props.productName}</h2>
        ))}
      </ul>

    </>
  )
}

export default CustomSlider
