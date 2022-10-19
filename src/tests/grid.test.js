import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Grid from '../lib/Grid.vue'
import GridCol from '../lib/GridCol.vue'

describe('布局组件Grid', () => {
  test('间隔属性', () => {
    const Component = {
      template: `<Grid :gutter="10">
    <GridCol :span="16">
      <div class="demo1"></div>
    </GridCol>
    <GridCol :span="8">
      <div class="demo2"></div>
    </GridCol>
    <GridCol :span="4">
      <div class="demo3"></div>
    </GridCol>
  </Grid>`,
      components: {Grid, GridCol}
    }
    const Component1 = {
      template: `<Grid :gutter="10">
    <GridCol :span="16">
      <div class="demo1"></div>
    </GridCol>
    <div>hello</div>
  </Grid>`,
      components: {Grid, GridCol}
    }
    const wrapper = mount(Component)
    const wrapper1 = mount(Component1)
    expect(wrapper.find('.mmq-grid-col').element.style.paddingRight === '10px').toBe(true)
    expect(wrapper1.find('.mmq-grid-col').element.style.paddingRight === '10px').toBe(true)
  })
  test('偏移属性', () => {
    const Component = {
      template: `<Grid :gutter="20">
    <GridCol :span="6" :offset="12">
      <div class="demo2"></div>
    </GridCol>
  </Grid>`,
      components: {Grid, GridCol}
    }
    const wrapper = mount(Component)
    console.log(wrapper.find('.mmq-grid-col').element.style.transform)
    expect(Boolean(wrapper.find('.mmq-grid-col').element.style.transform)).toBe(true)
  })
})
