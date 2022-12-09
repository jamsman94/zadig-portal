'use strict'

exports.__esModule = true
exports.default = {
  global: {
    add: 'Add',
    copy: 'Copy',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    save: 'Save',
    refresh: 'Refresh',
    creator: 'Creator',
    operation: 'Operation',
    successfullySaved: 'Successfully saved',
    helpDoc: 'help',
    desc: 'Description',
    type: 'Type',
    name: 'Name',
    status: 'Status',
    serviceName: 'Service Name',
    realTimeLog: 'Real Time Log',
    inputDesc: 'Please input description',
    loading: 'Loading...'
  },
  login: {
    username: 'Username',
    password: 'Password',
    mail: 'mail',
    nickname: 'Nickname',
    inputUsername: 'Please input username',
    inputPass: 'Please input password',
    inputNickname: 'Please input nickname',
    inputMail: 'Please input mail',
    inputMailCheck: 'Please check the email format',
    inputUserInfo: 'Please input user info',
    inputNewPass: 'Please input new password',
    inputNewPassAgain: 'Please input new password again',
    passwordDontMatch: "Password don't match!",
    passwordLength: 'Password should be no less than 8 characters',
    signIn: 'Sign in',
    signUp: 'Sign up',
    signUpSuccess: 'Registration is successful, please login',
    forgotPassword: 'Forgot password',
    resetPassword: 'Reset password',
    resetSuccess: 'Reset successfully',
    confirmReset: 'Confirm reset',
    next: 'Next',
    resetLinkTip: 'The password reset link has been sent to your registered email address',
    setNewPassword: 'Set new password',
    sloganTitle: 'Let engineers focus more on creating',
    sloganDesc: 'The cloud-native continuous delivery platform engineers love: with important features such as flexible and easy-to-use high concurrency workflow, developer-oriented cloud-native environment, efficient and collaborative test management, powerful and maintenance-free template library, objective and accurate performance insights, and cloud-native IDE plugins to provide a unified collaboration plane for engineers.',
    companyInfo: 'KodeRover Technology Co., Ltd.'
  },
  sidebarMenu: {
    productDelivery: 'Product Delivery',
    status: 'Status',
    projects: 'Projects',
    forum: 'Forum',
    testCenter: 'Tests',
    deliveryCenter: 'Delivery',
    dataViews: 'Data Views',
    dataOverview: 'Overview',
    dataInsight: 'Insights',
    setting: 'Settings',
    sysSetting: 'System Setting',
    integration: 'Integrations',
    systemIntegration: 'Integrations',
    packages: 'Packages',
    images: 'Images',
    plugins: 'Plugins',
    infraIntegration: 'Infrastructure',
    dockerRegistry: 'Registry',
    objectStorage: 'Storage',
    helmRepo: 'HELM Repo',
    clusters: 'Clusters',
    hosts: 'Hosts',
    system: 'System',
    settings: 'Settings',
    users: 'Users',
    announcement: 'Announcement',
    auditLog: 'Audit Log',
    enterprise: 'Enterprise',
    enterpriseInfo: 'Enterprise Info',
    license: 'License',
    releaseCenter: 'Release',
    releaseWorkflows: 'Workflows',
    environmentGroups: 'Environments',
    customerDelivery: 'Customer Delivery',
    deliveryBoard: 'Board',
    deliveryVersion: 'Version',
    deliveryCustomers: 'Customers'
  },
  topbarMenu: {
    search: 'Search',
    username: 'Username',
    admin: 'Admin',
    user: 'User',
    users: 'Users',
    sysSetting: 'System Setting',
    enterprise: 'Enterprise',
    profile: 'Profile',
    signOut: 'Sign Out'
  },
  profile: {
    profile: 'Profile',
    changePassword: 'Change Password',
    oldPassword: 'Old password',
    newPassword: 'New password',
    confirmNewPassword: 'Confirm new password',
    changeMail: 'Change Mail',
    oldMail: 'Old mail',
    newMail: 'New mail',
    inputMail: 'Please input enterprise mail',
    pleaseCheckMail: 'Please check the email format',
    admin: 'Admin',
    user: 'User',
    lastAccessedOn: 'Last accessed on',
    source: 'Source',
    system: 'System',
    updatePassword: 'Update password',
    updateMail: 'Update mail',
    clickToChange: 'Click to change',
    notificationSetting: 'Notification setting',
    workflowStatusChanged: 'Workflow status changed',
    inputNewPass: 'Please input new password',
    inputOldPass: 'Please input old password',
    inputNewPassAgain: 'Please input new password again',
    passwordDontMatch: "Password don't match!",
    copiedToClipboard: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    passwordChangedSuccessfully: 'Password changed successfully',
    notificationSettingSavedSuccessfully: 'Notification setting saved successfully'
  },
  project: {
    loading: 'Loading...',
    newProject: 'New project',
    templates: 'Templates',
    buildTemplate: 'Build',
    editProject: 'Edit',
    deleteProject: 'Delete',
    privateProject: 'Private project',
    workflows: 'Workflows',
    environments: 'Environments',
    tests: 'Tests',
    services: 'Services',
    builds: 'Builds',
    codeScanner: 'Code Scanner',
    versions: 'Versions',
    artifacts: 'Artifacts',
    clusters: 'Clusters',
    noProjects: 'There is no item to show, please add',
    projectName: 'Name',
    projectIdentifier: 'Identifier',
    projectIdentifierTip: "The project identifier is a globally unique identifier of the project's resources, used for referencing and updating all resources under the project,automatically generated by default, supports manual editing, can't be changed after creation",
    type: 'Type',
    yamlProject: 'K8s YAML Project',
    yamlProjectFirstDesc: 'Kubernetes',
    yamlProjectSecondDesc: 'Managing and Deploying Services with Kubernetes YAML',
    helmProject: 'K8s Helm Chart Project',
    helmProjectFirstDesc: 'Kubernetes',
    helmProjectSecondDesc: 'Manage and deploy services with Helm Chart',
    hostingProject: 'K8s Hosting Project',
    hostingProjectFirstDesc: 'Hosting resources in existing Kubernetes clusters',
    hostingProjectSecondDesc: 'Service image updates are supported',
    hostsProject: 'Hosts Projects',
    hostsProjectFirstDesc: 'Using the cloud host',
    hostsProjectSecondDesc: 'Deploy and upgrade services using custom scripts',
    compatibility: 'Compatibility',
    advancedConfigurations: 'Advanced Configurations',
    accessPermission: 'Access',
    projectAdministrator: 'Administrator',
    private: 'Private',
    privateDesc: 'The project is not visible to normal users by default, project administrators can add members and configure the appropriate permissions.',
    public: 'Public',
    publicDesc: 'Users have public access by default to view workflows, environments, services, builds, tests, and other resources in the project.',
    inputUsernameToSearch: 'Please input name to search',
    selectCluster: 'Please select clusters',
    specifiedCluster: 'Clusters',
    confirmUpdate: 'Update',
    createNow: 'Create',
    inputProjectName: 'Please input project name',
    selectProjectAdmin: 'Please select project administrator',
    selectProjectAccessPermission: 'Please select permission',
    inputProjectIdentifier: 'Please input project identifier',
    inputProjectIdentifierCheck: 'Only lowercase letters and numbers are supported, and hyphens are supported in special characters',
    successfullySaved: 'Projects have been successfully created',
    successfullyUpdated: 'Projects have been successfully updated',
    environmentCounts: 'Environments',
    environmentsList: 'Environments',
    workflowsList: 'Workflows',
    workflowStage: 'Stages',
    lastUpdated: 'Last Updated',
    clusterInfo: 'Cluster',
    localCluster: 'Local',
    update: 'Update',
    projectDetail: 'Detail',
    createProject: 'Create Project',
    editProjectInfo: 'Edit Project'
  },
  workflowTaskStatus: {
    notRunning: 'Not running',
    created: 'Created',
    waiting: 'Waiting',
    running: 'Running',
    failed: 'Failed',
    passed: 'Passed',
    timeout: 'Timeout',
    cancelled: 'Cancelled',
    blocked: 'Blocked',
    queued: 'Queued',
    skipped: 'Skipped',
    prepare: 'Preparing',
    reject: 'Rejected'
  },
  sysSetting: {
    integration: {
      accountsTab: 'Accounts',
      projectTab: 'Project Management',
      gitProvidersTab: 'Git Providers',
      configsTab: 'Config Management',
      jenkinsTab: 'Jenkins',
      sonarTab: 'Sonar',
      otherSystemTab: 'Other System',
      gitProviders: {
        notIntegrated: 'The git provider has not yet been integrated, please integrate the git provider first and then continue.',
        provider: 'Provider',
        otherProvider: 'Other',
        giteeCE: 'Gitee(Community Edition)',
        giteeEE: 'Gitee(Enterprise Edition)',
        providerAlias: 'Alias',
        authStatus: 'Auth status',
        authSuccess: 'Success',
        authFailed: 'Failed',
        lastUpdated: 'Last updated',
        enableProxy: 'Enable proxy',
        editProvider: 'Edit',
        deleteProvider: 'Delete',
        tip: 'GitLab, GitHub, Gerrit, and Gitee integrations are supported,refer to the',
        addProviderTitle: 'Add Provider',
        editProviderTitle: 'Edit Provider',
        referToDoc: 'More configurations can be found in',
        appAuthCallbackTip: 'Callback address for application authorization:',
        appPermissionCheckTip: 'Please check the following permissions: ',
        otherProviderTipFirst: 'Support for standard Git protocol',
        otherProviderTipSecond: 'After integration, build/test templates can pull code from this provider',
        copyAddrSuccess: 'Copied to clipboard',
        copyAddrFailed: 'Copy failed',
        gitlabUrl: 'GitLab URL',
        gerritUrl: 'Gerrit URL',
        giteeUrl: 'Gitee URL',
        providerUrl: 'Provider URL',
        authMethod: 'Auth method',
        username: 'Username',
        password: 'Password',
        selectProvider: 'Please select provider',
        inputAddress: 'Please input URL, including the protocol',
        inputAccessToken: 'Please input access token',
        inputAppId: 'Please input client id',
        inputclientSecret: 'Please input client secret',
        inputUsername: 'Please input username',
        inputPass: 'Please input password',
        inputSSHKey: 'Please input SSH Key',
        inputPrivateAccessToken: 'Please input private access token',
        inputAlias: 'Please input alias',
        inputOtherProviderUrl: 'Please input provider URL',
        checkOtherProviderUrl: 'Please check the format',
        selectAuthMethod: 'Please select the authentication method',
        goToAuthorization: 'Go to authorize',
        proxyIsEnabled: 'Proxy is enabled',
        proxyIsDisabled: 'Proxy is disbaled',
        noProxy: '未配置代理，请先前往「系统配置」->「代理配置」配置代理！',
        proxyEnableFailed: 'Proxy configuration change faile:',
        getProxyConfigurationFailed: 'Failed to get proxy configuration:',
        confirmDeleteProvider: 'Are you sure to remove this provider?',
        deleteProviderSuccess: 'Provider has been removed',
        addProviderSuccess: 'Provider has been added',
        changeProviderInfoSuccess: 'Provider has been changed',
        changeProviderInfoSuccessAndGoToAuth: 'Provider has been changed,go to authorize'
      },
      accounts: {
        account: 'Account',
        accountType: 'Type',
        custom: 'Custom'
      }
    },
    packages: {},
    images: {},
    plugins: {},
    registry: {},
    storage: {},
    helmRepo: {},
    clusters: {},
    hosts: {},
    settings: {},
    users: {},
    announcement: {},
    auditLog: {}
  }
}