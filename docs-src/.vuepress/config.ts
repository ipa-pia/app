/*
 * @Author: leoking
 * @Date: 2023-07-24 13:08:00
 * @LastEditTime: 2023-07-24 13:47:12
 * @LastEditors: leoking
 * @Description: 
 */
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'IPA',
    description: 'Intelligent Personal Assistance',
    base: "/docs/",
    dest: "${sourceDir}/../docs/"
})