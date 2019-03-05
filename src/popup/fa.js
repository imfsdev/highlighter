import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCog, faLongArrowAltLeft, faPlus,
  faSave, faEdit, faTimes, faList, faListUl
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog)
library.add(faLongArrowAltLeft)
library.add(faPlus)
library.add(faSave)
library.add(faEdit)
library.add(faTimes)
library.add(faList)
library.add(faListUl)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
