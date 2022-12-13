'use strict'

exports.__esModule = true
exports.default = {
  global: {
    add: '添加',
    copy: '复制',
    edit: '编辑',
    delete: '删除',
    validate: '校验',
    confirm: '确定',
    cancel: '取消',
    save: '保存',
    refresh: '刷新',
    creator: '创建人',
    operation: '操作',
    successfullySaved: '保存成功',
    helpDoc: '帮助文档',
    desc: '描述',
    type: '类型',
    var: '变量',
    status: '状态',
    name: '名称',
    tips: '提示',
    serviceName: '服务名称',
    realTimeLog: '实时日志',
    inputDesc: '请输入描述信息',
    loading: '加载中...',
    project: '项目',
    workflow: '工作流',
    workflowName: '工作流名称',
    workflowID: '工作流标识',
    number: '序号',
    whetherToDisplay: '是否显示',
    addConfig: '添加配置',
    pleaseInput: '请输入',
    pleaseSelect: '请选择',
    timeout: '超时时间',
    all: '所有',
    key: '键',
    value: '值',
    fileDirectory: '文件目录',
    testName: '测试名称',
    codeLibrary: '代码库',
    errorMsg: '错误信息',
    ok: '知道了',
    startTime: '开始时间',
    endTime: '结束时间',
    execute: '执行',
    confirmation: '确认'
  },
  permission: {
    lackPermission: '无权限操作'
  },
  login: {
    username: '用户名',
    password: '密码',
    mail: '邮箱',
    inputUsername: '请输入用户名',
    inputPass: '请输入密码',
    inputMail: '请输入邮箱',
    inputMailCheck: '请检查邮箱格式',
    inputUserInfo: '请输入新用户信息',
    inputNewPass: '请输入新密码',
    inputNewPassAgain: '请再次输入密码',
    passwordDontMatch: '两次输入密码不一致!',
    passwordLength: '新密码应不小于 8 位字符',
    signIn: '登录',
    signUp: '注册',
    forgotPassword: '找回密码',
    resetPassword: '找回密码',
    resetSuccess: '重置成功',
    confirmReset: '重置密码',
    next: '下一步',
    resetLinkTip: '密码重置链接已经发送至你的注册邮箱',
    setNewPassword: '设置新密码',
    sloganTitle: 'Zadig，让工程师更加专注创造～',
    sloganDesc: '工程师热爱的云原生持续交付平台：具备灵活易用的高并发工作流、面向开发者的云原生环境、高效协同的测试管理、强大免运维的模板库、客观精确的效能洞察以及云原生 IDE 插件等重要特性，为工程师提供统一的协作平面。',
    companyInfo: '筑栈（上海）信息技术有限公司 KodeRover'
  },
  signUp: {
    username: '用户名',
    password: '密码',
    mail: '邮箱',
    nickname: '昵称',
    inputUsername: '请输入用户名',
    inputPass: '请输入密码',
    inputNickname: '请输入昵称',
    inputMail: '请输入邮箱',
    inputMailCheck: '请检查邮箱格式',
    inputUserInfo: '请输入新用户信息',
    signUp: '注册',
    signUpSuccess: '用户注册成功，请登录'
  },
  sidebarMenu: {
    productDelivery: '产品交付',
    status: '运行状态',
    projects: '项目',
    forum: '论坛',
    testCenter: '测试中心',
    deliveryCenter: '交付中心',
    dataViews: '数据视图',
    dataOverview: '数据概览',
    dataInsight: '效能洞察',
    setting: '设置',
    sysSetting: '系统设置',
    integration: '集成管理',
    systemIntegration: '系统集成',
    packages: '软件包管理',
    images: '自定义镜像管理',
    plugins: '工作流任务',
    infraIntegration: '基础设施',
    dockerRegistry: '镜像仓库',
    objectStorage: '对象存储',
    helmRepo: 'HELM 仓库',
    clusters: '集群管理',
    hosts: '主机管理',
    system: '系统',
    settings: '系统配置',
    users: '用户管理',
    announcement: '公告管理',
    auditLog: '操作日志',
    profile: '账号设置',
    preference: '偏好设置',
    enterprise: '企业管理',
    enterpriseInfo: '企业信息',
    license: '许可证',
    releaseCenter: '发布中心',
    releaseWorkflows: '工作流',
    environmentGroups: '环境组',
    customerDelivery: '客户交付',
    deliveryBoard: '交付看板',
    deliveryVersion: '版本',
    deliveryCustomers: '客户'
  },
  topbarMenu: {
    search: '搜索',
    username: '用户名',
    admin: '管理员',
    user: '普通用户',
    users: '用户管理',
    sysSetting: '系统设置',
    enterprise: '企业管理',
    profile: '账号设置',
    signOut: '登出'
  },
  subTopbarMenu: {
    workflows: '工作流',
    environments: '环境',
    services: '服务',
    builds: '构建',
    tests: '测试',
    codeScanner: '代码扫描',
    versions: '版本管理',
    createWorkflow: '新建工作流',
    createEnvironment: '新建环境',
    createBuild: '新建构建',
    createTest: '新建测试',
    createScanner: '新建代码扫描',
    createVersion: '创建版本',
    changeProjectType: '切换项目类型',
    projectConfig: '配置',
    editProject: '修改',
    hostManagement: '主机管理',
    projectPermission: '权限',
    projectCollaborationMode: '协作模式',
    varsGroup: '变量组',
    changeProjectTypeFirstTip: '从「托管项目」切换为「K8s YAML 项目」，项目内资源确认',
    changeProjectTypeSecondTip: '1. 现有项目资源不会变化，将新增服务管理能力',
    changeProjectTypeThirdTip: '2. 托管项目中的所有服务将被纳入到服务管理，环境中关联的 workload 将作为服务配置',
    changeProjectTypeFourthTip: '3. 切换操作不可逆，请谨慎操作',
    changeProjectTypeConfirm: '确认切换项目类型？',
    changeProjectTypeSuccess: '切换项目类型成功!',
    cancelChangeProjectType: '取消切换项目类型'
  },
  profile: {
    profile: '账号设置',
    changePassword: '修改密码',
    oldPassword: '旧密码',
    newPassword: '新密码',
    confirmNewPassword: '确认新密码',
    changeMail: '修改邮箱',
    oldMail: '原邮箱',
    newMail: '新邮箱',
    inputMail: '请输入企业邮箱',
    pleaseCheckMail: '请输入正确的邮箱地址',
    changePhone: '修改手机号码',
    oldPhone: '原手机号码',
    newPhone: '新手机号码',
    inputPhone: '请填写手机号',
    pleaseCheckPhone: '请输入正确的手机号码',
    admin: '管理员',
    user: '普通用户',
    lastAccessedOn: '最近登录',
    source: '用户来源',
    system: '系统创建',
    updatePassword: '修改密码',
    updateMail: '修改邮箱',
    updatePhone: '修改手机号码',
    clickToChange: '点击修改',
    notificationSetting: '通知设置',
    workflowStatusChanged: '工作流状态变更',
    inputNewPass: '请输入新密码',
    inputOldPass: '请输入旧密码',
    inputNewPassAgain: '请再次输入新密码',
    passwordDontMatch: '两次输入密码不一致!',
    copiedToClipboard: '已成功复制到剪贴板',
    copyFailed: '复制失败',
    passwordChangedSuccessfully: '密码修改成功',
    mailChangedSuccessfully: '邮箱修改成功',
    phoneChangedSuccessfully: '手机号码修改成功',
    notificationSettingSavedSuccessfully: '通知设置保存成功',
    uiTheme: '界面颜色主题',
    logColor: '日志颜色',
    backgroundColor: '背景颜色',
    fontColor: '字体颜色',
    defaultTheme: '默认主题',
    darkTheme: '深色主题',
    inputColorHex: '请输入颜色值',
    checkColorHex: '请检查颜色值格式',
    preferenceChangedSuccessfully: '偏好设置保存成功'
  },
  status: {
    noRunningTask: '暂无正在运行的任务',
    productWorkflow: '产品工作流',
    workflow: '工作流',
    codeScanner: '代码扫描',
    viewTaskDetail: '查看任务流程',
    hideTaskDetail: '收起任务流程',
    deleteTask: '删除任务',
    build: '构建',
    unitTest: '单元测试',
    repoName: '代码库',
    coverage: '覆盖率',
    branch: '分支',
    buildInfo: '构建信息',
    scriptBuilding: '脚本构建',
    imgInfo: '镜像信息',
    imgBuilding: '构建镜像',
    deploy: '部署',
    updateEnv: '环境更新',
    service: '服务',
    env: '环境',
    image: '镜像',
    test: '测试',
    testReport: '测试报告',
    distribute: '分发',
    distributeImage: '镜像分发',
    imageRepo: '镜像仓库',
    imageName: '镜像名称',
    queued: '队列中',
    success: '成功',
    cancelQueuedTaskSuccess: '队列任务取消成功',
    cancelRunningTaskSuccess: '运行任务取消成功',
    buildStatus: '构建状态',
    deployStatus: '部署状态'
  },
  project: {
    searchProject: '搜索项目',
    newProject: '新建项目',
    templates: '模板库',
    buildTemplate: '构建',
    workflowTemplate: '工作流',
    editProject: '修改',
    deleteProject: '删除',
    privateProject: '私有项目',
    workflows: '工作流',
    environments: '环境',
    tests: '测试',
    services: '服务',
    builds: '构建',
    codeScanner: '代码扫描',
    versions: '版本管理',
    artifacts: '交付物',
    clusters: '集群',
    noProjects: '暂无可展示的项目，请手动添加项目',
    projectName: '项目名称',
    createProjectComp: {
      projectIdentifier: '项目标识',
      projectIdentifierTip: '项目标识是该项目资源的全局唯一标识符，用于该项目下所有资源的引用与更新，默认自动生成，同时支持手动指定，创建后不可更改',
      type: '项目类型',
      yamlProject: 'K8s YAML 项目',
      yamlProjectFirstDesc: '基础设施使用 Kubernetes',
      yamlProjectSecondDesc: '使用 Kubernetes YAML 管理和部署服务',
      helmProject: 'K8s Helm Chart 项目',
      helmProjectFirstDesc: '基础设施使用 Kubernetes',
      helmProjectSecondDesc: '使用 Helm Chart 管理和部署服务',
      hostingProject: 'K8s 托管项目',
      hostingProjectFirstDesc: '托管现有 Kubernetes 集群中的资源',
      hostingProjectSecondDesc: '支持服务镜像的更新',
      hostsProject: '主机项目',
      hostsProjectFirstDesc: '基础设施使用主机',
      hostsProjectSecondDesc: '使用自定义脚本部署升级服务',
      compatibility: '支持的基础设施列表',
      advancedConfigurations: '高级配置',
      accessPermission: '访问权限',
      projectAdministrator: '项目管理员',
      private: '私有',
      privateDesc: '该项目对系统普通用户默认不可见，项目管理员可通过添加成员对特定用户添加相应权限。',
      public: '公开',
      publicDesc: '用户默认享有公开权限，可查看项目中的工作流、环境、服务、构建、测试等资源。',
      inputUsernameToSearch: '请输入用户名搜索用户',
      selectCluster: '选择项目使用的集群资源',
      specifiedCluster: '指定集群',
      confirmUpdate: '确认修改',
      createNow: '立即新建',
      inputProjectName: '请输入项目名称',
      selectProjectAdmin: '请选择项目管理员',
      selectProjectAccessPermission: '请选择项目权限',
      inputProjectIdentifier: '请填写项目标识',
      inputProjectIdentifierCheck: '项目标识只支持小写字母和数字，特殊字符只支持中划线',
      successfullySaved: '新建项目成功',
      successfullyUpdated: '更新项目成功',
      environmentCounts: '环境',
      environmentsList: '环境信息',
      workflowsList: '工作流信息',
      workflowStage: '步骤',
      lastUpdated: '更新',
      clusterInfo: '归属',
      localCluster: '本地',
      update: '更新信息',
      projectDetail: '配置',
      createProject: '新建项目',
      editProjectInfo: '修改项目信息'
    },
    deleteProjectComp: {
      inputProjectNameToDelete: '请输入项目名 {projectName} 确认删除',
      deleteExternalProjectTip: '该项目下的以下资源会被取消托管，',
      deleteProjectTip: '该项目下的以下资源会同时被删除，',
      deleteProjectCaution: '请谨慎操作！！',
      deleteK8sNamespace: '同时删除环境对应的 K8s 命名空间和服务',
      projectNameDontMatch: '项目名称不相符',
      noResource: '无',
      successfullyDeleted: '项目删除成功'
    }
  },
  templates: {
    k8sYaml: {
      noTemplate: '暂无模板，点击',
      createTemplate: '创建模板',
      createTemplateTooltip: '创建模板',
      selectTemplateToEdit: '请在左侧选择需要编辑的模板',
      inputTemplateName: '请输入模板名称',
      searchTemplate: '搜索模板',
      templateNameIsDuplicated: '模板名称与现有名称重复',
      confirm: '确认',
      confirmToDeleteTemplate: '确定要删除 {name} 这个模板吗？',
      successfullyDeleted: '删除成功',
      tip: '提示',
      confirmToSaveTemplate: '服务配置未保存，是否保存？',
      variablesList: '变量列表',
      referenceList: '引用列表',
      projectName: '项目',
      systemVariables: '系统内置变量',
      customVariables: '自定义变量',
      customVariablesTooltip: '自定义变量通过 {{.key}} 声明',
      noneVariable: '空',
      saveTemplateFirst: '请先保存模板',
      validationSuccess: '校验成功',
      successfullySaved: '变量保存成功',
      applyToServices: '应用到服务',
      successfullyUpdated: '更新模板 {fileName} 成功',
      successfullyCreated: '创建模板 {fileName} 成功',
      applyToServicesTooltip: '确认后，所有开启「自动同步」的服务配置会应用最新的模板。',
      confirmToApply: '确定应用到服务？',
      applyToServicesSuccessfully: '已成功应用到服务'
    },
    helmChart: {},
    dockerfile: {},
    build: {}
  },
  workflowTaskStatus: {
    notRunning: '未运行',
    created: '排队中',
    waiting: '排队中',
    running: '正在运行',
    failed: '失败',
    passed: '成功',
    timeout: '超时',
    cancelled: '取消',
    blocked: '阻塞',
    queued: '队列中',
    skipped: '跳过',
    prepare: '准备环境',
    reject: '拒绝'
  },
  workflow: {
    ascendingByName: '按名称升序',
    descendingByName: '按名称降序',
    ascendingByCreationTime: '按创建时间升序',
    descendingByCreationTime: '按创建时间降序',
    addView: '新建视图',
    editView: '编辑视图',
    delView: '删除视图',
    searchWorkflow: '搜索工作流',
    noWorkflow: '暂无可展示的工作流，请手动新建工作流',
    productWorkflow: '产品工作流',
    productWorkflowAbility: '具备模块化组装构建、部署、测试和版本交付能力',
    customWorkflow: '自定义工作流',
    customWorkflowAbility: '可自定义工作流步骤和自由编排执行顺序',
    releaseWorkflow: '发布工作流',
    releaseWorkflowAbility: '可自由编排发布流程，具备蓝绿、金丝雀、灰度发布等能力',
    chooseWorkflowType: '选择工作流类型',
    runProductWorkflow: '运行 产品-工作流',
    runWorkflow: '执行工作流',
    viewName: '视图名称',
    inputViewName: '请填写视图名称',
    selectWorkflow: '选择工作流',
    addEmptyWorkflow: '新建空白工作流',
    use: '使用',
    customWorkflowTemplate: '自定义工作流模板',
    releaseWorkflowTemplate: '发布工作流模板',
    builtInTemplate: '内置模板',
    selectTemplate: '选择模板',
    delWorkflow: '删除工作流',
    confirmWorkflowName: '输入工作流名称确认',
    delSuccess: '删除成功',
    inputWorkflowName: '请输入工作流名称',
    nameMismatch: '名称不相符',
    cancelDel: '取消删除',
    newWorkflowName: '新工作流名称',
    newWorkflowID: '新工作流标识',
    copyWorkflow: '复制工作流',
    cancelCopyWorkflow: '取消复制',
    copyWorkflowSuccess: '复制工作流成功',
    duplicateWorkflowName: '工作流名称重复',
    addSuccess: '新增成功',
    updateSuccess: '编辑成功',
    delScuuess: '删除成功',
    run: '执行',
    noAuth: '无权限操作',
    close: '关闭',
    open: '打开',
    timer: '定时器',
    timerOpenSuccess: '定时器开启成功',
    timerCloseSuccess: '定时器关闭成功',
    inputWorkflowID: '请输入工作流标识',
    custom: '自定义',
    release: '发布',
    product: '产品',
    recentSuccess: '最近成功',
    recentFail: '最近失败',
    averageExecutionTime: '平均执行时间',
    successRate: '成功率',
    cancelFavoriteSuccess: '取消收藏成功',
    addFavoriteSuccess: '添加收藏成功',
    customWorkflowsDonotSupportCollections: '自定义工作流暂不支持收藏！',
    releaseWorkflowsDonotSupportCollections: '发布工作流暂不支持收藏！',
    updateBy: '修改人',
    lastModify: '最后修改时间',
    historyTask: '历史任务',
    runStatus: '运行状态',
    duration: '持续时间',
    executor: '执行人',
    codeInfo: '代码信息',
    env: '环境',
    testResults: '测试结果',
    clone: '克隆',
    startTask: '启动任务',
    manualReview: '人工审核',
    workflowVars: '工作流变量',
    cancelSuccess: '取消成功',
    jobType: {
      build: '构建',
      deploy: '部署',
      approval: '审批',
      freestyle: '通用任务',
      plugin: '插件',
      test: '测试',
      scan: '扫描',
      distribute: '镜像分发',
      customDeploy: 'Kubernetes 部署',
      canaryDeploy: '金丝雀发布',
      canaryConfirm: '金丝雀部署',
      blueGreenDeploy: '部署蓝绿环境',
      blueGreenConfirm: '蓝绿发布',
      k8sResourcePatch: '更新 K8s YAML 任务',
      k8sGrayRollback: '灰度回滚',
      grayDeploy: '灰度发布',
      istioRelease: 'Istio 发布',
      istioRollback: 'Istio 回滚'
    },
    imageName: '镜像名称',
    deploymentEnv: '部署环境',
    deploymentService: '部署服务',
    serviceStatusCheck: '服务状态检测',
    notOpenServiceStatusCheck: '未开启服务状态检测',
    serviceStatusCheckPassed: '服务状态检测通过',
    serviceStatusCheckFailed: '服务状态检测未通过',
    scanName: '扫描名称',
    link: '链接',
    view: '查看',
    projectName: '项目名称',
    fileExport: '文件导出',
    testReport: '测试报告',
    download: '下载',
    k8sServiceName: 'K8s service 名称',
    containerName: '容器名称',
    cluster: '集群',
    namespace: '命名空间',
    time: '时间',
    message: '信息',
    ui: '界面化',
    desc: '描述信息',
    jobName: '任务名称',
    serviceComponent: '服务组件',
    buildName: '构建名称',
    buildConfig: '构建配置',
    varConfig: '变量配置',
    branchConfig: '分支配置',
    storageConfig: '共享存储配置',
    sensitiveInformation: '敏感信息',
    containerStatusDetection: '容器状态检测',
    scanConfig: '扫描配置',
    chooseScan: '选择扫描',
    grayPercentage: '灰度百分比',
    grayTaskType: '灰度任务类型',
    resourceName: '资源名称',
    updateContent: '更新内容',
    job: '任务',
    stage: '阶段',
    stageName: '阶段名称',
    concurrentExecution: '并发执行',
    preStep: '前置步骤',
    manualApproval: '人工审批',
    approvalWay: '审批方式',
    reviewer: '审核人',
    revieweNumber: '需要审核人数',
    approvalApplication: '审批应用',
    selectApprover: '选择审批人',
    addStage: '新建阶段',
    editStage: '编辑阶段',
    webhookType: 'Webhook 类型',
    notifyEvents: '通知事件',
    webhookAddr: 'Webhook 地址',
    specifyMembersTip1: '@指定成员（输入指定通知接收人的手机号码，使用 ; 分割，为空则全员通知）',
    specifyMembersTip2: '@指定成员（输入指定通知接收人的 user_id，使用 ; 分割）',
    notifyType: {
      passed: '任务成功',
      failed: '任务失败',
      timeout: '任务超时',
      cancelled: '任务取消',
      changed: '状态变更',
      reject: '任务拒绝',
      waitforapprove: '等待人工审批'
    },
    addNotify: '新建通知',
    editNotify: '编辑通知',
    runPolicy: '运行策略',
    shareDirectory: '共享目录',
    inputShareDirectory: '请输入共享目录',
    addTrigger: '添加触发器',
    editTrigger: '编辑触发器',
    targetBranch: '目标分支',
    triggerStrategy: '触发策略',
    workflowExecutionVariables: '工作流执行变量',
    triggerEvents: '触发事件',
    baseType: {
      var: '变量',
      trigger: '触发器',
      notify: '通知',
      high: '高级配置'
    },
    selectService: '选择服务',
    distributionWay: '分发方式',
    triggerWay: '触发方式',
    timeConfig: '时间配置',
    workflowParams: '工作流参数',
    addTimer: '添加定时器',
    editTimer: '修改定时器',
    cronExpressionAnalysis: 'Cron 表达式解析',
    addTest: '添加测试',
    regularExpressionConfiguration: '正则表达式配置',
    inputRegExpressionConfiguration: '请输入正则表达式配置',
    selectTargetBranch: '请选择目标分支',
    selectNotifyType: '请选择通知类型',
    inputWechatWebhook: '请填写企业微信 Webhook',
    inputDingDingWebhook: '请填写钉钉 Webhook',
    inputFeishuWebhook: '请填写飞书 Webhook',
    auditResults: '审核结果',
    auditTime: '审核时间',
    comments: '评论信息'
  },
  webhookType: {
    dingding: '钉钉',
    wechat: '企业微信',
    feishu: '飞书'
  },
  approvalType: {
    feishu: '飞书审批',
    manualApproval: '人工审批'
  },
  triggerWay: {
    timingCycle: '定时循环',
    gapCycle: '间隔循环',
    cronExpression: 'Cron 表达式'
  },
  productWorkflowSideBar: {
    base: '基本信息',
    build: '构建部署',
    artifact: '交付物部署',
    test: '测试',
    distribute: '分发部署',
    expand: '扩展',
    trigger: '触发器',
    notify: '通知'
  },
  resetPolicy: {
    taskCompleted: '任务执行完成',
    deployFailed: '部署结果失败',
    testFailed: '测试结果失败'
  },
  productWorkflowStage: {
    buildv2: '构建',
    build: '构建部署',
    deploy: '部署',
    artifact: '交付物部署',
    test: '测试',
    testingv2: '测试',
    release_image: '分发',
    distribute: '分发部署'
  },
  sysSetting: {
    integration: {
      accountsTab: '账号系统',
      projectTab: '项目管理',
      gitProvidersTab: '代码源',
      configsTab: '配置管理',
      jenkinsTab: 'Jenkins 集成',
      sonarTab: 'Sonar 集成',
      approvalSystemTab: '审批系统',
      otherSystemTab: '其他系统',
      gitProviders: {
        notIntegrated: '检测到代码源尚未集成请先集成代码源后再进行相关操作',
        provider: '代码源',
        otherProvider: '其他',
        giteeCE: 'Gitee （社区版）',
        giteeEE: 'Gitee （企业版）',
        providerAlias: '代码源标识',
        authStatus: '授权信息',
        authSuccess: '授权成功',
        authFailed: '授权失败',
        lastUpdated: '最后更新',
        enableProxy: '开启代理',
        editProvider: '编辑',
        deleteProvider: '删除',
        tip: '支持集成代码源，支持 GitLab、GitHub、Gerrit、Gitee 集成，详情可参考',
        addProviderTitle: '代码管理-添加',
        editProviderTitle: '代码管理-编辑',
        referToDoc: '详细配置可参考',
        appAuthCallbackTip: '应用授权的回调地址请填写：',
        appPermissionCheckTip: '应用权限请勾选：',
        otherProviderTipFirst: '支持标准 Git 协议的代码源',
        otherProviderTipSecond: '集成后，构建/测试模版可从该代码源拉取代码',
        copyAddrSuccess: '地址已成功复制到剪贴板',
        copyAddrFailed: '地址复制失败',
        gitlabUrl: 'GitLab 服务 URL',
        gerritUrl: 'Gerrit 服务 URL',
        giteeUrl: 'Gitee 服务 URL',
        providerUrl: '代码源 URL',
        authMethod: '鉴权方式',
        username: '用户名',
        password: '密码',
        selectProvider: '请选择代码源类型',
        inputAddress: '请输入 URL，包含协议',
        inputAccessToken: '请填写 Access Token',
        inputAppId: '请填写 Id',
        inputclientSecret: '请填写 Secret',
        inputUsername: '请填写 Username',
        inputPass: '请填写 Password',
        inputSSHKey: '请输入 SSH Key',
        inputPrivateAccessToken: '请输入 Access token',
        inputAlias: '请填写代码源标识',
        inputOtherProviderUrl: '请输入服务 URL',
        checkOtherProviderUrl: '请输入正确的格式',
        selectAuthMethod: '请选择鉴权方式',
        goToAuthorization: '前往授权',
        proxyIsEnabled: '已启用代理',
        proxyIsDisabled: '已关闭代理',
        noProxy: '未配置代理，请先前往「系统配置」->「代理配置」配置代理！',
        proxyEnableFailed: '代理修改失败：',
        getProxyConfigurationFailed: '获取代理配置失败：',
        confirmDeleteProvider: '确定要删除这个代码源吗？',
        deleteProviderSuccess: '代码源删除成功',
        addProviderSuccess: '代码源添加成功',
        changeProviderInfoSuccess: '代码源修改成功',
        changeProviderInfoSuccessAndGoToAuth: '代码源修改成功，正在前往授权'
      },
      accounts: {
        account: '账号系统名称',
        accountType: '账号系统类型',
        custom: '自定义'
      }
    },
    packages: {
      addPackage: '添加软件包',
      version: '版本',
      versionExample: '例如：1.0.0',
      enable: '启用',
      enableTooltip: '控制软件包列表中是否展示，正在使用中的不受影响',
      enableCurrentPackage: '启用该软件包',
      packageAddress: '安装包地址',
      // eslint-disable-next-line no-template-curly-in-string
      packageAddressTooltip: '系统自动从配置地址下载安装包并做缓存，安装包可通过 ${FILEPATH} 变量获取',
      installScript: '安装脚本',
      editPackage: '修改软件包-{name} {version}',
      referToDoc: '运行构建及测试步骤时，根据实际业务去安装必要的软件包，详情可参考',
      enableProxy: '启用代理',
      updateTime: '更新时间',
      updator: '更新人',
      inputPackageName: '请填写软件包名称',
      inputPackageVersion: '请填写软件包版本',
      inputInstallScript: '请填写安装脚本',
      inputPackageBinPath: '请填写软件包 Bin Path',
      addPackageSuccess: '添加软件包成功',
      addPackageFailed: '添加软件包失败',
      updatePackageSuccess: '更新软件包成功',
      updatePackageFailed: '更新软件包失败',
      packageHasBeenDeleted: '软件包已删除',
      cancelDelete: '已取消删除',
      deleteTip: '删除软件包可能会影响正在使用的工作流，确定删除 {name} 的 {version} 版本吗？',
      noProxy: '未配置代理，请先前往「系统配置」->「代理配置」配置代理！',
      proxyIsEnabled: '启用代理成功！',
      proxyIsDisabled: '成功关闭代理！',
      changeProxyFailed: '修改配置失败：{error}',
      getProxyConfigurationFailed: '获取代理配置失败：{error}'
    },
    images: {
      addImage: '添加镜像',
      label: '标签',
      imageName: '镜像名称',
      imageNamePlaceholder: '仓库地址/命名空间/镜像名:标签',
      editImage: '修改镜像',
      referToDoc: '项目的构建、测试和代码扫描可以使用自定义镜像作为基础环境镜像，自定义镜像中需要添加一些必要软件包，详情可参考',
      inputLabel: '请输入镜像标签',
      inputImageName: '请输入镜像名称',
      deleteTip: '确定要删除 {label} 这个镜像吗？',
      confirm: '删除镜像确认',
      imageHasBeenDeleted: '镜像已删除',
      addImageSuccess: '添加镜像成功',
      updateImageSuccess: '更新镜像成功'
    },
    plugins: {},
    registry: {},
    storage: {},
    helmRepo: {
      addHelmChartRepo: '添加 HELM Chart 仓库',
      editHelmChartRepo: '编辑 HELM Chart 仓库',
      urlPlaceholder: '请输入 http/https/acr 开头的 URL',
      repoName: '仓库名称',
      inputRepoName: '请输入仓库名称',
      username: '用户名',
      inputUsername: '请输入用户名',
      inputPassword: '请输入密码',
      password: '密码',
      referToDoc: '支持集成自建 Harbor 仓库及阿里、腾讯、华为等云厂商提供的 Chart 仓库，详情可参考',
      lastModified: '最后修改',
      protocolCheck: '请确保协议以 http/https/acr 开头',
      inputUrl: '请输入 URL',
      deleteTip: '确定要删除 {repoName} 仓库？',
      confirm: '确认',
      repoHasBeenDeleted: '删除成功',
      addRepoSuccess: '添加成功',
      updateRepoSuccess: '更新成功'
    },
    clusters: {},
    hosts: {},
    settings: {},
    users: {
      users: '用户',
      systemRoles: '系统角色',
      addUser: '新建用户',
      username: '用户名',
      password: '密码',
      mail: '邮箱',
      nickname: '昵称',
      phone: '手机',
      role: '角色',
      selectRole: '请选择角色',
      searchUser: '搜索用户',
      inputNickname: '请输入昵称',
      userRegistration: '用户注册',
      admin: '管理员',
      loginInfo: '登录信息',
      notLoggedIn: '尚未登录',
      source: '来源',
      inputUsername: '请输入用户名',
      inputMail: '请输入登录邮箱',
      checkMail: '请输入正确的邮箱地址',
      inputPassword: '请输入密码',
      deleteUserTip: '确定删除 {type} 用户 {name}',
      tip: '提示',
      identityTypeSystem: '系统创建',
      userHasBeenDeleted: '用户删除成功',
      cancelDelete: '已取消删除',
      addImageSuccess: '新建用户成功',
      changeUserRegistrationStatusSuccess: '更改成功',
      roleTip: '可定义系统级别的角色，包括数据概览、效能洞察、测试中心、交付中心、模板库模块的权限控制',
      roleName: '角色名称',
      roleDesc: '描述信息',
      permissionList: '权限列表',
      deleteRoleTip: '此角色的成员权限也会被删除，请谨慎操作',
      deleteRoleConfirm: '确定删除 {name} 这个系统角色',
      roleHasBeenDeleted: '系统角色删除成功',
      inputRoleName: '请填写角色名称',
      roleNameCheck: '角色名称只支持小写字母和数字，特殊字符只支持中划线',
      addRoleSuccess: '添加成功',
      updateRoleSuccess: '修改成功',
      updateUserSuccess: '用户信息修改成功',
      updateUserInfoDialogTitle: '编辑 {name} 的用户信息'
    },
    announcement: {
      addAnnouncement: '添加公告',
      title: '标题',
      priority: '优先级',
      selectPriority: '请选择优先级',
      high: '高',
      medium: '中',
      low: '低',
      timeRange: '时间范围',
      startTime: '开始时间',
      timeTo: '至',
      endTime: '结束时间',
      content: '内容',
      editAnnouncement: '编辑公告',
      inputTitle: '请输入公告标题',
      inputContent: '请填写公告内容',
      selectStartTimeAndEndTime: '请选择起止时间',
      announcementHasBeenDeleted: '公告已删除',
      addAnnouncementSuccess: '新增公告成功',
      addAnnouncementFailed: '新增公告失败',
      editAnnouncementSuccess: '编辑公告成功',
      editAnnouncementFailed: '编辑公告失败'
    },
    auditLog: {
      APIPayloadDialogTitle: 'API 请求： {time}',
      noPayload: '暂无请求 Payload 信息',
      selectType: '请选择查询类型',
      username: '用户名',
      project: '项目',
      function: '功能',
      statusCode: '状态码',
      inputKeyword: '请输入关键字',
      search: '查询',
      time: '时间',
      detail: '详情',
      APIPayload: 'API 请求',
      searchCompleted: '查询完毕'
    }
  },
  testing: {
    noTestsErrorMessage: '暂无可展示的测试用例，请手动新建测试',
    searchTests: '搜索测试',
    caseCount: '用例数量',
    executionCount: '执行次数',
    averageExecutionTime: '平均执行时间',
    successRate: '成功率',
    creationSuccess: '任务启动成功',
    deletionConfirmation: '确定要删除 {name} 吗？',
    deletionSuccess: '删除成功',
    triggers: {
      workflowTriggers: '已关联的工作流',
      selectWorkflowTriggers: '选择关联的工作流',
      selectWorkflowTriggersII: '请选择要关联的工作流，支持搜索',
      creationSuccess: '关联工作流成功',
      deletion: '取消关联',
      deletionSuccess: '移除关联成功',
      deletionCancellation: '已取消删除',
      deletionConfirmation: '确定要取消和工作流 {name} 的关联'
    },
    details: {
      name: '测试名称',
      description: '描述信息',
      parameters: '测试变量',
      scripts: '测试脚本',
      report: {
        configuration: '测试报告配置',
        JunitReportDirectory: 'Junit 报告所在目录',
        HTMLReportFileDirectory: 'HTML 报告文件地址',
        HTMLReportFileTooltip: 'HTML 测试报告文件将包含在工作流发送的 IM 通知内容中'
      },
      advancedSettings: {
        title: '高级配置'
      }
    },
    validation: {
      testNameInsertionPrompt: '请输入测试名称',
      testNameVaidationError: '名称只支持字母和数字，特殊字符只支持中划线和下划线',
      testDescriptionInsertionPrompt: '请输入描述信息',
      testReportDirectoryInsertionPrompt: '请输入测试报告目录',
      testReportFileInsertionPrompt: '请输入测试报告文件'
    },
    summary: {
      latest: '最新一次测试报告',
      caseCount: '总测试用例',
      successCount: '成功用例',
      failCount: '失败用例',
      errorCount: '错误用例',
      unstartCount: '未执行用例',
      timeConsumption: '测试用时',
      checkCases: '查看用例',
      caseDetails: '详细用例（可滚动查看）'
    },
    history: {
      title: '历史任务'
    },
    status: {
      success: '成功',
      fail: '失败',
      unstart: '未执行',
      error: '错误'
    },
    display: {
      failReason: '失败原因:',
      failMessage: '失败信息:',
      failDetail: '失败详情:',
      standardOut: '标准输出:',
      errorMessage: '错误信息:',
      errorDetail: '错误详情:',
      errorType: '错误类型:'
    }
  }
}
