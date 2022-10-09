<script setup>
import WelcomeItem from './WelcomeItem.vue'
import Experience from './icons/Experience.vue'
import School from './icons/School.vue'
import Skill from './icons/Skill.vue'
import Link from './icons/Link.vue'
import Leetcode from './icons/Leetcode.vue'
import Github from './icons/Github.vue'
import Facebook from './icons/Facebook.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <Experience />
    </template>
    <template #heading>簡歷</template>
    
    <li>一位熱愛IT技術，但不知為何一直在<s>被學長逼迫</s>做網頁專案的人。</li>
    <li>與同系學長<s><a href="https://internet.nizw0.com/" target="_blank" rel="noopener"
    >吳丞恩</a></s>有各種不單純且複雜的關係，時常互相情緒勒索對方。</li>
    <li>被畢業專題跟Side project搞到快得憂鬱症的可憐兒。</li>

    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <School />
    </template>
    <template #heading>學歷</template>
    <li>國立臺東大學 2020-Now</li>
    <li>國立屏東高級中學 2016-2019</li>
    <li>屏東縣長治國中 2013-2016</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Skill />
    </template>
    <template #heading>主要技能</template>
    <li>C++：用於程式競賽。</li>
    <li>Python：用於大多數程式開發<s>(除了網頁)</s>。</li>
    <li>JavaSript：用於網頁程式開發<s>(坐等<a href="https://pyscript.net/" target="_blank" rel="noopener">&lt;PyScript&gt;</a>成熟後能有前端框架)</s>。</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Link />
    </template>
    <template #heading>外部連結</template>
    <li><a href="https://pyscript.net/" target="_blank" rel="noopener"><span><Leetcode /></span>Leetcode</a></li>
    <li><a href="https://pyscript.net/" target="_blank" rel="noopener"><span><Github /></span>GitHub</a></li>
    <li><a href="https://pyscript.net/" target="_blank" rel="noopener"><span><Facebook /></span>Facebook</a></li>

  </WelcomeItem>
</template>
