import cs_zh from '../views/setting/lang/zh.js'
import acl_zh from '@/modules/acl/lang/zh.js'
import oneterm_zh from '@/modules/oneterm/lang/zh.js'

export default {
    commonMenu: {
        permission: '权限管理',
        role: '角色管理',
        resource: '资源管理',
        resourceType: '资源类型',
        trigger: '触发器',
    },
    screen: '大屏',
    dashboard: '仪表盘',
    admin: '管理员',
    user: '用户',
    role: '角色',
    operation: '操作',
    login: '登录',
    refresh: '刷新',
    cancel: '取消',
    confirm: '确定',
    create: '创建',
    edit: '编辑',
    deleting: '正在删除',
    deletingTip: '正在删除，共{total}个，成功{successNum}个，失败{errorNum}个',
    grant: '授权',
    revoke: '回收',
    login_at: '登录时间',
    logout_at: '登出时间',
    createSuccess: '创建成功',
    editSuccess: '修改成功',
    warning: '警告',
    export: '导出',
    placeholderSearch: '请查找',
    success: '成功',
    fail: '失败',
    browser: '浏览器',
    status: '状态',
    type: '类型',
    description: '描述',
    new: '新增',
    add: '添加',
    define: '定义',
    update: '修改',
    clear: '清空',
    delete: '删除',
    copy: '复制',
    created_at: '创建日期',
    updated_at: '更新日期',
    placeholder1: '请输入',
    placeholder2: '请选择',
    confirmDelete: '确认删除？',
    confirmDelete2: '确认删除【{name}】?',
    query: '查询',
    search: '搜索',
    hide: '隐藏',
    expand: '展开',
    save: '保存',
    submit: '提交',
    upload: '导入',
    download: '下载',
    name: '名称',
    alias: '别名',
    desc: '描述',
    other: '其他',
    icon: '图标',
    addSuccess: '新增成功',
    uploadSuccess: '导入成功',
    saveSuccess: '保存成功',
    copySuccess: '复制成功',
    updateSuccess: '更新成功',
    deleteSuccess: '删除成功',
    operateSuccess: '操作成功',
    noPermission: '权限不足',
    noData: '暂无数据',
    seconds: '秒',
    createdAt: '创建时间',
    updatedAt: '更新时间',
    deletedAt: '删除时间',
    required: '必须',
    email: '邮件',
    wechat: '企业微信',
    dingding: '钉钉',
    feishu: '飞书',
    bot: '机器人',
    checkAll: '全选',
    loading: '加载中...',
    view: '查看',
    reset: '重置',
    yes: '是',
    no: '否',
    all: '全部',
    selectRows: '选取：{rows} 项',
    itemsPerPage: '/页',
    '星期一': '星期一',
    '星期二': '星期二',
    '星期三': '星期三',
    '星期四': '星期四',
    '星期五': '星期五',
    '星期六': '星期六',
    '星期日': '星期日',
    hour: '小时',
    'items/page': '{items} 条/页',
    max: '最大值',
    min: '最小值',
    visual: '虚拟',
    default: '默认',
    tip: '提示',
    pagination: {
        total: '当前展示 {range0}-{range1} 条数据， 共 {total} 条'
    },
    topMenu: {
        personalCenter: '个人中心',
        logout: '退出登录',
        confirmLogout: '确认退出登录吗？'
    },
    cmdbFilterComp: {
        conditionFilter: '条件过滤',
        and: '与',
        or: '或',
        is: '等于',
        '~is': '不等于',
        contain: '包含',
        '~contain': '不包含',
        start_with: '以...开始',
        '~start_with': '不以...开始',
        end_with: '以...结束',
        '~end_with': '不以...结束',
        '~value': '为空',
        value: '不为空',
        in: 'in查询',
        '~in': '非in查询',
        range: '范围',
        '~range': '范围外',
        compare: '比较',
        addHere: '在此处添加',
        split: '以 {separator} 分隔'
    },
    customIconSelect: {
        outlined: '线框',
        filled: '实底',
        multicolor: '多色',
        custom: '自定义',
        preview: '预览',
        sizeLimit: '图片大小不可超过2MB！',
        nodata: '暂无自定义图标，点击此处上传'
    },
    chartTime: {
        custom: '自定义时间',
        today: '今天',
        thisMonth: '本月',
        all: '全部',
        last: '过去',
        minutes: '分钟',
        hour: '小时',
        day: '天',
        week: '周',
        month: '月',
    },
    regexSelect: {
        limitedFormat: '限定格式',
        regExp: '正则表达式',
        errMsg: '错误时提示',
        test: '测试',
        placeholder: '请选择正则表达式',
        error: '错误',
        letter: '字母',
        number: '数字',
        letterAndNumber: '字母和数字',
        phone: '手机号码',
        landline: '座机',
        zipCode: '邮政编码',
        IDCard: '身份证号',
        ip: 'IP地址',
        email: '邮箱',
        link: '链接',
        monetaryAmount: '货币金额',
        custom: '自定义',
    },
    cs: cs_zh,
    acl: acl_zh,
    oneterm: oneterm_zh,
}
