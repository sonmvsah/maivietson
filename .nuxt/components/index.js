export const AnimationHome = () => import('../../components/AnimationHome.vue' /* webpackChunkName: "components/animation-home" */).then(c => wrapFunctional(c.default || c))
export const HeaderContainer = () => import('../../components/HeaderContainer.vue' /* webpackChunkName: "components/header-container" */).then(c => wrapFunctional(c.default || c))
export const HeaderMenu = () => import('../../components/HeaderMenu.vue' /* webpackChunkName: "components/header-menu" */).then(c => wrapFunctional(c.default || c))
export const HeaderMobile = () => import('../../components/HeaderMobile.vue' /* webpackChunkName: "components/header-mobile" */).then(c => wrapFunctional(c.default || c))
export const Mfooter = () => import('../../components/Mfooter.vue' /* webpackChunkName: "components/mfooter" */).then(c => wrapFunctional(c.default || c))
export const Mheader = () => import('../../components/Mheader.vue' /* webpackChunkName: "components/mheader" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const TopBar = () => import('../../components/TopBar.vue' /* webpackChunkName: "components/top-bar" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const FooterContainer = () => import('../../components/footer/FooterContainer.vue' /* webpackChunkName: "components/footer-container" */).then(c => wrapFunctional(c.default || c))
export const HomeProducts = () => import('../../components/home/HomeProducts.vue' /* webpackChunkName: "components/home-products" */).then(c => wrapFunctional(c.default || c))
export const HomeSlider = () => import('../../components/home/HomeSlider.vue' /* webpackChunkName: "components/home-slider" */).then(c => wrapFunctional(c.default || c))

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
