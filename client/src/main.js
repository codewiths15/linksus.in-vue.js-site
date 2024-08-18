import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/main.css";

// Create the Vue app instance
const app = createApp(App);

// Use the router and Toast plugin
app.use(router);
app.use(Toast, {
  position: POSITION.TOP_RIGHT, // Set the position of the toast notifications
  timeout: 5000, // Auto-hide after 5 seconds
  closeOnClick: true, // Close notification when clicked
  pauseOnHover: true, // Pause the timer when hovering over the notification
});

// Mount the app to the DOM
app.mount("#app");
