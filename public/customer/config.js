// ダッシュボード設定ファイル
// 「😎ゆうすけ😎」さん向け初期設定

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "歌推し様進捗スコア",
    "sidebarTitle": "YUSUKE",
    "footerText": "😎ゆうすけ😎",
    "footerSubText": "歌推し様進捗スコア",
    "pageTitle": "歌推し様進捗スコア",
    "loadingEmoji": "😎",
    "loadingText": "Loading...",
    "showHeader": false,
    "showTitle": true,
    "titleStyle": "glass",
    "titleGradient": true,
    "titleGradientDirection": "to-r",
    "titleGlow": true,
    "titlePosition": "center",
    "titleSize": "large"
  },
  "colors": {
    "deepBlue": "#0B0D12",
    "oceanTeal": "#171B22",
    "lightBlue": "#D5D9E0",
    "amber": "#C6A66A",
    "accent": "#713B45",
    "gold": "#E0BD73",
    "brightness": "dark"
  },
  "colorOverrides": {
    "titleGradientStart": "#F4E4B5",
    "titleGradientMid": "#D7DAE1",
    "titleGradientEnd": "#A7AFBE",
    "cardBorder": "#555B66",
    "cardBorderHover": "#C6A66A",
    "primaryText": "#E7D7A8",
    "accentText": "#D9C18A",
    "rank1Card": "#E0BD73",
    "backgroundMain": "#08090C",
    "backgroundMid": "#151820",
    "nameText": "#F5F2EA",
    "footerText": "#B8B3A8",
    "contentText": "#DDD8CE",
    "titleColor": "#F4E4B5",
    "subText": "#9A9CA3",
    "popupOverlayColor": "#050609",
    "popupOverlayOpacity": 0.84,
    "glassBgColor": "#12151B",
    "glassBgOpacity": 0.82,
    "menuCardLabelColor": "#252936",
    "menuCardLabelOpacity": 0.9,
    "tierCardBgColor": "#171B22",
    "tierCardBgOpacity": 0.88,
    "menuCardBgColor": "#11141A",
    "menuCardBgOpacity": 0.9,
    "sidebarBgColor": "#0B0D12",
    "sidebarBgOpacity": 0.95,
    "bottomNavBgColor": "#0B0D12",
    "bottomNavBgOpacity": 0.95
  },
  "fonts": {
    "display": "'Zen Maru Gothic', sans-serif",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700;900&display=swap",
    "body": "'M PLUS Rounded 1c', sans-serif",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap"
  },
  "images": {
    "headerDesktop": "",
    "headerMobile": "",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "eventSheetName": "イベント",
    "ranges": {
      "ranking": "D2:G5",
      "goals": "A2:B10",
      "benefits": "A3:E20"
    },
    "refreshIntervalMs": 300000
  },
  "views": [
    { "id": "menu", "label": "特典内容", "icon": "ph:gift:fill", "enabled": true, "title": "特典内容" },
    { "id": "rights", "label": "特典権利者", "icon": "ph:users:fill", "enabled": true, "title": "特典権利者" },
    { "id": "icons", "label": "枠内アイコン", "icon": "ph:star:fill", "enabled": true, "title": "枠内アイコン" },
    { "id": "home", "label": "Home", "icon": "ph:house:fill", "enabled": false },
    { "id": "events", "label": "イベント", "icon": "ph:confetti:fill", "enabled": false, "title": "イベント" }
  ],
  "benefitTiers": [
    { "key": "1k", "label": "ゆうすけ入門", "icon": "ph:star", "columnIndex": 0, "displayTemplate": "獲得済", "isBoolean": true, "showUsers": false, "showHistory": false, "lockedContent": { "text": "", "imageUrl": "" } },
    { "key": "3k", "label": "ゆうすけサポーター", "icon": "ph:seal-check", "columnIndex": 1, "displayTemplate": "獲得済", "isBoolean": true, "showUsers": true, "showHistory": false, "lockedContent": { "text": "", "imageUrl": "" } },
    { "key": "5k", "label": "ゆうすけマニア", "icon": "ph:diamond", "columnIndex": 2, "displayTemplate": "獲得済", "isBoolean": true, "showUsers": true, "showHistory": false, "lockedContent": { "text": "", "imageUrl": "" } },
    { "key": "10k", "label": "ゆうすけフリーク", "icon": "ph:medal", "columnIndex": 3, "displayTemplate": "獲得済", "isBoolean": true, "showUsers": true, "showHistory": false, "lockedContent": { "text": "", "imageUrl": "" } },
    { "key": "20k", "label": "ゆうすけマスター", "icon": "ph:crown", "columnIndex": 4, "displayTemplate": "獲得済", "isBoolean": true, "showUsers": true, "showHistory": false, "lockedContent": { "text": "", "imageUrl": "" } },
    { "key": "30k以上", "label": "ゆうすけレジェンド", "icon": "ph:sparkle:fill", "columnIndex": 5, "displayTemplate": "獲得済", "isBoolean": true, "showUsers": true, "showHistory": false, "lockedContent": { "text": "", "imageUrl": "" } }
  ],
  "home": {
    "faq": { "enabled": false, "accordion": true, "title": "FAQ・注意事項", "items": [] }
  },
  "menu": { "title": "特典内容" },
  "ui": {
    "userListTitle": "獲得者一覧",
    "userIconTitle": "{user} のアイコン",
    "searchPlaceholder": "名前で検索...",
    "specialRightLabel": "Special権利"
  },
  "effects": {
    "iconFloat": true,
    "particles": "bubble",
    "particleDirection": "up",
    "particleColor": "#C6A66A",
    "particleSize": 0.45,
    "particleOpacity": 0.28
  },
  "deploy": {
    "owner": "colorsing-dashboard",
    "repo": "yusuke",
    "branch": "main",
    "token": ""
  },
  "admin": {
    "password": "10043219",
    "developerKey": "CSadmin"
  }
}
