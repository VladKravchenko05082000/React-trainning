import avatar1 from "../assets/1.jpg";
import avatar2 from "../assets/2.jpg";

export let initialState = {
   friendsListData: [
      { id: "/1", name: "Vlad", avatar: avatar1 },
      { id: "/2", name: "Roma", avatar: avatar2 }
   ]
}

export const friendsListNavBarReducer = (state = initialState, action) => {

   return state
}

export default friendsListNavBarReducer;