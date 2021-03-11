import { SuperVuex } from "super-vuex";

// 两个vuex插件，vuexPromise和vuejsStorage
import vuexPromise from "vuex-promise";
import vuejsStorage from "vuejs-storage";
import createPersistedState from "vuex-persistedstate";

import UserStore from "./modules/user";
import Subs from "./modules/sub";
import ToDoList from "./modules/todolist";

const Main = new SuperVuex();
// 可以set多个module
Main.setModule(UserStore, Subs, ToDoList);
// 在SuperVuex中使用插件
Main.setPlugin(vuexPromise, vuejsStorage);

export default Main.init();
