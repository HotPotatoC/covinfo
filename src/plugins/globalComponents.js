import BaseCard from "../components/BaseCard.vue"
import BaseButton from "../components/BaseButton.vue"
import BaseLoading from "../components/BaseLoading.vue"

export default {
  install(Vue) {
    Vue.component(BaseCard.name, BaseCard);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseLoading.name, BaseLoading);
  }
};
