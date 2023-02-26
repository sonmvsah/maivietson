export { default as AnimationHome } from '../../components/AnimationHome.vue'
export { default as HeaderContainer } from '../../components/HeaderContainer.vue'
export { default as HeaderMenu } from '../../components/HeaderMenu.vue'
export { default as HeaderMobile } from '../../components/HeaderMobile.vue'
export { default as Mfooter } from '../../components/Mfooter.vue'
export { default as Mheader } from '../../components/Mheader.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as TopBar } from '../../components/TopBar.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as HomeProducts } from '../../components/home/HomeProducts.vue'
export { default as HomeSlider } from '../../components/home/HomeSlider.vue'
export { default as FooterContainer } from '../../components/footer/FooterContainer.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
