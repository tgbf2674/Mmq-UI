<demo>
手风琴模式
</demo>
<template>
  <div>
    <Collapse v-model:activeName="activeName" accordion>
      <CollapseItem name="1">
        <template #header>狂人日记</template>
        <template #body>我未必无意之中，不吃了我妹子的几片肉，现在也轮到我自己，……有了四千年吃人履历的我，当初虽然不知道，现在明白，难见真的人</template>
      </CollapseItem>
      <CollapseItem name="2">
        <template #header>阿Q正传</template>
        <template #body>
          <div>阿Q正传》是一篇讽刺小说。讽刺是理智的文学的一支，是古典的写实作品。</div>
          <div>在结构上，鲁迅的《阿Q正传》通过精确描写和作者本人截然不同的阿Q这一人物形象，使得鲁迅本身的痛苦和悲哀浮现出来。</div>
        </template>
      </CollapseItem>
      <CollapseItem name="3">
        <template #header>孔乙己</template>
        <template #body>
          <div>小说描写了孔乙己在封建腐朽思想和科举制度毒害下，精神上迂腐不堪、麻木不仁，生活上四体不勤、穷困潦倒，在人们的嘲笑戏谑中混度时日，最后被封建地主阶级所吞噬的悲惨形象。</div>
        </template>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script lang="ts">
import Collapse from "../../../lib/Collapse.vue";
import CollapseItem from "../../../lib/CollapseItem.vue";
import {ref} from "vue";
export default {
  components: {Collapse, CollapseItem},
  setup() {
    const activeName = ref(['2']);
    return {activeName};
  }
};
</script>
