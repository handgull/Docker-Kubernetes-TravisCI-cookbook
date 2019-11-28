module.exports = {
  title: 'Docker, Kubernetes & Travis CI',
  description: 'I primi passi verso il Dev Ops',
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'handgull/Docker-Kubernetes-TravisCI-cookbook',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Docker', link: '/docker/' },
      { text: 'Kubernetes', link: '/kubernetes/' },
      { text: 'Travis CI', link: '/travis/' }
    ],
    sidebar: {
      '/docker/': getDockerSidebar('Docker', 'Kubernetes', 'Travis CI'),
      '/kubernetes/': getKubernetesSidebar('Docker', 'Kubernetes', 'Travis CI'),
      '/travis/': getTravisSidebar('Docker', 'Kubernetes', 'Travis CI'),
    }
  }
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
        '../kubernetes/'
      ]
    }, {
      title: groupC,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '../travis/'
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
      sidebarDepth: 2,
      children: [
        ''
      ]
    }, {
      title: groupC,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '../travis/'
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
      sidebarDepth: 0,
      children: [
        '../kubernetes/'
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
