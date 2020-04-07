import BaseCard from "../components/BaseCard.vue"
import BaseButton from "../components/BaseButton.vue"

export default {
  install(Vue) {
    Vue.component(BaseCard.name, BaseCard);
    Vue.component(BaseButton.name, BaseButton);
  }
};
