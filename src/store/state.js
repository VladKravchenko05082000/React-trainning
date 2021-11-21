import avatar1 from "../assets/1.jpg";
import avatar2 from "../assets/2.jpg";
import avatar3 from "../assets/3.jpg";
import avatar4 from "../assets/4.png";


let state = {
   dialogsPage: {
      userListData: [
         { id: "/1", name: "Vlad", avatar: avatar1 },
         { id: "/2", name: "Roma", avatar: avatar2 },
         { id: "/3", name: "Vika", avatar: avatar3 },
         { id: "/4", name: "Luda", avatar: avatar4 },
      ],
      conversationListData: [
         { id: 1, massage: "Привет" },
         { id: 2, massage: "Привет" },
         { id: 3, massage: "Как дела?" },
         { id: 4, massage: "Норм" },
      ]
   },
   profilePage: {
      postListData: [
         { id: 1, massage: "Hi, it`s my first post", likesCount: 15 },
         { id: 2, massage: "Hi, it`s my second post", likesCount: 20 },
         { id: 3, massage: "Hi, it`s my third post", likesCount: 25 }
      ]
   },
   friendsListNavBar: {
      friendsListData: [
         { id: "/1", name: "Vlad", avatar: avatar1 },
         { id: "/2", name: "Roma", avatar: avatar2 }
      ]
   }
}

export default state;

