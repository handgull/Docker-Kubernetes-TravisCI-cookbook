module.exports = {
  title: 'Docker, Kubernetes & Travis CI',
  description: 'I primi passi verso il Dev Ops',
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'handgull/Docker-Kubernetes-TravisCI-cookbook/',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Docker', link: '/docker/' },
      { text: 'Travis CI', link: '/travis/' },
      { text: 'Kubernetes', link: '/kubernetes/' }
    ],
    sidebar: {
      '/docker/': getDockerSidebar('Docker', 'Travis CI', 'Kubernetes (K8s)'),
      '/travis/': getTravisSidebar('Docker', 'Travis CI', 'Kubernetes (K8s)'),
      '/kubernetes/': getKubernetesSidebar('Docker', 'Travis CI', 'Kubernetes (K8s)'),
    },
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    ['@vuepress/pwa', {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: true
    }],
    ['vuepress-plugin-code-copy', true]
  ]
}

function getDockerSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '',
        './manipulating-containers/',
        './custom-images/',
        './docker-compose/'
      ]
    }, {
      title: groupB,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '../travis/'
      ]
    }, {
      title: groupC,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '../kubernetes/'
      ]
    }
  ]
}

function getTravisSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '../docker/',
      ]
    }, {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ''
      ]
    }, {
      title: groupC,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '../kubernetes/'
      ]
    }
  ]
}

function getKubernetesSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '../docker/'
      ]
    }, {
      title: groupB,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '../travis/'
      ]
    }, {
      title: groupC,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ''
      ]
    }
  ]
}
