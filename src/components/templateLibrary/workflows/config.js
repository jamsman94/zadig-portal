const validateJobName = (rule, value, callback) => {
  const reg = /^[a-z][a-z0-9-]{0,32}$/
  if (value === '') {
    callback(new Error('请输入任务名称'))
  } else if (!reg.test(value)) {
    callback(
      new Error(
        '支持小写英文字母、数字或者中划线，必须小写英文字母开头，最多 32 位。'
      )
    )
  } else {
    callback()
  }
}
const tabList = [
  {
    label: '界面化',
    name: 'ui'
  },
  {
    label: 'YAML',
    name: 'yaml'
  }
]
const buildTabList = [
  {
    label: '变量',
    name: 'env'
  },
  {
    label: '分支配置',
    name: 'branch'
  }
]
const jobTabList = [
  {
    label: '基本配置',
    name: 'base'
  },
  {
    label: '变量',
    name: 'env'
  }
]
const jobTypeList = [
  // {
  //   label: '自定义',
  //   name: 'custom',
  //   tip: '自定义'
  // },

  {
    label: 'build',
    name: 'zadig-build',
    type: 'zadig-build',
    is_offical: true,
    description: '可直接引用「项目」-「构建」模块中的配置'
  },
  {
    label: 'deploy',
    name: 'zadig-deploy',
    type: 'zadig-deploy',
    is_offical: true,
    description: '可更新容器形态的服务镜像'
  },
  {
    label: 'freestyle',
    name: 'freestyle',
    type: 'freestyle',
    is_offical: true,
    description: '支持拉取代码、执行 Shell 脚本、文件存储等功能'
  },
  {
    label: 'customDeploy',
    name: 'custom-deploy',
    type: 'custom-deploy',
    is_offical: true,
    description: '可更新 Kubernetes 中容器镜像'
  },
  {
    label: 'test',
    name: 'zadig-test',
    type: 'zadig-test',
    is_offical: true,
    description: '可直接引用「项目」-「测试」模块中的测试配置'
  },
  {
    label: 'scan',
    name: 'zadig-scanning',
    type: 'zadig-scanning',
    is_offical: true,
    description: '可直接引用「项目」-「代码扫描」模块中的配置。'
  },
  {
    label: '更新 K8s YAML 任务',
    name: 'update-k8s-resource',
    type: 'k8s-resource-patch',
    is_offical: true,
    description: '使用原生 Kubernetes Patch 能力更新 YAML',
    workflowType: 'release'
  },
  {
    label: 'blueGreenDeploy',
    name: 'blue-green-deploy',
    type: 'k8s-blue-green-deploy',
    is_offical: true,
    description: '基于 Kubernetes 原生的能力创建蓝绿环境',
    workflowType: 'release'
  },
  {
    label: 'blueGreenDeploy',
    name: 'blue-green-release',
    type: 'k8s-blue-green-release',
    is_offical: true,
    description: '结合前置的 [部署蓝绿环境] 任务，执行蓝绿发布',
    workflowType: 'release'
  },
  {
    label: 'canaryDeploy',
    name: 'canary-deploy',
    type: 'k8s-canary-deploy',
    is_offical: true,
    description: '基于 Kubernetes 原生的能力部署金丝雀',
    workflowType: 'release'
  },
  {
    label: 'canaryConfirm',
    name: 'canary-confirm',
    type: 'k8s-canary-release',
    is_offical: true,
    description: '结合前置的 [部署金丝雀] 任务执行金丝雀发布',
    workflowType: 'release'
  },
  {
    label: 'grayDeploy',
    name: 'gray-deploy',
    type: 'k8s-gray-rollback',
    is_offical: true,
    description: '基于 Kubernetes 原生的能力执行回滚任务，滚动升级到灰度之前状态',
    workflowType: 'release'
  },
  {
    label: 'canaryDeploy',
    name: 'gray-deploy',
    type: 'k8s-gray-release',
    is_offical: true,
    description: '基于 Kubernetes 原生的能力执行灰度发布',
    workflowType: 'release'
  },
  {
    label: 'distribute',
    name: 'zadig-distribute-image',
    type: 'zadig-distribute-image',
    is_offical: true,
    description: '可将镜像 Retag 后推送到镜像仓库',
    workflowType: 'common'
  }
]
const configList = [
  {
    label: 'var',
    value: 'env'
  },
  {
    label: 'high',
    value: 'high'
  }
]
const jobType = {
  build: 'zadig-build',
  deploy: 'zadig-deploy',
  approval: 'zadig-approval',
  common: 'freestyle',
  freestyle: 'freestyle',
  plugin: 'plugin',
  k8sDeploy: 'custom-deploy',
  test: 'zadig-test',
  scanning: 'zadig-scanning',
  canaryDeploy: 'k8s-canary-deploy',
  canaryConfirm: 'k8s-canary-release',
  blueGreenDeploy: 'k8s-blue-green-deploy',
  blueGreenConfirm: 'k8s-blue-green-release',
  JobTest: 'zadig-test',
  k8sResourcePatch: 'k8s-resource-patch',
  k8sGrayRollback: 'k8s-gray-rollback',
  grayDeploy: 'k8s-gray-release',
  distribute: 'zadig-distribute-image'
}
const editorOptions = {
  mode: 'yaml',
  theme: 'neo',
  lineNumbers: true,
  lineWrapping: true,
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
  autofocus: true,
  extraKeys: {
    'Ctrl-Space': 'autocomplete'
  }
}
const buildEnvs = [
  {
    variable: '$WORKSPACE',
    desc: '工作目录'
  },
  {
    variable: '$TASK_ID',
    desc: '工作流任务 ID'
  },
  {
    variable: '$BUILD_URL',
    desc: '构建任务的 URL'
  },
  {
    variable: '$CI',
    desc: '值恒等于 true，表示当前环境是 CI/CD 环境'
  },
  {
    variable: '$ZADIG',
    desc: '值恒等于 true，表示在 ZADIG 系统上执行脚本'
  },
  {
    variable: '$REPONAME_<index>',
    desc: '指定 <index> 的代码库名称，其中 <index> 为构建配置中代码的位置，初始值为 0'
  },
  {
    variable: '$REPO_<index>',
    desc:
      '指定 <index> 的代码库名称（可用于代码信息相关变量名，仓库名称中的中划线 "-" 替换成下划线"_"），其中 <index> 为构建配置中代码的位置，初始值为 0'
  },
  {
    variable: '$<REPO>_PR',
    // eslint-disable-next-line
    desc: '构建时使用的代码 Pull Request 信息，其中 <REPO> 是具体的代码仓库名称，使用时可以填写仓库名称或者结合 $REPO_<index> 变量使用，比如可以通过 eval PR=\${${REPO_0}_PR} 方式获取第一个代码库的 Pull Request 信息，如选择多个 PR，变量值形如 1,2,3'
  },
  {
    variable: '$<REPO>_BRANCH',
    // eslint-disable-next-line
    desc: '构建时使用的代码分支信息，其中 <REPO> 是具体的代码仓库名称，使用时可以填写仓库名称或者结合 $REPO_index 变量使用，比如可以通过 eval BRANCH=\\${${REPO_0}_BRANCH} 方式获取第一个代码库的分支信息'
  },
  {
    variable: '$<REPO>_TAG',
    // eslint-disable-next-line
    desc: '构建时使用代码 Tag 信息，其中 <REPO> 是具体的代码仓库名称，使用时可以填写仓库名称或者结合 $REPO_index 变量使用，比如可以通过 eval TAG=\\${${REPO_0}_TAG} 方式获取第一个代码库的分支信息'
  },
  {
    variable: '$<REPO>_COMMIT_ID',
    // eslint-disable-next-line
    desc: '构建时使用代码 Commit 信息，其中 <REPO> 是具体的代码仓库名称，使用时可以填写仓库名称或者结合 $REPO_index]变量使用，比如可以通过 eval COMMITID=\\${${REPO_0}_COMMIT_ID} 方式获取第一个代码库的 COMMIT 信息'
  },
  {
    variable: '',
    desc: '如使用 其他 代码源，$<REPO>_PR 和 $<REPO>_COMMIT_ID 变量不支持'
  }
]
const globalConstEnvs = [
  '{{.project}}',
  '{{.workflow.name}}',
  '{{.workflow.task.id}}',
  '{{.workflow.task.creator}}',
  '{{.workflow.task.timestamp}}'
]
const notifyType = [
  {
    label: 'passed',
    desc: 'passed'
  },
  {
    label: 'failed',
    desc: 'failed'
  },
  {
    label: 'timeout',
    desc: 'timeout'
  },
  {
    label: 'cancelled',
    desc: 'cancelled'
  },
  {
    label: 'changed',
    desc: 'changed'
  },
  {
    label: 'reject',
    desc: 'reject'
  },
  {
    label: 'waitforapprove',
    desc: 'waitforapprove'
  }
]
const notifyPlatform = [
  {
    label: 'dingding',
    desc: '钉钉'
  },
  {
    label: 'wechat',
    desc: '企业微信'
  },
  {
    label: 'feishu',
    desc: '飞书'
  }]
const editorJsonOptions = {
  mode: 'application/json',
  theme: 'neo',
  lineNumbers: true,
  lineWrapping: true,
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
  autofocus: true,
  extraKeys: {
    'Ctrl-Space': 'autocomplete'
  }
}
export {
  validateJobName,
  editorJsonOptions,
  tabList,
  buildTabList,
  configList,
  jobTabList,
  jobTypeList,
  editorOptions,
  jobType,
  buildEnvs,
  globalConstEnvs,
  notifyType,
  notifyPlatform
}
