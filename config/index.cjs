/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa4b64d37556ef43e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4c59b411b5048b5aa5bc1a715d319e0e',

  PROVINCE: '山西',
  CITY: '临汾',

  USERS: [
    {
      // 想要发送的人的名字
      name: '戎戎',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
     // id: "oj3u45izy01N9q6Nlywgie8U0loE",
       id: "oj3u45hFA1SAgKuh0-SE_Lpf7JLs",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'UjwRLte72gAz_ctCX8a1CmIf0j5Sd21KoL9i1Sv0th0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '戎戎', year: '2002', date: '12-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '涛涛', year: '2000', date: '03-10',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2022', date: '10-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '戎戎1',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
       id: "oj3u45izy01N9q6Nlywgie8U0loE",
       //id: "oj3u45hFA1SAgKuh0-SE_Lpf7JLs",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'UjwRLte72gAz_ctCX8a1CmIf0j5Sd21KoL9i1Sv0th0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '戎戎', year: '2002', date: '12-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '涛涛', year: '2000', date: '03-10',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2022', date: '10-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],

  
   

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'HyGrnmWaKCE6Hh-nbrhdbR_sbSJQ-cTT7GM7ihdTNw0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],


}

module.exports = USER_CONFIG
