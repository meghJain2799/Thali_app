import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: '',
    thaliitems: [
        {
          "id": 1,
          "name": "Panner Tikka Masala",
          "description": "Traditional Indian Paneer tikka masala features pieces of Paneer , served in a creamy tomato curry sauce.",
          "imageurl": "https://i0.wp.com/littleindia.ca/wp-content/uploads/2013/10/Paneer-Tikka-Indian-Food-Menu-The-Best-Indian-restaurant-toronto-near-me.png",
          "select": "false",
          "price":"140",
          "quantity": "1"
        },
        {
          "id": 2,
          "name": "Chapati",
          "description": "A round flat unleavened bread of India that is usually made of whole wheat flour and cooked on a griddle.",
          "imageurl": "http://pluspng.com/img-png/png-roti-banner-roti-3172.png",
          "select": "false",
          "price":"15",
          "quantity": "1"
        },
        {
          "id": 3,
          "name": "Daal",
          "description": "An Indian dish made of simmered and usually pureed and spiced legumes.",
          "imageurl": "http://2.bp.blogspot.com/-TaGREgpNpIM/TzZ92jHNT4I/AAAAAAAAA9M/g_Mp-2MnPj4/s1600/TOMATO+DAL+FRY.png",
          "select": "false",
          "price":"80",
          "quantity": "1"
        },
        {
          "id": 4,
          "name": "Rice",
          "description": "Edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced . Rich in nutrients and vitamins and minerals, it an excellent source of complex carbohydrates.",
          "imageurl": "https://www.pngall.com/wp-content/uploads/2018/04/Rice-PNG-Pic.png",
          "select": "false",
          "price":"70",
          "quantity": "1"
        },
        {
            "id": 5,
            "name": "Salad",
            "description": "A mixture of raw usually green leafy vegetables (as lettuce) combined with other vegetables (as tomato and cucumber) and served with a dressing.",
            "imageurl": "https://www.topnoshmeals.com.au/assets/alt_2/SA106-GardenSalad.png?20201125203734",
            "select": "false",
            "price": "15",
            "quantity": "1"
          },
          {
          "id": 6,
          "name": "Gulab Jamun",
          "description": "An Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup. As per tradition, the syrup has a delicate rose flavour.",
          "imageurl": "https://www.hocco.in/wp-content/themes/bonoboz/images/gulab-jamun.png",
          "select": "false",
          "price": "50",
          "quantity": "1"
        },
        {
          "id": 7,
          "name": "Curd",
          "description": "The thickened or solid part of milk that separates from the whey after milk sours and is used to make cheese",
          "imageurl": "https://5.imimg.com/data5/TX/YN/MY-33341672/curd-culture-500x500.png",
          "select": "false",
          "price":"25",
          "quantity": "1"
        },
        {
          "id": 8,
          "name": "Pickle",
          "description": "Vegetables or fruit, sometimes cut into pieces, which have been kept in vinegar or salt water for a long time so that they have a strong, sharp taste.",
          "imageurl": "http://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0109_110-Achaar.png",
          "select": "false",
          "price":"15",
          "quantity": "1"
        },
      ],
    thali:[
      
    ]
  }

  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
     
    
      addTothali: (state, action) => {
     
        state.thali.push(action.payload);
      },
      RemoveItem:(state,action)=>{
         state.thali.splice(action.payload,1)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addTothali ,RemoveItem } = counterSlice.actions;
  
  export default counterSlice.reducer