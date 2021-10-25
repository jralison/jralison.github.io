<script setup lang="ts">
import { BrandGithub, BrandGitlab, BrandLinkedin } from '@vicons/tabler'
import { useGTag } from './plugins/gtag'
import { useMatomo } from './plugins/matomo'

useMatomo()
useGTag()

const redesSociais: { url: string, rotulo: string, icone?: any, corFundo?: string, corTexto?: string }[] = [
  {
    rotulo: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jralison',
    corFundo: 'hover:bg-blue-600 focus:bg-blue-600',
    corTexto: 'hover:text-white focus:text-white',
    icone: BrandLinkedin,
  },
  {
    rotulo: 'Github',
    url: 'https://www.github.com/jralison',
    corFundo: 'hover:bg-gray-600 focus:bg-gray-600',
    corTexto: 'hover:text-white focus:text-white',
    icone: BrandGithub,
  },
  {
    rotulo: 'GitLab',
    url: 'https://www.gitlab.com/jralison',
    corFundo: 'hover:bg-yellow-600 focus:bg-yellow-600',
    corTexto: 'hover:text-white focus:text-white',
    icone: BrandGitlab,
  },
]
</script>

<template>
  <div class="h-full flex flex-col gap-4 place-content-center space-y-8">
    <div class="mx-auto">
      <div class="flex flex-col sm:flex-row gap-4 sm:space-x-4">
        <div class="flex-none self-center">
          <img src="/me.jpg"
               class="object-cover rounded-full w-28 h-28 transform scale-110 sm:scale-100 sm:hover:scale-125 transition-transform ring ring-white ring-opacity-40"
               alt="Uma foto minha com duas pulseiras na mão, me observando no reflexo do computador"
          />
        </div>
        <div class="flex-1 self-center text-white antialiased">
          <h1 class="text-5xl font-semibold leading-none">Jonathan Souza</h1>
          <div class="font-light mt-3">
            <div class="text-2xl leading-normal">Desenvolvedor Web Fullstack</div>
            <div class="text-lg leading-none">
              <a href="https://qstione.com.br/?ref=jralison.com"
                 class="hover:underline focus:underline">@Plataforma Qstione</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="redesSociais.length > 0" class="mx-auto text-center text-white">
      <div class="uppercase text-sm tracking-wide font-semibold">Me encontre nas redes sociais</div>
      <div class="h-min space-x-4 space-y-4">
        <a
          v-for="item in redesSociais"
          :key="item.url"
          :class="['socialLink', item.corTexto || '', item.corFundo || '']"
          :href="item.url"
        >
          <component :is="item.icone" class="w-6 h-6 -mt-0.5 mr-1 inline-block object-scale-down" />
          <span>{{ item.rotulo }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
::selection {
    @apply bg-blue-50 bg-opacity-50;
}

.socialLink::selection {
    @apply bg-blue-300 bg-opacity-50;
}

.socialLink {
    @apply inline-block py-2 px-5 rounded-md;
    @apply border-2 border-blue-50 border-opacity-0 hover:border-opacity-100 focus:border-opacity-100;
    @apply bg-gray-50 hover:bg-gray-300 focus:bg-gray-300;
    @apply text-black uppercase font-semibold antialiased;
    @apply transform transition-all focus:outline-none;
}
</style>
