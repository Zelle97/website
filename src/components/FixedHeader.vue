<script>
// The MIT License (MIT)

// Copyright (c) 2017 Potato4d(HANATANI Takuma)
// Modifications for Vue 3 (c) 2022 Benedikt Wagener
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicence, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { h, onBeforeUnmount, onMounted, ref } from 'vue'

export default {
  props: {
    threshold: {
      required: false,
      type: Number,
      default: 0
    },
    headerClass: {
      required: false,
      type: String,
      default: 'vue-fixed-header'
    },
    fixedClass: {
      required: false,
      type: String,
      default: 'vue-fixed-header--isFixed'
    },
    hideScrollUp: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, emit }) {
    const state = ref({ check: null, isFixed: false, lastScrollTop: 0 })

    onMounted(() => {
      main()
      registerEvent()
    })

    onBeforeUnmount(() => {
      removeEvent()
    })

    function getScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop
    }
    function main() {
      state.value.lastScrollTop = getScrollTop()
      state.value.check = () => {
        const { threshold, hideScrollUp } = props
        const currentScrollPos = getScrollTop()

        const isOverThreshold = currentScrollPos > threshold
        const isScrollDown = currentScrollPos >= state.value.lastScrollTop

        const newIsFixed = isScrollDown
          ? // down-scrolled - are we over threshold ?
            isOverThreshold
          : // up-scrolled - EITHER we don't care OR are we over threshold ?
          hideScrollUp
          ? false
          : isOverThreshold

        state.value.lastScrollTop = currentScrollPos

        if (state.value.isFixed !== newIsFixed) {
          state.value.isFixed = newIsFixed
          emit('change', state.value.isFixed)
        }
      }
    }
    function registerEvent() {
      window.addEventListener('scroll', state.value.check)
    }
    function removeEvent() {
      window.removeEventListener('scroll', state.value.check)
    }

    return () => {
      const children = slots.default()
      if (!children || ![...children][0]) {
        return h()
      }

      const _child = [...children][0]
      const child = h(
        _child.type,
        { ..._child.props },
        _child.children || _child.text
      )
      child.props = child.props || { class: '' }

      if (typeof child.props.class === 'string') {
        child.props.class = child.props.class.split(' ')
      }

      if (Array.isArray(child.props.class)) {
        child.props.class = [...child.props.class].reduce(
          (a, b) => ({ ...a, [b]: true }),
          {}
        )
      }

      child.props.class = {
        ...child.props.class,
        [props.headerClass]: true,
        [props.fixedClass]: !!state.value.isFixed
      }

      child.props.class = Object.entries(child.props.class)
        .map(([k, v]) => (v ? k : null))
        .filter(v => v)
        .join(' ')

      return h(child.type, child.props, child.children)
    }
  }
}
</script>