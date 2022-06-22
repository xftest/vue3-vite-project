import { createApp } from "vue";
import App from "./App";
import Antd from "ant-design-vue";
import routers from "./router";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(routers).use(Antd).mount("#app");