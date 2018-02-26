/** ******************************
 * 全站通用配置文件
 *******************************/
const { resolve } = require('path')

const BASE_PATH = resolve(__dirname, '../../dist')

const DIST_PATH = 'index.html'

module.exports = {
    // 项目1
    'project1': `${BASE_PATH}/vue-project-1/${DIST_PATH}`,   
}
