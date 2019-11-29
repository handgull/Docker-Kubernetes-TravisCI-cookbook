module.exports = {
  title: 'Docker, Kubernetes & Travis CI',
  description: 'I primi passi verso il Dev Ops',
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'handgull/Docker-Kubernetes-TravisCI-cookbook',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Docker', link: '/docker/' },
      { text: 'Travis CI', link: '/travis/' },
      { text: 'Kubernetes', link: '/kubernetes/' }
    ],
    sidebar: {
      '/docker/': getDockerSidebar('Docker', 'Travis CI', 'Kubernetes'),
      '/travis/': getTravisSidebar('Docker', 'Travis CI', 'Kubernetes'),
      '/kubernetes/': getKubernetesSidebar('Docker', 'Travis CI', 'Kubernetes'),
    }
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
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
        './manipulating-containers/'
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
