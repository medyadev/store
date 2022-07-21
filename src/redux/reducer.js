import {ADD_TO_BASKET, ADD_TO_FAVORITE, DELETE_FROM_FAVORITE, GET_PRODUCTS} from "./actionTypes";


const initialState = {
    products:[
        {
            id:1,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
        },

        {
            id:2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
        },
        {
            id:3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 2,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:5,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 1,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:6,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:7,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:8,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        }



    ],
    basket:[],
    favorites:[],
    singleProduct:{},

}

export const Reducer  = (state =initialState,action) =>{
switch (action.type){
    case GET_PRODUCTS:
       return state

    case ADD_TO_BASKET:
   const  findProduct = state.basket.find(el =>el.id === action.payload.id)

        if (findProduct){
            return {

                ...state,basket:state.basket.map(el=>
                    el.id === action.payload.id ?
                    {...el,quantity:el.quantity +1}:el
                )
            }

        }else{
            return {...state,basket:[...state.basket,{...action.payload,quantity:1}]}

        }



    case ADD_TO_FAVORITE:
        console.log(action.payload)
        const foundProduct = state.favorites.find(el => el.id === action.payload.id)



if (foundProduct){
return state
}else {
    return {...state,favorites:[...state.favorites, action.payload]}

}

    case  DELETE_FROM_FAVORITE:
        const id = action.payload
        let result = state.favorites.map(el => {
           if (el.id === id){
               delete el.isLiked
               console.log("isLaked is deleted", el)

               return el


           }else return el
        })

       result = result.filter(el => el.id !==id)
        return {...state,favorites: result}

    default :
        return state
}
}